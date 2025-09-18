"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const HeroHeader = () => {
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      // Adjusted duration for a smoother, more elegant count
      animate(count, 3, { duration: 3, ease: "easeOut" });
    }
  }, [count, isInView]);

  // Unified animation variants for better consistency
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-[#0D2F3F] to-[#1A4D5C] text-white"
    >
      {/* Refined and simplified background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-10 right-1/4 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3 }}
        />
        <motion.div
          className="absolute bottom-10 left-1/4 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.6 }}
        />
        {/* Subtle, less distracting particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 z-10">
        {/* Text content with enhanced animations */}
        <motion.div variants={containerVariants} className="flex-1 text-center md:text-left">
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-semibold text-white/80 mb-4 tracking-wide"
          >
            Hello, I am
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            {"Zeya Karim".split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.05 + 1,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
                className="inline-block"
                whileHover={{ scale: 1.1, color: "#4FD1C5" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-medium text-white/90">
              Senior Software Engineer
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-4 mt-2 rounded-full px-6 py-3 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-teal-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="text-sm font-semibold text-white">
                <motion.span className="text-xl font-extrabold mr-1 text-teal-300">
                  <motion.span>{roundedCount}</motion.span>+
                </motion.span>{" "}
                Years Experience
              </p>
            </div>
          </motion.div>

          {/* Call to action buttons with premium hover effects */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
            <motion.a
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold shadow-xl relative overflow-hidden group transition-transform duration-300"
              href="/zeya-karim-resume.pdf"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2">
                Download CV <FaExternalLinkAlt size={14} />
              </div>
              {/* Subtle shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-white/30 -translate-x-[110%] rotate-12 group-hover:translate-x-[110%] transition-transform duration-700"
              />
            </motion.a>

            <motion.a
              className="px-8 py-4 text-white rounded-full font-semibold border border-white/20 relative overflow-hidden group transition-transform duration-300"
              href="#experience"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image container with refined styling */}
        <motion.div
          className="flex-1 flex justify-center relative mt-12 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80, delay: 0.6 }}
        >
          <motion.div
            className="relative rounded-full overflow-hidden shadow-2xl border-8 border-white/20 transition-all duration-500 group"
            whileHover={{
              rotate: -2,
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(79, 209, 197, 0.4)",
              transition: { duration: 0.5 },
            }}
          >
            <Image
              src="/hero-section-image.png"
              alt="Zeya Karim"
              width={400}
              height={500}
              className="object-cover w-full h-auto"
              priority
            />

            {/* Subtle floating circles for depth */}
            <motion.div
              className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-teal-500 shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4, type: "spring" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-amber-500 shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroHeader;