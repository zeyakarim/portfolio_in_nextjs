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
  title = "Project Title",
  subtitle = "Project description",
  tags = ["Technology"],
  githubLink,
  liveLink
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotation
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
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full max-w-[23rem] bg-white dark:bg-gray-800 rounded-xl overflow-hidden h-full flex flex-col"
      style={{ 
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px 0px",
        border: "1px solid #0D9488"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced border effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#FF923E]/30 pointer-events-none transition-all duration-300" />
      
      {/* Image Container */}
      <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
        {/* Subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />

        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              transition: { duration: 0.5 }
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
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-[#FF923E] transition-colors duration-200">
            {title}
          </h2>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`${getTagColor(index)} px-3 py-1 rounded-full text-xs font-medium`}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Button Group */}
        <div className="mt-auto pt-6">
          <div className="flex justify-end gap-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#0D2F3F] hover:bg-[#1a4a60] transition-all py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium shadow-sm"
            >
              <FaCode size={14} />
              Code
            </a>
            
            {liveLink ? (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FF923E] to-[#FF7B3A] hover:from-[#FF7B3A] hover:to-[#FF923E] text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm"
              >
                <FaExternalLinkAlt size={14} />
                Live View
              </a>
            ) : (
              <button
                className="bg-gradient-to-r from-[#FF923E] to-[#FF7B3A] hover:from-[#FF7B3A] hover:to-[#FF923E] text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm"
              >
                <FaTwitter size={16} />
                Follow Updates
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;