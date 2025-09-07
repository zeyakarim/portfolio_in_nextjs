"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HelloExperience = () => {
  // Experience Counter Animation
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (latest) => `${Math.floor(latest)}`);

  useEffect(() => {
    const controls = animate(count, 3, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [count]);

  // Background Spotlight Effect
  const divRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const currentDiv = divRef.current;
    if (currentDiv) {
      currentDiv.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (currentDiv) {
        currentDiv.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const lightGradient = {
    background: `transparent radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`,
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-start text-left max-w-3xl px-6 md:px-0 py-12 md:py-20 rounded-lg overflow-hidden"
      style={lightGradient}
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#0D2F3F] leading-tight">
          <span className="block mb-2 text-base md:text-lg font-medium text-teal-600">
            Hello, I'm
          </span>
          <span className="text-teal-600 relative inline-block">
            <Typewriter
              words={["Zeya Karim"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-[#0D2F3F] mt-4 leading-relaxed"
        >
          Crafting{" "}
          <span className="font-bold text-teal-600">
            exceptional user experiences
          </span>{" "}
          that people love.
        </motion.p>
      </div>

      {/* Experience Counter */}
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.span
          className="text-5xl md:text-6xl font-black text-teal-600 relative"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.1)" }}
        >
          <motion.span>{roundedCount}</motion.span>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-teal-600/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
          />
        </motion.span>

        <span className="text-xl md:text-2xl font-bold text-[#0D2F3F]">
          Years of
          <br />
          Experience
        </span>
      </motion.div>

      {/* Animated Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 100 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
          transition: { duration: 0.3 },
        }}
        className="mt-4 mb-8 inline-block rounded-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 shadow-lg"
      >
        <p className="text-lg font-semibold text-white flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          Senior Software Engineer
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-wrap gap-4 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)" }}
          whileTap={{ scale: 0.95 }}
          href="/zeya-karim-resume.pdf"
          download="Zeya_Karim_Resume.pdf"
          className="rounded-full px-6 py-3 bg-teal-600 text-white font-medium flex items-center gap-2 shadow-md hover:bg-teal-700 transition-all"
        >
          Download CV <FaExternalLinkAlt size={14} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="rounded-full px-6 py-3 bg-white text-[#0D2F3F] border border-[#0D2F3F] font-medium flex items-center gap-2 shadow-md hover:bg-gray-100 transition-all"
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        {[
          { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/zeya-karim-a1362a203/" },
          { icon: <FaGithub size={20} />, url: "https://github.com/zeyakarim" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.2, color: "#14B8A6" }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full p-3 text-[#0D2F3F] transition-all"
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HelloExperience;