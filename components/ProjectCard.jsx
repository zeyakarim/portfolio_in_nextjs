"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function ProjectDesignCard({ images, headerTitle, title, githubLink, liveLink }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef(null);

  // Auto-slide logic
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  // Hover controls
  const handleHoverStart = () => {
    setHovered(true);
    clearInterval(intervalRef.current);
  };

  const handleHoverEnd = () => {
    setHovered(false);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  // Manual navigation
  const goToIndex = (newIndex) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative h-[550px] w-full bg-[#FFCC60] rounded-xl overflow-hidden"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Header (fixed height) */}
      <div className="p-6 h-[20%]">
        <h4 className="text-2xl font-semibold text-white">{headerTitle}</h4>
        <p className="text-white/90 text-sm mt-1">{title}</p>
      </div>

      {/* Image Container (flexible height, no overflow) */}
      <div className="relative h-[65%] w-full flex items-center justify-center">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <Image
              src={images[currentIndex].src}
              alt="App Design"
              width={300}
              height={300}
              className="rounded-lg object-contain"
              style={{
                transform: `rotate(${images[currentIndex].rotation || "0deg"})`,
                maxWidth: "90%", /* Prevents edge clipping */
                maxHeight: "90%",
                boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots (fixed position) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 h-[15%] items-end">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white' : 'bg-white/30'}`}
          />
        ))}
      </div>

      {/* Hover Overlay */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-xl"
        >
          <div className="flex gap-6">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">
              <FaGithub size={30} />
            </a>
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">
                <FaExternalLinkAlt size={30} />
              </a>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}