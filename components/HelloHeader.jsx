import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HelloHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-left"
        >
            <h2 className="text-6xl md:text-6xl font-bold text-[#0D2F3F] leading-tight flex flex-col">
                <span className="block mb-2">Hello! I'm</span>
                <span className="text-teal-600 relative inline-block">
                    <Typewriter
                        words={["Zeya Karim"]}
                        loop={1}
                        cursor={false}
                        typeSpeed={100}
                        delaySpeed={500}
                    />
                </span>
            </h2>

            {/* Buttons Wrapper */}
            <div className="mt-6 flex space-x-4">
                {/* Download CV Button */}
                <a href="/resume.pdf" download="Zeya_Karim_Resume.pdf">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="border rounded-full px-6 py-3 shadow-lg cursor-pointer bg-teal-600 text-white flex items-center gap-2 hover:bg-teal-700 transition"
                    >
                        <p className="text-[15px] font-semibold">Resume</p>
                        <FaExternalLinkAlt size={14} />
                    </motion.div>
                </a>


                {/* Contact Me Button */}
                <a href="#contact">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="border rounded-full px-6 py-3 shadow-lg cursor-pointer bg-gray-200 hover:bg-gray-300"
                    >
                        <p className="text-[15px] font-semibold">Contact Me</p>
                    </motion.div>
                </a>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex space-x-6 justify-start items-center">
            {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/zeya-karim-a1362a203/" target="_blank" rel="noopener noreferrer">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="rounded-full shadow-lg cursor-pointer bg-gray-100 p-3 hover:text-teal-600 transition duration-300"
                    >
                        <FaLinkedin size={24} />
                    </motion.div>
                </a>

                {/* GitHub */}
                <a href="https://github.com/zeyakarim" target="_blank" rel="noopener noreferrer">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="rounded-full shadow-lg cursor-pointer bg-gray-100 p-3 hover:text-teal-600 transition duration-300"
                    >
                        <FaGithub size={24} />
                    </motion.div>
                </a>
            </div>
        </motion.div>
    )
}

export default HelloHeader