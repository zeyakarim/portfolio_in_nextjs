"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HelloExperience = () => {
    // Enhanced Experience Counter Animation
    const count = useMotionValue(0);
    const roundedCount = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        const controls = animate(count, 3, { 
            duration: 2,
            ease: [0.16, 1, 0.3, 1] // Custom easing for smoother animation
        });
        return controls.stop;
    }, [count]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left max-w-2xl px-6 md:px-0"
        >
            {/* Header with Improved Typography */}
            <div className="mb-8">
                <h2 className="text-5xl md:text-7xl font-bold text-[#091434] leading-tight">
                    <span className="block mb-2 text-xl md:text-2xl font-medium text-teal-600">
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
                    className="text-xl md:text-2xl text-[#0D2F3F] mt-4 leading-relaxed"
                >
                    Crafting <span className="font-semibold text-teal-600">digital experiences</span> that users love
                </motion.p>
            </div>

            {/* Enhanced Experience Counter */}
            <motion.div 
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <div className="relative">
                    <motion.span 
                        className="text-6xl md:text-7xl font-extrabold text-[#0D2F3F] block"
                    >
                        {roundedCount}
                    </motion.span>
                    <motion.div 
                        className="absolute -bottom-2 left-0 w-full h-1 bg-teal-600"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                    />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-teal-600">
                    Years of<br />Experience
                </span>
            </motion.div>

            {/* Animated Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#14B8A6",
                    transition: { duration: 0.3 }
                }}
                className="mt-4 mb-8 inline-block rounded-full px-6 py-3 bg-[#0D2F3F] shadow-lg"
            >
                <p className="text-lg font-semibold text-white flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                    </span>
                    Full-Stack Developer
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/resume.pdf" 
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

            {/* Social Links with Improved Hover Effects */}
            <motion.div 
                className="flex gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
            >
                {[
                    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/zeya-karim-a1362a203/" },
                    { icon: <FaGithub size={20} />, url: "https://github.com/zeyakarim" },
                    // { icon: <FaTwitter size={20} />, url: "#" }
                ].map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-full p-3 bg-white text-[#0D2F3F] shadow-sm hover:shadow-md hover:text-teal-600 transition-all"
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default HelloExperience;