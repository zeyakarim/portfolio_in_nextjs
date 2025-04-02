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

export default function SharkieProjectCard({ 
  images, 
  title = "Sharkie",
  subtitle = "JavaScript based jump-and-run game",
  tags = ["JavaScript", "HTML", "CSS"],
  githubLink,
  liveLink
}) {
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
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full max-w-[23rem] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col"
    >
      {/* Image Carousel - Fixed height */}
      <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-700">
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

      {/* Project Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2> {/* mb-2 → mb-3 */}
          
          <div className="flex flex-wrap gap-1 mb-4"> {/* mb-3 → mb-4 */}
            {tags.map((tag, index) => (
              <span 
                key={index}
                className={`${getTagColor(index)} px-3 py-1 rounded-full text-xs`}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-5">{subtitle}</p> {/* Added mb-5 */}
        </div>

        {/* Bottom Buttons with enhanced spacing */}
        <div className="mt-auto pt-8"> {/* pt-4 → pt-8, added pb-2 */}
          <div className="flex justify-end gap-3">
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
            
            {liveLink ? (
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
      </div>
    </motion.div>
  );
}