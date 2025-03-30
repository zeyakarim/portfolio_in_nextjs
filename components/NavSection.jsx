"use client";

import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

const sections = ["about", "experience", "projects", "contact"];

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[90rem] mx-auto flex justify-between items-center py-6 px-6 z-10"
        >
            <h1 className="text-2xl font-semibold font-serif text-[#091434]">Zeya Karim</h1>
            
            {/* Navigation Menu */}
            <ul className="hidden md:flex space-x-6 text-[#091434]">
                {sections.map((section) => (
                    <li key={section}>
                        <a
                            href={`#${section}`}
                            className="relative px-4 py-2 cursor-pointer hover:text-teal-500 transition-all duration-300"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}

                            {/* Hover border effect */}
                            <span className="absolute inset-0 border-l-[5px] border-r-[5px] border-transparent hover:border-teal-600 rounded-full"></span>
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-2 text-[#091434]">
                <MdEmail size={18} />
                <p className="text-sm">zeyakarim79@gmail.com</p>
            </div>
        </motion.nav>
    );
};

export default Navbar;