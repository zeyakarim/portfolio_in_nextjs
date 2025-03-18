import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

export default function ProjectDesignCard({ images, githubLink, liveLink }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative h-[600px] w-[340px] md:w-[472px] lg:w-full bg-[#FFCC60] rounded-xl overflow-hidden flex flex-col items-center"
      style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Title */}
      <h4 className="text-3xl font-semibold text-white leading-tight text-start ml-10 py-2 w-full">
        App Design
      </h4>
      <p className="text-white text-start w-full ml-10">
        Groceries and essentials online
      </p>

      {/* Image Container */}
      <div className="relative w-full h-full flex justify-center items-center">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt="App Design"
            width={image.width}
            height={image.height}
            style={{
              boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)",
              transform: `rotate(${image.rotation})`,
              position: "absolute",
              right: `${image.offsetX}px`,
              bottom: `${image.offsetY}px`,
            }}
            className="rounded-lg object-cover z-20 transition-transform"
          />
        ))}
      </div>

      {/* Hover Icons */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex justify-center items-center bg-black/60 rounded-xl z-30"
        >
          <div className="flex space-x-6">
            {/* GitHub Link */}
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition">
              <FaGithub size={40} />
            </a>
            {/* Live URL Link */}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition">
                <FaExternalLinkAlt size={40} />
              </a>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
