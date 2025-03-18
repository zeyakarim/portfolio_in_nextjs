"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experiences } from "../data/datas";

const WorkExperience = () => {
    return (
        <div id="experience" className="w-full px-6 mt-10 bg-[#F8F7F1] py-4">
            {/* Header */}
            <div className="flex flex-row items-center justify-center text-center gap-4">
                <Image
                    src="/work-experience-icon.png"
                    alt="work-experience"
                    width={60}
                    height={60}
                    className="rounded-lg object-cover h-auto z-20"
                />
                <h2 className="text-5xl font-bold text-[#0D2F3F]" style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}>Work <span className="text-teal-600">E</span>xperience</h2>
            </div>


            {/* Timeline Section */}
            <section className="mt-10 relative max-w-[90rem] mx-auto">
                {/* Center vertical dashed line */}
                <div className="absolute mt-10 top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] border-l-2 border-dashed border-gray-400 hidden md:block z-[1]"></div>

                {/* Experience Items */}
                <div className="flex flex-col gap-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                            className="relative grid md:grid-cols-3 gap-6 items-start"
                        >
                            {/* Left Side - Company & Duration */}
                            <div className="text-right pr-6">
                                <a href={exp?.link} target="_blank" rel="noopener noreferrer">
                                    <h3 className="text-xl font-semibold text-[#0D2F3F] hover:text-teal-600">{exp.company}</h3>
                                </a>
                                <p className="text-[#0D2F3F] text-justify">{exp.companyDescription}</p>
                                <p className="text-[#0D2F3F]">{exp.duration}</p>
                            </div>

                            {/* Middle - Timeline Dot */}
                            <div className="hidden md:flex justify-center relative">
                                <div
                                    className={`z-10 w-8 h-8 rounded-full ${exp.color} border-4 border-white shadow-lg transition-all duration-300 ease-in-out hover:scale-125 hover:border-gray-500`}
                                ></div>
                            </div>

                            {/* Right Side - Role & Description */}
                            <div className="text-left pl-6">
                                <h4 className="text-lg font-semibold text-[#0D2F3F]">{exp.role}</h4>
                                <ul className="list-disc list-inside text-gray-600 flex flex-col gap-4 mt-2">
                                    {exp.descriptions?.map((description, i) => (
                                        <li key={i}>{description}</li>
                                    ))}
                                </ul>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WorkExperience;