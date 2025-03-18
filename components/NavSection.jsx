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
            className="w-full max-w-[90rem] mx-auto flex justify-between items-center py-6 px-6"
        >
            <h1 className="text-2xl font-semibold font-serif text-[#0D2F3F]">Zeya Karim</h1>
            
            {/* Navigation Menu */}
            <ul className="hidden md:flex space-x-6 text-[#0D2F3F]">
                {sections.map((section) => (
                    <li key={section}>
                        <a
                            href={`#${section}`}
                            className="px-4 py-2 hover:text-teal-500 transition hover:border-l-[5px] hover:border-r-[5px] hover:border-teal-600 hover:rounded-full hover:px-4 hover:py-2"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-2 text-[#0D2F3F]">
                <MdEmail size={18} />
                <p className="text-sm">zeyakarim79@gmail.com</p>
            </div>
        </motion.nav>
    );
};

export default Navbar;