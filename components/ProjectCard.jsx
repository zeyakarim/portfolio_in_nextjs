"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaCode, FaTwitter, FaTimes, FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const ProjectCard = ({ 
  images, 
  title = "Project Title",
  subtitle = "Project description",
  tags = ["Technology"],
  githubLink,
  liveLink,
  figmaLink,
  className = ""
}) => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [[popupIndex, popupDirection], setPopupIndex] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const intervalRef = useRef(null);
  const popupRef = useRef(null);

  // Animation variants for card images
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      zIndex: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 500, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      zIndex: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    })
  };

  // Animation variants for popup images
  const popupVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.2
      }
    })
  };

  // Auto-rotation with smooth transitions
  useEffect(() => {
    if (images.length <= 1) return;
    
    intervalRef.current = setInterval(() => {
      if (!isHovered && !showPopup) {
        setCurrentIndex(prev => [(prev[0] + 1) % images.length, 1]);
      }
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, isHovered, showPopup]);

  // Keyboard navigation for popup
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showPopup) return;
      
      if (e.key === 'Escape') {
        setShowPopup(false);
      }
      if (e.key === 'ArrowRight') {
        handlePopupNext();
      }
      if (e.key === 'ArrowLeft') {
        handlePopupPrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showPopup, popupIndex]);

  const getTagColor = (index) => {
    const colors = [
      'bg-teal-500/20 text-teal-200',
      'bg-cyan-500/20 text-cyan-200',
      'bg-teal-600/20 text-teal-300',
      'bg-cyan-600/20 text-cyan-300',
      'bg-teal-700/20 text-teal-400',
      'bg-cyan-700/20 text-cyan-400',
    ];
    return colors[index % colors.length];
  };

  const handleNext = () => {
    setCurrentIndex([(currentIndex + 1) % images.length, 1]);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handlePrev = () => {
    setCurrentIndex([(currentIndex - 1 + images.length) % images.length, -1]);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const openImagePopup = (index) => {
    setPopupIndex([index, 0]);
    setShowPopup(true);
  };

  const handlePopupNext = () => {
    setPopupIndex([(popupIndex + 1) % images.length, 1]);
  };

  const handlePopupPrev = () => {
    setPopupIndex([(popupIndex - 1 + images.length) % images.length, -1]);
  };

  // Preload images for smoother transitions
  useEffect(() => {
    images.forEach(img => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.src;
      document.head.appendChild(link);
    });
  }, [images]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className={`relative w-full max-w-[24rem] bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden h-full flex flex-col ${className}`}
        style={{ 
          border: "1px solid rgba(6, 182, 212, 0.2)",
          boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image Container */}
        <div 
          className="relative h-72 w-full bg-gray-800/50 overflow-hidden cursor-zoom-in"
          onClick={() => openImagePopup(currentIndex)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full h-full"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt || title}
                width={images[currentIndex].width || 384}
                height={images[currentIndex].height || 288}
                className={`object-cover ${images[currentIndex].rotation ? `rotate-${images[currentIndex].rotation}` : ''}`}
                style={{
                  transformOrigin: 'center',
                  marginLeft: images[currentIndex].offsetX ? `${images[currentIndex].offsetX}px` : 0,
                  marginTop: images[currentIndex].offsetY ? `${images[currentIndex].offsetY}px` : 0
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-teal-500/30 hover:bg-teal-500/50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm hover:scale-110"
                aria-label="Previous image"
              >
                <FaChevronLeft size={16} />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-teal-500/30 hover:bg-teal-500/50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm hover:scale-110"
                aria-label="Next image"
              >
                <FaChevronRight size={16} />
              </button>
            </>
          )}
          
          {/* Navigation Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex([index, index > currentIndex ? 1 : -1]);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-teal-400 w-6 scale-110' 
                      : 'bg-teal-200/50 hover:bg-teal-200/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Zoom hint */}
          <div className="absolute top-3 right-3 bg-teal-500/30 text-white text-xs px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            Zoom
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-1 relative z-10">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-teal-400 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
              {title}
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`${getTagColor(index)} px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap shadow-sm`}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Button Group */}
          <div className="mt-auto pt-4 border-t border-teal-500/20">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {githubLink && (
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-200 hover:text-teal-400 transition-colors p-2 rounded-lg"
                    aria-label="GitHub repository"
                  >
                    <FaGithub size={18} />
                  </motion.a>
                )}
                {figmaLink && (
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-200 hover:text-teal-400 transition-colors p-2 rounded-lg"
                    aria-label="Figma design"
                  >
                    <FiFigma size={18} />
                  </motion.a>
                )}
              </div>
              
              <div className="flex gap-3">
                {liveLink ? (
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </motion.a>
                ) : (
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <FaTwitter size={14} />
                    Follow
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Premium Image Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.div
              ref={popupRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl max-w-2xl w-full p-8 border border-teal-500/20 relative overflow-hidden"
              style={{ maxHeight: "80vh", overflowY: "auto", marginTop: "70px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 hover:text-white transition-colors z-50"
                aria-label="Close image viewer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={20} />
              </motion.button>

              {/* Main image container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Navigation arrows */}
                {images.length > 1 && (
                  <>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      onClick={(e) => { e.stopPropagation(); handlePopupPrev(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-teal-500/30 hover:bg-teal-500/50 text-white transition-all duration-300 backdrop-blur-sm"
                      aria-label="Previous image"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaChevronLeft size={20} />
                    </motion.button>
                    
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      onClick={(e) => { e.stopPropagation(); handlePopupNext(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-teal-500/30 hover:bg-teal-500/50 text-white transition-all duration-300 backdrop-blur-sm"
                      aria-label="Next image"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaChevronRight size={20} />
                    </motion.button>
                  </>
                )}

                {/* Animated image */}
                <AnimatePresence initial={false} custom={popupDirection}>
                  <motion.div
                    key={popupIndex}
                    custom={popupDirection}
                    variants={popupVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center p-4"
                  >
                    <div className="relative w-full h-full max-w-[90vw] max-h-[70vh]">
                      <Image
                        src={images[popupIndex].src}
                        alt={images[popupIndex].alt || title}
                        width={images[popupIndex].width || 800}
                        height={images[popupIndex].height || 600}
                        className={`object-contain ${images[popupIndex].rotation ? `rotate-${images[popupIndex].rotation}` : ''}`}
                        style={{
                          transformOrigin: 'center',
                          marginLeft: images[popupIndex].offsetX ? `${images[popupIndex].offsetX}px` : 0,
                          marginTop: images[popupIndex].offsetY ? `${images[popupIndex].offsetY}px` : 0
                        }}
                        priority
                        quality={100}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Image counter */}
              {images.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-6 left-0 right-0 flex justify-center z-20"
                >
                  <div className="text-teal-200 text-lg font-medium bg-teal-500/20 px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                    <span className="text-teal-400 font-bold">{popupIndex + 1}</span>
                    <span>/</span>
                    <span>{images.length}</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
