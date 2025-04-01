"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experiences } from "../data/datas";

const WorkExperience = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full px-4 sm:px-6 lg:px-8 pt-20 bg-[#F8F7F1]"
            id="experience"
        >
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-20">
                <motion.div 
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Compact Icon with subtle animation */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative w-16 h-16"
                    >
                        <Image
                            src="/work-experience-icon.png"
                            alt="Work Experience"
                            fill
                            className="object-contain drop-shadow-sm"
                        />
                        <motion.div 
                            className="absolute inset-0 rounded-full border border-teal-400/20 pointer-events-none"
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity
                            }}
                        />
                    </motion.div>

                    {/* Compact Title */}
                    <div className="relative">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0D2F3F] dark:text-white text-center">
                            Work <span className="text-teal-600 relative inline-block">
                                Experience
                                <motion.span 
                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-400/30 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.6 }}
                                />
                            </span>
                        </h2>
                    </div>
                </motion.div>

                {/* Timeline Section */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Animated line - left on mobile, center on desktop */}
                    <motion.div 
                        className="absolute top-0 bottom-0 left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 sm:w-1"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 rounded-full" />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                    </motion.div>

                    {/* Experience Items */}
                    <div className="flex flex-col gap-16 pl-10 md:pl-0">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="relative"
                            >
                                {/* Timeline Dot - Left on mobile, center on desktop */}
                                <div className="absolute -left-10 md:left-1/2 md:-translate-x-1/2 top-6 flex justify-center h-full">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", delay: index * 0.1 + 0.3 }}
                                        viewport={{ once: true }}
                                        style={{ backgroundColor: exp.color }}
                                        className="z-10 w-5 h-5 md:w-7 md:h-7 rounded-full border-[3px] border-white shadow-lg transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:shadow-teal-200/50"
                                    >
                                        <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                </div>

                                {/* Content Container */}
                                <div className="grid md:grid-cols-10 gap-8">
                                    {/* Company Card - Full width on mobile, right on desktop */}
                                    <div className="md:col-span-4 md:order-first">
                                        <motion.div
                                            whileHover={{ 
                                                x: -5,
                                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                                borderColor: "#0d9488"
                                            }}
                                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all relative overflow-hidden group"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            
                                            <a 
                                                href={exp?.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="block relative z-10"
                                            >
                                                <h3 className="text-xl font-bold text-[#0D2F3F] hover:text-teal-600 transition-colors mb-3">
                                                    {exp.company}
                                                </h3>
                                            </a>
                                            <p className="text-gray-600 text-sm mb-4 relative z-10">
                                                {exp.companyDescription}
                                            </p>
                                            <div className="inline-flex items-center px-4 py-2 bg-teal-100/70 rounded-full border border-teal-200 relative z-10 group-hover:bg-teal-100 transition-colors">
                                                <span className="text-sm font-medium text-teal-800">
                                                    {exp.duration}
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Spacer for desktop layout */}
                                    <div className="hidden md:block md:col-span-2"></div>

                                    {/* Role Card - Full width on mobile, left on desktop */}
                                    <div className="md:col-span-4">
                                        <motion.div
                                            initial={{ x: 20 }}
                                            whileInView={{ x: 0 }}
                                            whileHover={{ 
                                                x: 5,
                                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                                borderColor: "#0d9488"
                                            }}
                                            transition={{ delay: index * 0.1 + 0.2 }}
                                            viewport={{ once: true }}
                                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all relative overflow-hidden group"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            
                                            <h4 className="text-lg font-bold text-[#0D2F3F] mb-4 pb-2 border-b border-gray-100 relative z-10">
                                                {exp.role}
                                            </h4>
                                            <ul className="space-y-4 relative z-10">
                                                {exp.descriptions?.map((description, i) => (
                                                    <motion.li 
                                                        key={i}
                                                        initial={{ opacity: 0, x: 10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 + i * 0.1 + 0.4 }}
                                                        viewport={{ once: true }}
                                                        className="relative pl-6 text-gray-600 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-teal-500 before:shadow-sm group-hover:before:bg-teal-600 transition-colors"
                                                    >
                                                        {description}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default WorkExperience;