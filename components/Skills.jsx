import { motion } from "framer-motion";
import Image from "next/image";

const skillsContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }, // Delay effect for each skill
    },
};

const skillItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = ({ skills }) => {
    return (
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
                    className="flex flex-col items-center group"
                >
                    {/* Skill Icon with Hover Effect */}
                    <motion.div 
                        whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
                        className="p-3 rounded-lg bg-white shadow-md transition"
                    >
                        <Image 
                            src={skill.image} 
                            alt={skill.name} 
                            width={70} 
                            height={70} 
                            className="rounded-lg object-contain"
                        />
                    </motion.div>

                    {/* Skill Name */}
                    <p className="text-[#0D2F3F] text-lg mt-3 font-medium group-hover:text-teal-600 transition">
                        {skill.name}
                    </p>
                </motion.div>
            ))}
        </motion.section>
    );
};

export default Skills;