"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
    transition: { type: "spring", damping: 15, stiffness: 100, duration: 0.8 },
  },
};

const techStack = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "PostgreSQL", icon: <FaDatabase className="text-blue-400" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
  { name: "Express", icon: <FaServer className="text-gray-500 dark:text-gray-300" /> },
  { name: "Next.js", icon: <FaJsSquare className="text-blue-400 dark:text-gray-100" /> },
];

const HighlightedTypewriter = ({ content, speed = 10 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, amount: 0.8 });

  // Typewriter effect
  useEffect(() => {
    if (!isInView || !content || !content.text) return;
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

  // Highlight logic
  const parts = useMemo(() => {
    if (!content || !content.text) return [];
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
      className="text-gray-200 text-lg leading-relaxed font-light tracking-wide"
    >
      {parts.map((part, index) => {
        if (part.type === "highlight") {
          return (
            <span
              key={index}
              className="relative inline-block font-semibold text-teal-400 bg-teal-500/10 px-2 py-1 rounded-lg transition-all duration-300 hover:bg-teal-500/20"
            >
              {part.content}
              {part.icon && (
                <motion.span
                  className="absolute -top-3 left-[95%] -translate-x-1/2 bg-teal-500 text-white text-sm p-2 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                >
                  {part.icon}
                </motion.span>
              )}
            </span>
          );
        }
        return <React.Fragment key={index}>{part.content}</React.Fragment>;
      })}
      {!isTypingComplete && (
        <motion.span
          className="inline-block w-1 h-6 bg-teal-400 ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.7 }}
        />
      )}
    </div>
  );
};

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [activePart, setActivePart] = useState(1); // Default to Part 1

  const handlePartClick = (partId) => {
    setActivePart(partId);
  };

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-gray-950 to-gray-900 overflow-hidden rounded-lg"
      id="about"
    >
      {/* Background shapes */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="absolute top-1/6 left-1/6 w-80 h-80 rounded-full bg-teal-500/20 blur-3xl opacity-50 animate-pulse"
        />
        <motion.div
          className="absolute bottom-1/6 right-1/6 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl opacity-50 animate-pulse-slow"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white tracking-tight"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          About <span className="text-teal-400">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Section with Toggleable Parts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[82%]"
          >
            <div className="mb-4">
              <button
                onClick={() => handlePartClick(1)}
                className={`mr-4 px-4 py-2 rounded-2xl ${
                  activePart === 1
                    ? "bg-teal-500 text-white"
                    : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                }`}
              >
                Part 1
              </button>
              <button
                onClick={() => handlePartClick(2)}
                className={`px-4 py-2 rounded-2xl ${
                  activePart === 2
                    ? "bg-teal-500 text-white"
                    : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                }`}
              >
                Part 2
              </button>
            </div>
            <motion.div
              className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HighlightedTypewriter
                content={textContent.find((part) => part.id === activePart)}
                speed={10}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-2 sm:grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="relative p-1 px-2 rounded-lg overflow-hidden group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                }}
              >
                <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-lg rounded-lg border border-gray-700/50 transition-opacity duration-300 group-hover:bg-gray-700/80" />
                <div className="relative z-10 px-4 py-2 text-sm font-medium flex items-center gap-2 text-gray-200 group-hover:text-teal-400 transition-colors duration-300">
                  <span className="text-lg">{tech.icon}</span>
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;