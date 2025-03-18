import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const WebsiteProjectCard = ({ images, headerTitle, title, githubLink, liveLink }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative text-left md:text-right h-[600px] w-[340px] md:w-[472px] lg:w-full bg-teal-600 rounded-xl overflow-hidden cursor-pointer"
            style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h4 className="text-3xl font-[600] text-[#fff] leading-tight text-start ml-4 pt-2">{headerTitle}</h4>
            <p className='text-[#fff] leading-tight text-start ml-4 text-sm'>{title}</p>

            {/* Images */}
            {images.map((image, index) => ( 
                <Image
                    key={image?.src}
                    src={image?.src}
                    alt="Project Image"
                    width={500}
                    height={270}
                    style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)", transform: 'rotate3d(1, 1, 1, -45deg)' }}
                    className={`rounded-lg object-cover h-auto z-20 ${index === images?.length - 1 && 'ml-[37px] mt-[-18px]'}`}
                />
            ))}

            {/* Hover Icons */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex justify-center items-center bg-black/60 rounded-xl"
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
};

export default WebsiteProjectCard;