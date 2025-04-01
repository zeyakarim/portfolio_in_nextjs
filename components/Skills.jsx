"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaTools } from "react-icons/fa";

// Animation variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

const Skills = ({ skills }) => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    // Categorize skills
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
        setSelectedSkill(null); // Reset selected skill
        setActiveCategory(category);
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="skills">
        {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center mb-16 relative"
            >
                {/* Decorative elements */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-1 bg-teal-500/20 rounded-full" />
        
                <motion.div 
                    className="flex flex-row items-center justify-center gap-4 mb-6 relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    {/* Animated icon background */}
                    <motion.div 
                        className="absolute -z-10 w-20 h-20 rounded-full bg-teal-100/50 dark:bg-teal-900/20"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.6, 0.8, 0.6]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    
                    <motion.div
                        whileHover={{ rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring" }}
                    >
                        <Image
                            src="/skills.png"
                            alt="Skills"
                            width={70}
                            height={70}
                            className="rounded-lg object-cover h-auto z-20 drop-shadow-lg"
                        />
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        My <span className="text-teal-500 relative"> Skills
                            <motion.span 
                                className="absolute -bottom-2 left-0 w-full h-1 bg-teal-500/30"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                            />
                        </span>
                    </h2>
                </motion.div>
        
                <motion.p 
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Technologies I've mastered through hands-on experience
                    <motion.span 
                        className="absolute -bottom-3 left-1/2 w-20 h-0.5 bg-teal-400/50 -translate-x-1/2"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />
                </motion.p>

                {/* Floating decorative elements */}
                <motion.div 
                    className="absolute -top-8 -left-8 w-4 h-4 rounded-full bg-teal-400/20"
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div 
                    className="absolute -bottom-4 -right-6 w-6 h-6 rounded-full bg-teal-600/10"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </motion.div>

            {/* Category Filters */}
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 mb-12"
            >
                {categories.map((category) => (
                    <motion.button
                        key={category.name}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCategoryChange(category.name)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                        activeCategory === category.name
                            ? "bg-teal-500/10 border-teal-500 text-teal-600 dark:text-teal-400 shadow-md"
                            : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-500"
                        }`}
                    >
                        <span className="text-lg">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                    </motion.button>
                ))}
            </motion.div>

            {/* Skills Grid */}
            <motion.div
                key={activeCategory} // Force re-render on category change
                variants={container}
                initial="hidden"
                animate="show" // Changed to animate for category changes
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
                {filteredSkills.length > 0 ? (
                filteredSkills.map((skill) => (
                    <motion.div 
                        key={skill.name} 
                        variants={item}
                        className="flex flex-col items-center"
                    >
                        <motion.div 
                            whileHover={{ 
                                scale: 1.1,
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-teal-100 dark:hover:border-teal-500/30 transition-all cursor-pointer relative group"
                            onClick={() => setSelectedSkill(skill)}
                        >
                            <div className="relative w-16 h-16 mx-auto">
                                <Image 
                                    src={skill.image} 
                                    alt={skill.name} 
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                                />
                            </div>
                        
                            {/* Floating label */}
                            <motion.div 
                                className="absolute -top-2 left-1/2 -translate-x-1/2 bg-teal-600 dark:bg-teal-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md flex items-center gap-1"
                                initial={{ y: 10 }}
                                whileHover={{ y: 0 }}
                            >
                                <div className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </div>
                                {skill.name}
                            </motion.div>
                            
                            {/* Proficiency indicator */}
                            <div className="absolute bottom-2 left-0 right-0 px-2">
                                <div className="h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.proficiency}%` }}
                                        transition={{ duration: 1 }}
                                        className={`h-full rounded-full ${
                                            skill.proficiency >= 80 ? 'bg-teal-500' :
                                            skill.proficiency >= 50 ? 'bg-teal-400' :
                                            'bg-teal-300'
                                        }`}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.p 
                            className="text-gray-700 dark:text-gray-300 mt-3 font-medium text-center text-sm md:text-base"
                            whileHover={{ color: "#0d9488" }}
                        >
                            {skill.name}
                        </motion.p>
                    </motion.div>
                ))
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-full text-center py-12"
                    >
                        <p className="text-gray-500 dark:text-gray-400">No skills found in this category</p>
                    </motion.div>
                )}
            </motion.div>

            {/* Skill Modal */}
            <AnimatePresence>
                {selectedSkill && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedSkill(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-100 dark:border-gray-700 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                        {/* Close button */}
                        <button 
                            onClick={() => setSelectedSkill(null)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Header with gradient */}
                        <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-8 text-center relative overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            
                            <div className="relative z-10">
                            <div className="w-24 h-24 mx-auto mb-6 relative">
                                <Image 
                                src={selectedSkill.image} 
                                alt={selectedSkill.name}
                                fill
                                className="object-contain drop-shadow-lg"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">{selectedSkill.name}</h2>
                            
                            {/* Proficiency badge */}
                            <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${
                                selectedSkill.proficiency >= 80 ? 'bg-teal-700 text-white' :
                                selectedSkill.proficiency >= 50 ? 'bg-teal-600 text-white' :
                                'bg-teal-500 text-white'
                            }`}>
                                <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
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

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Skill meter with animation */}
                            <div>
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Skill Level
                                </h3>
                                <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                                {selectedSkill.proficiency}%
                                </span>
                            </div>
                            
                            <div className="relative">
                                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${selectedSkill.proficiency}%` }}
                                    transition={{ duration: 1, type: "spring" }}
                                    className={`h-full rounded-full ${
                                    selectedSkill.proficiency >= 80 ? 'bg-gradient-to-r from-teal-500 to-teal-600' :
                                    selectedSkill.proficiency >= 50 ? 'bg-gradient-to-r from-teal-400 to-teal-500' :
                                    'bg-gradient-to-r from-teal-300 to-teal-400'
                                    }`}
                                />
                                </div>
                            
                                <div className="flex justify-between mt-3 px-1">
                                {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level, i) => (
                                    <div key={level} className="flex flex-col items-center">
                                    <div className={`w-2 h-2 rounded-full ${
                                        selectedSkill.proficiency >= (i * 25) + 25 ? 
                                        'bg-teal-500' : 'bg-gray-300 dark:bg-gray-600'
                                    }`} />
                                    <span className={`text-xs mt-1 ${
                                        selectedSkill.proficiency >= (i * 25) + 25 ? 
                                        'text-teal-600 dark:text-teal-400 font-medium' : 
                                        'text-gray-400'
                                    }`}>
                                        {level}
                                    </span>
                                    </div>
                                ))}
                                </div>
                            </div>
                            </div>

                            {/* Experience */}
                            {selectedSkill.experiences && (
                            <div>
                                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-3">
                                My Experience
                                </h3>
                                <ul className="space-y-3">
                                {Array.isArray(selectedSkill.experiences) ? (
                                    selectedSkill.experiences.map((exp, i) => (
                                    <motion.li 
                                        key={i} 
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start"
                                    >
                                        <span className="text-teal-500 flex-shrink-0 mt-1 mr-3">•</span>
                                        <span className="text-gray-700 dark:text-gray-300">{exp}</span>
                                    </motion.li>
                                    ))
                                ) : (
                                    <motion.li 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-start"
                                    >
                                    <span className="text-teal-500 flex-shrink-0 mt-1 mr-3">•</span>
                                    <span className="text-gray-700 dark:text-gray-300">{selectedSkill.experiences}</span>
                                    </motion.li>
                                )}
                                </ul>
                            </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-6 pb-6">
                            <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedSkill(null)}
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
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