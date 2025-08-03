"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCode, FaServer, FaShoppingCart, FaBrain, FaLaptopCode, FaCogs } from "react-icons/fa";

export const textContent = [
  {
    id: 1,
    text: "I am a Senior Software Engineer with over three years of professional experience developing scalable, high-performance web applications. With deep expertise in full-stack development, I specialize in building robust e-commerce platforms, logistics solutions, and cloud-native systems using modern technologies like Next.js, Node.js, TypeScript, and PostgreSQL.",
    highlights: [
      "Senior Software Engineer",
      "full-stack development",
      "e-commerce platforms",
      "cloud-native systems"
    ],
    icons: [
      <FaCode key="code" />,
      <FaServer key="server" />,
      <FaShoppingCart key="cart" />
    ]
  },
  {
    id: 2,
    text: "I’m passionate about clean code, scalable architecture, and lifelong learning. I stay current with the latest tech trends and enjoy tackling complex problems through collaboration and innovation. From architecting full-stack platforms to mentoring peers and improving development workflows, I consistently strive to deliver impactful software solutions.",
    highlights: [
      "clean code",
      "scalable architecture",
      "collaboration",
      "mentoring"
    ],
    icons: [
      <FaBrain key="brain" />,
      <FaLaptopCode key="architecture" />,
      <FaCogs key="mentoring" />
    ]
  }
];


const HighlightedTypewriter = ({ content, speed = 20, delay = 0 }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const animationRef = useRef(null);
  const currentIndexRef = useRef(0);
  const [highlightedWords, setHighlightedWords] = useState([]);

  useEffect(() => {
    setIsMounted(true);
    
    setDisplayedText("");
    currentIndexRef.current = 0;
    setHighlightedWords([]);
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    if (!isMounted) return;

    const startTime = performance.now() + delay;

    const animate = (timestamp) => {
      if (timestamp < startTime) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = timestamp - startTime;
      const charsToShow = Math.min(
        Math.floor(elapsed / speed),
        content.text.length
      );

      if (charsToShow > currentIndexRef.current) {
        currentIndexRef.current = charsToShow;
        const currentText = content.text.slice(0, charsToShow);
        setDisplayedText(currentText);

        const newHighlights = content.highlights.filter(phrase => 
          currentText.includes(phrase)
        );
        setHighlightedWords(newHighlights);
      }

      if (charsToShow < content.text.length) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [content.text, speed, delay, isMounted]);

  const renderText = () => {
    if (!displayedText) return null;

    let result = [];
    let lastPos = 0;

    const highlights = content.highlights.flatMap(phrase => {
      if (!highlightedWords.includes(phrase)) return [];
      
      const index = displayedText.indexOf(phrase, lastPos);
      if (index !== -1) {
        lastPos = index + phrase.length;
        return { index, phrase };
      }
      return [];
    }).sort((a, b) => a.index - b.index);

    lastPos = 0;
    highlights.forEach(({ index, phrase }) => {
      if (index > lastPos) {
        const normalText = displayedText.slice(lastPos, index);
        result.push(normalText);
      }

      const highlightEnd = index + phrase.length;
      const phraseIndex = content.highlights.indexOf(phrase);
      const icon = content.icons[phraseIndex];

      result.push(
        <motion.span 
          key={index} 
          className="relative text-teal-600 font-bold bg-teal-100/50 px-1 py-0.5 rounded"
          initial={isMounted ? { backgroundColor: 'rgba(13, 148, 136, 0)' } : false}
          animate={isMounted ? { backgroundColor: 'rgba(13, 148, 136, 0.1)' } : false}
          transition={{ duration: 0.3 }}
          whileHover={isMounted ? { 
            scale: 1.05,
            backgroundColor: 'rgba(13, 148, 136, 0.2)',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          } : false}
        >
          {phrase}
          {isMounted && (
            <span className="absolute -top-3 -right-2 text-xs bg-teal-600 text-white p-1 rounded-full">
              {icon}
            </span>
          )}
        </motion.span>
      );

      lastPos = highlightEnd;
    });

    if (lastPos < displayedText.length) {
      result.push(displayedText.slice(lastPos, displayedText.length));
    }

    return result.length ? result : displayedText;
  };

  return (
    <div className="relative">
      {renderText()}
      {isMounted && currentIndexRef.current < content.text.length && (
        <motion.span 
          className="inline-block w-1 h-6 bg-teal-600 ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      )}
    </div>
  );
};

const AboutMe = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
      id="about"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {isMounted && [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-teal-600"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#0D2F3F]"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-teal-600">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={isMounted && isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full lg:w-2/5 flex justify-center relative"
          >
            <div className="relative">
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative z-10"
                whileHover={isMounted ? { scale: 1.03 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/bootcamp.png"
                  alt="Profile"
                  width={400}
                  height={500}
                  className="w-full h-[400px] object-cover"
                  priority
                />
              </motion.div>
              
              {isMounted && (
                <>
                  <motion.div 
                    className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-600 rounded-lg z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
                  <motion.div 
                    className="absolute -top-6 -right-6 w-24 h-24 bg-[#0D2F3F] rounded-full z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  />
                </>
              )}
            </div>
          </motion.div>

          {isMounted && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-3/5"
            >
              <div className="mb-6 flex border-b border-gray-200">
                {textContent.map((_, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 font-medium relative ${activeTab === index ? 'text-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {activeTab === index && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-1 bg-teal-600"
                        layoutId="underline"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    Part {index + 1}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#0D2F3F] text-lg leading-relaxed bg-white p-6 rounded-xl shadow-lg"
                >
                  <HighlightedTypewriter 
                    content={textContent[activeTab]} 
                    speed={15}
                    delay={activeTab === 0 ? 300 : 100}
                  />
                  
                  {activeTab === 0 && (
                    <motion.div 
                      className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (textContent[0].text.length * 0.015) + 0.5 }}
                    >
                      {['React', 'Node.js', 'MongoDB', 'PostGre (DB)', 'Express', 'Next.js'].map((tech, i) => (
                        <motion.div
                          key={tech}
                          className="bg-teal-50 border border-teal-100 rounded-lg px-3 py-2 text-sm font-medium text-teal-800 flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          whileHover={isMounted ? { scale: 1.05 } : {}}
                        >
                          <div className="w-2 h-2 bg-teal-600 rounded-full" />
                          {tech}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* <motion.div 
                className="flex justify-end mt-6 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <motion.button
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg font-medium shadow hover:shadow-md transition-shadow"
                  whileHover={isMounted ? { y: -2 } : {}}
                  whileTap={isMounted ? { scale: 0.98 } : {}}
                >
                  Download CV
                </motion.button>
                <motion.button
                  className="px-6 py-2 border border-teal-600 text-teal-600 rounded-lg font-medium hover:bg-teal-50 transition-colors"
                  whileHover={isMounted ? { y: -2 } : {}}
                  whileTap={isMounted ? { scale: 0.98 } : {}}
                >
                  Contact Me
                </motion.button>
              </motion.div> */}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;