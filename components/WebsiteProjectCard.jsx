"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';

const WebsiteProjectCard = ({ images, headerTitle, title, githubLink, liveLink }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  // Pause on hover
  const handleHoverStart = () => {
    setIsHovered(true);
    clearInterval(intervalRef.current);
  };

  // Resume on hover end
  const handleHoverEnd = () => {
    setIsHovered(false);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  // Manual navigation (optional)
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
      className="relative h-[500px] w-full bg-teal-600 rounded-xl overflow-hidden"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Header */}
      <div className="p-6">
        <h4 className="text-2xl font-semibold text-white">{headerTitle}</h4>
        <p className="text-white/90 text-sm mt-1">{title}</p>
      </div>

      {/* Sliding Images */}
      <div className="relative h-[70%] w-full overflow-hidden">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={images[currentIndex].src}
              alt="Project Image"
              width={400}
              height={250}
              className="rounded-lg object-cover"
              style={{
                transform: 'rotate3d(1, 1, 1, -15deg)',
                boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white' : 'bg-white/30'}`}
          />
        ))}
      </div>

      {/* Hover Overlay (GitHub/Live Links) */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-xl"
        >
          <div className="flex gap-6">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition">
              <FaGithub size={30} />
            </a>
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition">
                <FaExternalLinkAlt size={30} />
              </a>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default WebsiteProjectCard;