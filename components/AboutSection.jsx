"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "../data/datas";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const skillsContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }, // Stagger animations
    },
};

const skillItem = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const AboutSection = () => {
    return (
        <div id="about" className="w-full px-6 mt-10 max-w-[90rem] mx-auto">
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
    );
};

export default AboutSection;