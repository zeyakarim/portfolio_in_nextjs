"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const HeroHeader = () => {
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      animate(count, 3, { duration: 2.5, ease: "easeOut" });
    }
  }, [count, isInView]);

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05 + 1,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-[#0D2F3F] to-[#1A4D5C]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.6 }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/30"
            style={{
              top: `${10 + (i * 6)}%`,
              left: `${5 + (i * 6)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20 bg-grid-white bg-center bg-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 z-10">
        {/* Text content with enhanced animations */}
        <motion.div
          variants={containerVariants}
          className="flex-1 text-center md:text-left"
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl font-semibold text-white/80 mb-4"
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
                variants={letterVariants}
                className="inline-block"
                whileHover={{ scale: 1.2, color: "#4FD1C5", transition: { duration: 0.2 } }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="inline-flex flex-wrap justify-center md:justify-start">
              {"Senior Software Engineer".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.2, duration: 0.7 }}
                  className="text-2xl md:text-3xl font-medium text-white/90 mr-3 mb-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-6 mt-2 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-white/20"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(79, 209, 197, 0.4)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-3 h-3 rounded-full bg-teal-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-lg font-semibold text-white">
                <motion.span className="text-2xl font-extrabold mr-1 text-teal-300">
                  <motion.span>{roundedCount}</motion.span>+
                </motion.span>{" "}
                Years Experience
              </p>
            </div>
          </motion.div>
          
          {/* Call to action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold shadow-lg relative overflow-hidden group"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="/zeya-karim-resume.pdf"
            >
              Download CV <FaExternalLinkAlt size={14} />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div 
                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
            </motion.button>
            
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold border border-white/20 relative overflow-hidden group"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#experience"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div 
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image container with enhanced styling */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 80, delay: 0.6 }}
        >
          <motion.div 
            className="relative rounded-full overflow-hidden shadow-2xl border-8 border-white/20 transition-all duration-500 group"
            whileHover={{ 
              rotate: -2, 
              boxShadow: "0 25px 50px -12px rgba(79, 209, 197, 0.4)",
              transition: { duration: 0.5 }
            }}
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
              initial={{ opacity: 0 }}
            />
            
            <div className="relative overflow-hidden rounded-full">
              <Image
                src="/hero-section-image.png"
                alt="Zeya Karim"
                width={400}
                height={500}
                className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-110 rounded-full"
                priority
                onLoadingComplete={() => setImageLoaded(true)}
              />
              
              {/* Shine effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"
                initial={{ x: "-100%" }}
              />
            </div>
            
            {/* Floating elements around image */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-teal-500 shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: 180 }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-amber-500 shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: -180 }}
            />
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-10 -right-10 w-20 h-20 border-4 border-teal-400/30 rounded-full"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.8, type: "spring" }}
          />
          <motion.div
            className="absolute -bottom-8 -left-8 w-16 h-16 border-4 border-amber-400/30 rounded-full"
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 2, type: "spring" }}
          />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="text-white/70 text-sm font-medium mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.div>
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1"
        >
          <motion.div
            className="w-2 h-2 bg-teal-400 rounded-full"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroHeader;