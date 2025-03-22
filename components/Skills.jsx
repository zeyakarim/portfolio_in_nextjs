import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const skillsContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }, // Better delay effect
    },
};

const skillItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills({ skills }) {
    const [selectedSkill, setSelectedSkill] = useState(null);

    return (
        <>
            <motion.section
                variants={skillsContainer}
                initial="hidden"
                animate="show"
                className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center"
            >
                {skills.map((skill) => (
                    <motion.div 
                        key={skill.name} 
                        variants={skillItem} 
                        className="flex flex-col items-center group cursor-pointer"
                        onClick={() => setSelectedSkill(skill)}
                    >
                        {/* Skill Icon with Enhanced Hover & Pulse Effect */}
                        <motion.div 
                            whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-lg bg-white shadow-md transition hover:shadow-xl relative"
                        >
                            <Image 
                                src={skill.image} 
                                alt={skill.name} 
                                width={70} 
                                height={70} 
                                className="rounded-lg object-contain"
                            />

                            {/* Tooltip on Hover */}
                            <motion.span 
                                className="absolute left-1/2 -translate-x-1/2 top-[-12px] 
                                    bg-teal-600 text-white text-[10px] px-1 py-1 
                                    rounded opacity-0 group-hover:opacity-100 transition 
                                    whitespace-nowrap"
                            >
                                {skill.description || "Show experience"}
                            </motion.span>

                        </motion.div>

                        {/* Skill Name */}
                        <p className="text-[#0D2F3F] text-lg mt-3 font-medium group-hover:text-teal-600 transition">
                            {skill.name}
                        </p>
                    </motion.div>
                ))}
            </motion.section>

            {/* Modal for More Skill Info */}
            {selectedSkill && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
                    onClick={() => setSelectedSkill(null)}
                >
                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg w-80 text-center"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                    >
                        <Image src={selectedSkill.image} alt={selectedSkill.name} width={80} height={80} />
                        <h2 className="text-xl font-bold mt-4">{selectedSkill.name}</h2>
                        <p className="text-gray-600 mt-2">{selectedSkill.experiences || "No additional info available."}</p>
                        <button 
                            onClick={() => setSelectedSkill(null)}
                            className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}