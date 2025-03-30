"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HelloExperience = () => {
    // Experience Counter Animation
    const count = useMotionValue(0);
    const roundedCount = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        animate(count, 3, { duration: 1.5, ease: "easeOut" });
    }, [count]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start text-left max-w-2xl"
        >
            {/* Header */}
            <h2 className="text-5xl md:text-6xl font-bold text-[#091434] leading-tight">
                <span className="block mb-2">Hello! I'm</span>
                <span className="text-teal-600 relative inline-block">
                    <Typewriter
                        words={["Zeya Karim"]}
                        loop={0} // One-time animation
                        cursor
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h2>

            {/* Experience Counter */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg font-semibold mt-6"
            >
                <motion.span className="text-5xl font-extrabold text-[#0D2F3F]">
                    {roundedCount}
                </motion.span>{" "}
                <span className="text-3xl font-bold text-teal-600">Years Experience</span>
            </motion.p>

            {/* Design Statement */}
            <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-[#0D2F3F] text-lg mb-4 leading-relaxed"
            >
                I design beautifully simple things, and I love what I do.
            </motion.p>

            {/* Full-Stack Developer Badge */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1], // Scale effect
                    backgroundColor: ["#0D2F3F", "#14B8A6", "#0D2F3F"], // Dark Blue → Teal → Dark Blue
                    boxShadow: [
                        "0px 0px 0px rgba(0,0,0,0.1)",
                        "0px 6px 16px rgba(0,0,0,0.3)",
                        "0px 0px 0px rgba(0,0,0,0.1)",
                    ], // Glow effect
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mt-6 inline-block border rounded-full px-6 py-3 shadow-lg text-white transition-all"
            >
                <motion.p className="text-[18px] font-semibold text-white">
                    Full-Stack Developer
                </motion.p>
            </motion.div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
                {/* Download CV */}
                <a href="/resume.pdf" download="Zeya_Karim_Resume.pdf">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="border rounded-full px-6 py-3 shadow-lg cursor-pointer bg-teal-600 text-white flex items-center gap-2 hover:bg-teal-700 transition"
                    >
                        <p className="text-[15px] font-semibold">Resume</p>
                        <FaExternalLinkAlt size={14} />
                    </motion.div>
                </a>

                {/* Contact Me */}
                <a href="#contact">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="border rounded-full px-6 py-3 shadow-lg cursor-pointer bg-[#7d7d7d] hover:bg-gray-300"
                    >
                        <p className="text-[15px] font-semibold">Contact Me</p>
                    </motion.div>
                </a>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex space-x-6">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/zeya-karim-a1362a203/" target="_blank" rel="noopener noreferrer">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="rounded-full shadow-lg cursor-pointer bg-gray-100 p-3 text-[#091434] hover:text-teal-600 transition duration-300"
                    >
                        <FaLinkedin size={24} />
                    </motion.div>
                </a>

                {/* GitHub */}
                <a href="https://github.com/zeyakarim" target="_blank" rel="noopener noreferrer">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="rounded-full shadow-lg cursor-pointer bg-gray-100 p-3 text-[#091434] hover:text-teal-600 transition duration-300"
                    >
                        <FaGithub size={24} />
                    </motion.div>
                </a>
            </div>
        </motion.div>
    );
};

export default HelloExperience;