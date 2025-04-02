"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaCode, FaTwitter } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const TAG_COLORS = [
  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
];

const ProjectCard = ({ 
  images, 
  title = "Sharkie",
  subtitle = "JavaScript based jump-and-run game",
  tags = ["JavaScript", "HTML", "CSS"],
  githubLink,
  liveLink
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Pause auto-rotation on hover
  useEffect(() => {
    if (isHovered) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [images.length, isHovered]);

  const getTagColor = (index) => {
    return TAG_COLORS[index % TAG_COLORS.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full max-w-[23rem] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel with enhanced interactions */}
      <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              transition: { type: 'spring', damping: 20, stiffness: 100 }
            }}
            exit={{ 
              x: -direction * 100, 
              opacity: 0,
              transition: { duration: 0.3 }
            }}
            className="absolute w-full h-full"
          >
            <Image
              src={images[currentIndex].src}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-grow">
          <motion.h2 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
            whileHover={{ color: "#FF923E" }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h2>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className={`${getTagColor(index)} px-3 py-1 rounded-full text-xs font-medium`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed"
            whileHover={{ color: "#0D2F3F" }}
            transition={{ duration: 0.3 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Enhanced Button Group */}
        <div className="mt-auto pt-6">
          <div className="flex justify-end gap-3">
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#0D2F3F] hover:bg-[#1a4a60] transition-all py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaCode size={14} />
              Code
            </motion.a>
            
            {liveLink ? (
              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FF923E] to-[#FF7B3A] hover:from-[#FF7B3A] hover:to-[#FF923E] text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaExternalLinkAlt size={14} />
                Live View
              </motion.a>
            ) : (
              <motion.button
                className="bg-gradient-to-r from-[#FF923E] to-[#FF7B3A] hover:from-[#FF7B3A] hover:to-[#FF923E] text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaTwitter size={16} />
                Follow Updates
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;