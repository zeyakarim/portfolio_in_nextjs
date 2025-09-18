"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaTools, FaChevronRight } from "react-icons/fa";

// --- Animation Variants ---
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

const categoryButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } },
    hover: { scale: 1.1, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.4)" },
    tap: { scale: 0.95 }
};

const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: 10 },
    show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 120, damping: 15 } },
    hover: {
        scale: 1.1,
        y: -15,
        boxShadow: "0 20px 40px rgba(6, 182, 212, 0.6), 0 0 0 5px rgba(6, 182, 212, 0.3)",
        transition: { type: "spring", stiffness: 200, damping: 10 }
    },
    tap: { scale: 0.95 }
};

const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 200, damping: 20 }
    },
    exit: {
        opacity: 0,
        y: 50,
        scale: 0.9,
        transition: { ease: "easeOut", duration: 0.3 }
    }
};

const Skills = ({ skills }) => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        { name: "All", icon: <FaCode /> },
        { name: "Frontend", icon: <FaCode /> },
        { name: "Backend", icon: <FaServer /> },
        { name: "Mobile", icon: <FaMobileAlt /> },
        { name: "Database", icon: <FaDatabase /> },
        { name: "DevOps", icon: <FaTools /> },
        { name: "Tools", icon: <FaTools /> }
    ];

    const filteredSkills = activeCategory === "All"
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    const handleCategoryChange = (category) => {
        setSelectedSkill(null);
        setActiveCategory(category);
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-black text-white min-h-screen relative overflow-hidden" id="skills">
            <div className="absolute inset-0 z-0 opacity-15" style={{ backgroundImage: "url('/noise.png')", backgroundSize: '400px' }}></div>
            <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <motion.p variants={itemFadeUp} className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-2">
                        My Expertise
                    </motion.p>
                    <motion.h2 variants={itemFadeUp} className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
                        A Spectrum of <span className="gradient-text">Skills</span>
                    </motion.h2>
                    <motion.p variants={itemFadeUp} className="text-base text-gray-300 max-w-3xl mx-auto">
                        A curated collection of technologies and tools I've mastered, driving innovative solutions across the full stack.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.name}
                            variants={categoryButtonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => handleCategoryChange(category.name)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ease-in-out text-base font-medium ${
                                activeCategory === category.name
                                    ? "bg-gradient-to-br from-teal-500 to-cyan-600 border-teal-500 text-white shadow-lg"
                                    : "bg-gray-800/50 backdrop-blur-md border-gray-700 text-gray-300 hover:border-teal-400 hover:text-teal-400 shadow-md"
                            }`}
                        >
                            <span className="text-lg">{category.icon}</span>
                            <span>{category.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    key={activeCategory}
                    variants={sectionVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-12"
                >
                    <AnimatePresence>
                        {filteredSkills.length > 0 ? (
                            filteredSkills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    variants={skillCardVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="flex flex-col items-center p-4 rounded-xl bg-gray-900/80 backdrop-blur-md border border-teal-500/20 cursor-pointer relative overflow-hidden group shadow-2xl transform-gpu"
                                    onClick={() => setSelectedSkill(skill)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative w-16 h-16 mb-3 z-10">
                                        <Image
                                            src={skill.image}
                                            alt={skill.name}
                                            fill
                                            className="object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                                        />
                                    </div>
                                    <p className="text-gray-200 font-medium text-center text-base z-10">
                                        {skill.name}
                                    </p>
                                    <div className="absolute bottom-3 left-0 right-0 px-3">
                                        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.proficiency}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className={`h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-600`}
                                            />
                                        </div>
                                    </div>
                                    <motion.div
                                        className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {skill.category}
                                    </motion.div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-12"
                            >
                                <p className="text-gray-500">No skills found in this category.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedSkill && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedSkill(null)}
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl max-w-xl w-full border border-teal-500/20 relative overflow-hidden text-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedSkill(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors z-20 text-gray-300 hover:text-white"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="bg-gradient-to-br from-teal-600 to-cyan-700 p-6 text-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[url('/grid-pattern.svg')] bg-cover mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

                                <div className="relative z-10 flex flex-col items-center">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="w-24 h-24 mx-auto mb-4 relative rounded-full bg-white/10 p-2 flex items-center justify-center shadow-lg"
                                    >
                                        <Image
                                            src={selectedSkill.image}
                                            alt={selectedSkill.name}
                                            fill
                                            className="object-contain drop-shadow-xl"
                                        />
                                    </motion.div>
                                    <h2 className="text-3xl font-bold text-white mb-2">{selectedSkill.name}</h2>
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium tracking-wide ${
                                        selectedSkill.proficiency >= 80 ? 'bg-white/20 text-teal-100' :
                                        selectedSkill.proficiency >= 50 ? 'bg-white/15 text-cyan-100' :
                                        'bg-white/10 text-blue-100'
                                    }`}>
                                        <span className="relative flex h-2 w-2 mr-2">
                                            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                        </span>
                                        {selectedSkill.proficiency}% Proficiency • {
                                            selectedSkill.proficiency >= 80 ? 'Expert' :
                                            selectedSkill.proficiency >= 50 ? 'Proficient' :
                                            'Developing'
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                                            Skill Level
                                        </h3>
                                        <span className="text-lg font-bold text-teal-400">
                                            {selectedSkill.proficiency}%
                                        </span>
                                    </div>
                                    <div className="relative">
                                        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${selectedSkill.proficiency}%` }}
                                                transition={{ duration: 1, type: "spring", delay: 0.2 }}
                                                className={`h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-600`}
                                            />
                                        </div>
                                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                                            {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level, i) => (
                                                <div key={level} className="flex flex-col items-center">
                                                    <div className={`w-2.5 h-2.5 rounded-full ${
                                                        selectedSkill.proficiency >= (i * 25) + 25 ?
                                                        'bg-teal-500' : 'bg-gray-600'
                                                    }`} />
                                                    <span className={`text-xs mt-1 ${
                                                        selectedSkill.proficiency >= (i * 25) + 25 ?
                                                        'text-teal-400 font-medium' :
                                                        'text-gray-500'
                                                    }`}>
                                                        {level}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {selectedSkill.experiences && (
                                    <div>
                                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                                            My Experience with {selectedSkill.name}
                                        </h3>
                                        <ul className="space-y-3">
                                            {Array.isArray(selectedSkill.experiences) ? (
                                                selectedSkill.experiences.map((exp, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 + 0.3 }}
                                                        className="flex items-start text-gray-300 leading-relaxed"
                                                    >
                                                        <FaChevronRight className="text-teal-400 flex-shrink-0 mt-1 mr-2" />
                                                        <span>{exp}</span>
                                                    </motion.li>
                                                ))
                                            ) : (
                                                <motion.li
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="flex items-start text-gray-300 leading-relaxed"
                                                >
                                                    <FaChevronRight className="text-teal-400 flex-shrink-0 mt-1 mr-2" />
                                                    <span>{selectedSkill.experiences}</span>
                                                </motion.li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="px-6 py-4 border-t border-teal-500/20 bg-gray-900/80">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.5)" }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelectedSkill(null)}
                                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 text-base"
                                >
                                    Close Details
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;