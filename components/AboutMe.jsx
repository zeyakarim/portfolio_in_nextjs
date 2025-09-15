"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import {
  FaCode,
  FaServer,
  FaShoppingCart,
  FaBrain,
  FaLaptopCode,
  FaCogs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
  FaInfoCircle,
} from "react-icons/fa";

// Data for the content and highlights
export const textContent = [
  {
    id: 1,
    text: "I am a Senior Software Engineer with over three years of professional experience developing scalable, high-performance web applications. With deep expertise in full-stack development, I specialize in building robust e-commerce platforms, logistics solutions, and cloud-native systems using modern technologies like Next.js, Node.js, TypeScript, and PostgreSQL.",
    highlights: [
      "Senior Software Engineer",
      "full-stack development",
      "e-commerce platforms",
      "cloud-native systems",
    ],
    icons: {
      "Senior Software Engineer": <FaCode />,
      "full-stack development": <FaServer />,
      "e-commerce platforms": <FaShoppingCart />,
      "cloud-native systems": <FaCogs />,
    },
  },
  {
    id: 2,
    text: "I’m passionate about clean code, scalable architecture, and lifelong learning. I stay current with the latest tech trends and enjoy tackling complex problems through collaboration and innovation. From architecting full-stack platforms to mentoring peers and improving development workflows, I consistently strive to deliver impactful software solutions.",
    highlights: ["clean code", "scalable architecture", "collaboration", "mentoring"],
    icons: {
      "clean code": <FaLaptopCode />,
      "scalable architecture": <FaBrain />,
      "collaboration": <FaInfoCircle />,
      "mentoring": <FaInfoCircle />,
    },
  },
];

// Reusable animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 10, stiffness: 100 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50, rotate: -5 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
  { name: "PostgreSQL", icon: <FaDatabase className="text-blue-600" /> },
  { name: "Express", icon: <FaServer className="text-gray-700 dark:text-gray-300" /> },
  { name: "Next.js", icon: <FaJsSquare className="text-black dark:text-white" /> },
];

const HighlightedTypewriter = ({ content, speed = 15 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, amount: 0.8 });

  // Typewriter effect
  useEffect(() => {
    if (!isInView) return;
    let currentText = "";
    let i = 0;
    setIsTypingComplete(false);

    const typingInterval = setInterval(() => {
      if (i < content.text.length) {
        currentText += content.text.charAt(i);
        setDisplayedText(currentText);
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [content, speed, isInView]);

  // Highlight logic (fixed duplicates)
  const parts = useMemo(() => {
    let currentText = displayedText;
    const result = [];
    const positions = [];

    content.highlights.forEach((phrase) => {
      let startIndex = currentText.indexOf(phrase);
      if (startIndex !== -1) {
        positions.push({
          text: phrase,
          start: startIndex,
          end: startIndex + phrase.length,
        });
      }
    });

    // Deduplicate highlights (avoid duplicate phrases at same position)
    const uniquePositions = positions.filter(
      (pos, index, self) =>
        index === self.findIndex((p) => p.start === pos.start && p.end === pos.end)
    );

    uniquePositions.sort((a, b) => a.start - b.start);

    let lastIndex = 0;
    uniquePositions.forEach((pos) => {
      if (pos.start > lastIndex) {
        result.push({
          type: "text",
          content: currentText.substring(lastIndex, pos.start),
        });
      }
      result.push({
        type: "highlight",
        content: pos.text,
        icon: content.icons[pos.text],
      });
      lastIndex = pos.end;
    });

    if (lastIndex < currentText.length) {
      result.push({ type: "text", content: currentText.substring(lastIndex) });
    }

    return result;
  }, [displayedText, content]);

  return (
    <div
      ref={textRef}
      className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light"
    >
      {parts.map((part, index) => {
        if (part.type === "highlight") {
          return (
            <span
              key={index}
              className="relative inline-block font-semibold text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/50 px-1 py-0.5 rounded-md"
            >
              {part.content}

              {/* Floating Icon Above */}
              {part.icon && (
                <span className="absolute -top-3 left-[96%] -translate-x-1/2 bg-teal-600 text-white text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap">
                  {part.icon}
                </span>
              )}
            </span>
          );
        }

        // normal text
        return <React.Fragment key={index}>{part.content}</React.Fragment>;
      })}


      {!isTypingComplete && (
        <motion.span
          className="inline-block w-1 h-6 bg-teal-600 dark:bg-teal-400 ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      )}
    </div>
  );
};

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-12 bg-white dark:bg-[#121212] overflow-hidden"
      id="about"
    >
      {/* Background shapes */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5 overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-600 dark:bg-teal-800 blur-3xl opacity-20 animate-pulse-slow" />
        <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600 dark:bg-blue-800 blur-3xl opacity-20 animate-pulse-slow-reverse" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          About <span className="text-teal-600 dark:text-teal-400">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-2/5 flex justify-center relative"
          >
            <div className="relative">
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 relative z-10"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/hero-section-image.png"
                  alt="Profile"
                  width={400}
                  height={500}
                  className="w-full h-[400px] object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div className="mb-6 flex border-b border-gray-200 dark:border-gray-700">
              {textContent.map((_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 font-medium relative transition-colors duration-300 ease-in-out ${activeTab === index
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    }`}
                  onClick={() => setActiveTab(index)}
                >
                  {activeTab === index && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-teal-600 dark:bg-teal-400"
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
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <HighlightedTypewriter content={textContent[activeTab]} speed={15} />

                {activeTab === 0 && (
                  <motion.div
                    className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.1 } },
                    }}
                  >
                    {techStack?.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        className="bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-900 rounded-lg px-4 py-2.5 text-sm font-medium text-teal-800 dark:text-teal-200 flex items-center gap-2 hover:bg-teal-100/80 dark:hover:bg-teal-900/80 transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        }}
                      >
                        <span className="text-lg">{tech.icon}</span>
                        {tech.name}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;