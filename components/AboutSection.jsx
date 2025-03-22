"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "../data/datas";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutSection = () => {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full px-6 mt-10 max-w-[90rem] mx-auto"
        >
            <div id="about">
                <h2 className="text-5xl font-bold text-[#0D2F3F] leading-tight text-center" style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}>
                    About <span className="text-teal-600">Me</span>
                </h2>

                <AboutMe />

                {/* Skills Header */}
                <div className="flex flex-row items-center justify-center gap-4 mt-10">
                    <Image
                        src="/skills.png"
                        alt="Skills"
                        width={60}
                        height={60}
                        className="rounded-lg object-cover h-auto z-20"
                    />
                    <h4 className="text-4xl font-bold text-[#0D2F3F] leading-tight" style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}>Skills</h4>
                </div>

                <Skills skills={skills} />
            </div>
        </motion.section>
    );
};

export default AboutSection;