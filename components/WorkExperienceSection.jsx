"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaBriefcase, FaChevronRight, FaExternalLinkAlt, FaUsers } from "react-icons/fa";
import { experiences } from "../data/datas";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
};

const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const experienceCardVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: 10 },
    show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 120, damping: 15 } },
    hover: {
        scale: 1.05,
        y: -10,
        boxShadow: "0 20px 40px rgba(6, 182, 212, 0.6), 0 0 0 5px rgba(6, 182, 212, 0.3)",
        transition: { type: "spring", stiffness: 200, damping: 10 }
    },
    tap: { scale: 0.98 }
};

const WorkExperience = () => {
    const [activeExperience, setActiveExperience] = useState(null);

    // Enhance experience with additional inferred features
    const enhanceExperience = (exp) => {
        const achievements = [];
        const projects = [];
        let teamSize = null;

        exp.descriptions.forEach(desc => {
            // Extract achievements
            if (desc.includes("increased") || desc.includes("optimized") || desc.includes("led") || desc.includes("built")) {
                achievements.push(desc);
            }
            // Extract projects
            if (desc.includes("developed") || desc.includes("built") || desc.includes("designed")) {
                projects.push(desc);
            }
            // Infer team size (e.g., "Led a team of 5")
            const teamMatch = desc.match(/team\s+of\s+(\d+)/i);
            if (teamMatch) teamSize = teamMatch[1];
        });

        return {
            ...exp,
            achievements: achievements.filter(a => a),
            projects: projects.filter(p => p),
            teamSize: teamSize
        };
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-[96.5%] min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
            id="experience"
        >
            <div className="absolute inset-0 z-0 opacity-15" style={{ backgroundImage: "url('/noise.png')", backgroundSize: '400px' }}></div>
            <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <motion.p variants={itemFadeUp} className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-2">
                        My Journey
                    </motion.p>
                    <motion.h2 variants={itemFadeUp} className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
                        Work <span className="gradient-text">Experience</span>
                    </motion.h2>
                    <motion.p variants={itemFadeUp} className="text-base text-gray-300 max-w-3xl mx-auto">
                        Explore my professional milestones and the impactful projects I've delivered across various industries.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            variants={experienceCardVariants}
                            initial="hidden"
                            whileInView="show"
                            whileHover="hover"
                            whileTap="tap"
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-teal-500/20 cursor-pointer overflow-hidden"
                            onClick={() => setActiveExperience(exp)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative w-16 h-16 mx-auto mb-4">
                                <Image
                                    src={exp.logo || "/briefcase-icon.png"} // Fallback to default if logo is missing
                                    alt={`${exp.company} icon`}
                                    width={64} // Fixed width
                                    height={64} // Fixed height
                                    className="object-cover transition-transform duration-300 hover:scale-110 rounded-full"
                                    style={{ filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))" }} // Subtle glow
                                />
                            </div>
                            <h3 className="text-xl font-bold text-teal-400 text-center mb-2 relative z-10">
                                {exp.company}
                            </h3>
                            <p className="text-gray-400 text-sm text-center mb-3 relative z-10">
                                {exp.role}
                            </p>
                            <div className="inline-flex items-center px-3 py-1 bg-teal-500/20 rounded-full border border-teal-400/30 text-teal-200 text-sm font-medium relative z-10">
                                {exp.duration}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {activeExperience && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4"
                            onClick={() => setActiveExperience(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl max-w-2xl w-full p-8 border border-teal-500/20 relative overflow-hidden"
                                style={{ maxHeight: "80vh", overflowY: "auto", marginTop: "70px" }} // Adjusted height and scroll
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setActiveExperience(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="text-center">
                                    <div className="relative w-24 h-24 mx-auto mb-6">
                                        <Image
                                            src={activeExperience.logo || "/briefcase-icon.png"} // Fallback to default if logo is missing
                                            alt={`${activeExperience.company} icon`}
                                            width={96} // Slightly larger for modal
                                            height={96} // Slightly larger for modal
                                            className="object-cover drop-shadow-xl rounded-full"
                                            style={{ filter: "drop-shadow(0 0 15px rgba(6, 182, 212, 0.7))" }} // Enhanced glow
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-teal-400 mb-2">
                                        {activeExperience.company}
                                    </h3>
                                    <p className="text-gray-300 mb-2">{activeExperience.role}</p>
                                    <div className="inline-flex items-center px-3 py-1 bg-teal-500/20 rounded-full border border-teal-400/30 text-teal-200 text-sm mb-4">
                                        {activeExperience.duration}
                                    </div>
                                    <h4 className="text-lg font-semibold text-teal-400 mb-3">Responsibilities:</h4>
                                    <ul className="space-y-2 text-gray-300 mb-6">
                                        {activeExperience.descriptions?.map((desc, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 + 0.2 }}
                                                className="flex items-start"
                                            >
                                                <FaChevronRight className="text-teal-400 mr-2 mt-1 flex-shrink-0" />
                                                <span>{desc}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    {activeExperience.companyDescription && (
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-teal-400 mb-2">Company Overview:</h4>
                                            <p className="text-gray-300">{activeExperience.companyDescription}</p>
                                        </div>
                                    )}
                                    {activeExperience.technologyUsed && activeExperience.technologyUsed.length > 0 && (
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-teal-400 mb-2">Technologies Used:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {activeExperience.technologyUsed.map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 bg-teal-500/20 text-teal-200 text-xs rounded-full">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {enhanceExperience(activeExperience).achievements.length > 0 && (
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-teal-400 mb-2">Key Achievements:</h4>
                                            <ul className="space-y-2 text-gray-300">
                                                {enhanceExperience(activeExperience).achievements.map((achieve, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 + 0.3 }}
                                                        className="flex items-start"
                                                    >
                                                        <FaChevronRight className="text-teal-400 mr-2 mt-1 flex-shrink-0" />
                                                        <span>{achieve}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {enhanceExperience(activeExperience).projects.length > 0 && (
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-teal-400 mb-2">Project Highlights:</h4>
                                            <ul className="space-y-2 text-gray-300">
                                                {enhanceExperience(activeExperience).projects.map((project, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 + 0.4 }}
                                                        className="flex items-start"
                                                    >
                                                        <FaChevronRight className="text-teal-400 mr-2 mt-1 flex-shrink-0" />
                                                        <span>{project}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {enhanceExperience(activeExperience).teamSize && (
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-teal-400 mb-2">Team Collaboration:</h4>
                                            <p className="text-gray-300 flex items-center">
                                                <FaUsers className="mr-2 text-teal-400" /> Worked with a team of {enhanceExperience(activeExperience).teamSize}.
                                            </p>
                                        </div>
                                    )}
                                    <a
                                        href={activeExperience.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 px-4 py-2 rounded-lg transition-colors"
                                    >
                                        Visit Company <FaExternalLinkAlt className="ml-2" />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default WorkExperience;