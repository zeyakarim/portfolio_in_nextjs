"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const skillsContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        },
    },
};

const skillItem = {
    hidden: { opacity: 0, y: 20 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            type: "spring",
            damping: 10,
            stiffness: 100
        } 
    },
};

export default function Skills({ skills }) {
    const [selectedSkill, setSelectedSkill] = useState(null);

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                variants={skillsContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
                {skills.map((skill) => (
                    <motion.div 
                        key={skill.name} 
                        variants={skillItem}
                        className="flex flex-col items-center"
                    >
                        <motion.div 
                            whileHover={{ 
                                scale: 1.1,
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-teal-100 transition-all cursor-pointer relative group"
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
                        
                            <motion.div 
                                className="absolute -top-2 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                                initial={{ y: 10 }}
                                whileHover={{ y: 0 }}
                            >
                                {skill.name}
                            </motion.div>
                        </motion.div>

                        <motion.p 
                            className="text-gray-700 mt-3 font-medium text-center text-sm md:text-base"
                            whileHover={{ color: "#0d9488" }}
                        >
                            {skill.name}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>

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
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-100 dark:border-gray-700"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header with teal gradient */}
                            <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-6 text-center relative overflow-hidden">
                                {/* Subtle noise texture */}
                                <div className="absolute inset-0 bg-noise opacity-10" />
                                
                                <div className="relative z-10">
                                    <div className="w-20 h-20 mx-auto mb-4 relative">
                                        <Image 
                                            src={selectedSkill.image} 
                                            alt={selectedSkill.name}
                                            fill
                                            className="object-contain drop-shadow-lg"
                                        />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">{selectedSkill.name}</h2>
                                    
                                    {/* Proficiency badge with teal variants */}
                                    <div className={`mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                        (selectedSkill.proficiency || 0) >= 80 ? 'bg-teal-700 text-teal-100' :
                                        (selectedSkill.proficiency || 0) >= 50 ? 'bg-teal-600/90 text-white' :
                                        'bg-teal-500/80 text-white'
                                    }`}>
                                        {selectedSkill.proficiency || 70}% • {
                                            (selectedSkill.proficiency || 0) >= 80 ? 'Expert' :
                                            (selectedSkill.proficiency || 0) >= 50 ? 'Proficient' :
                                            'Developing'
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Enhanced Proficiency Meter */}
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Skill Mastery
                                        </h3>
                                        <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                                            {selectedSkill.proficiency || 70}%
                                        </span>
                                    </div>
                                    
                                    <div className="relative">
                                    {/* Main progress bar */}
                                        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${selectedSkill.proficiency || 70}%` }}
                                                transition={{ duration: 1, type: "spring" }}
                                                className="h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-500"
                                            />
                                        </div>
                                    
                                        {/* Experience milestones with teal accent */}
                                        <div className="flex justify-between mt-3 px-1">
                                            {[0, 25, 50, 75, 100].map((mark) => (
                                                <div key={mark} className="flex flex-col items-center">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${
                                                        (selectedSkill.proficiency || 0) >= mark ? 
                                                        'bg-teal-500' : 'bg-gray-300 dark:bg-gray-600'
                                                    }`} />
                                                    <span className={`text-[10px] mt-1 ${
                                                        (selectedSkill.proficiency || 0) >= mark ? 
                                                        'text-teal-600 dark:text-teal-400 font-medium' : 
                                                        'text-gray-400'
                                                    }`}>
                                                        {mark}%
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Skill Description */}
                                {/* <div>
                                    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-2">
                                    Description
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                    {selectedSkill.description || "No description available."}
                                    </p>
                                </div> */}

                                {/* Projects/Experience */}
                                {selectedSkill.experiences && (
                                    <div>
                                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-2">
                                            Key Experiences
                                        </h3>
                                        <ul className="space-y-2">
                                            {selectedSkill.experiences.split('\n').map((exp, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-teal-500 flex-shrink-0 mt-1 mr-2">•</span>
                                                    <span className="text-gray-700 dark:text-gray-300">{exp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Footer with teal button */}
                            <div className="px-6 pb-6">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelectedSkill(null)}
                                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-md"
                                >
                                    Close
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}