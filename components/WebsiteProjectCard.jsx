"use client";

import Image from 'next/image';
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaTwitter } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';

const TAG_COLORS = [
  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
];

const WebsiteProjectCard = ({ 
  images, 
  title, 
  githubLink, 
  liveLink,
  hasLiveView = true,
  isCaseStudy = false,
  tags = ["JavaScript", "HTML", "CSS"],
  subtitle = "Group management tool"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [images.length]);
    
  const getTagColor = (index) => {
    return TAG_COLORS[index % TAG_COLORS.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-[23rem] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Carousel with increased height */}
      <div className="relative h-[256px] w-full bg-gray-100 dark:bg-gray-700"> {/* Changed from h-64 to h-80 */}
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
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col h-full">
        <div className="flex-grow">
          {/* Header */}
          <div className="mb-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-2">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className={`${getTagColor(index)} px-3 py-1 rounded-full text-xs`}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <p className="text-[#A1A7B2] dark:text-gray-300 text-sm">{subtitle}</p>
        </div>

        {/* Fixed Bottom Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#B9BBBE] hover:bg-[#A1A7B2] transition-colors py-2 px-4 rounded-lg flex items-center justify-center"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode size={16} />
          </motion.a>
          
          {(hasLiveView && liveLink) ? (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF923E] hover:bg-[#e07d2e] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt size={14} />
              Live View
            </motion.a>
          ) : (
            <motion.p
              className="bg-[#FF923E] hover:bg-[#e07d2e] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter size={18} />
              Stay up to date
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default WebsiteProjectCard;