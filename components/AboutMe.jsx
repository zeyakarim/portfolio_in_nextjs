import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
    return (
        <section className="relative mt-10 flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12">
            {/* Image Section - 1/3 */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/3 flex justify-center"
            >
                <motion.div 
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                    className="rounded-lg overflow-hidden shadow-lg bg-teal-600 p-2"
                >
                    <Image
                        src="/bootcamp.png"
                        alt="About"
                        width={300}
                        height={300}
                        className="w-full h-[300px] rounded-lg object-cover"
                    />
                </motion.div>
            </motion.div>

            {/* Text Section - 2/3 */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-2/3 text-left md:text-right"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-[#0D2F3F] text-lg text-justify leading-relaxed"
                >
                    I am a <strong className="text-teal-600">Full-Stack Software Developer</strong> with over three years of experience
                    building scalable and user-friendly web applications. With a strong foundation in the{" "}
                    <strong className="text-teal-600">MERN stack</strong>, I specialize in crafting seamless user experiences and optimizing
                    performance for e-commerce platforms and dynamic web solutions.
                    <br /><br />
                    Driven by a passion for <strong className="text-teal-600">clean code and continuous learning</strong>, I stay up-to-date
                    with the latest technologies to create innovative solutions. I thrive in{" "}
                    <strong className="text-teal-600">collaborative environments</strong>, where I can contribute my expertise while learning
                    from others. Whether it’s developing intuitive front-end interfaces or architecting robust
                    back-end systems, I am always eager to take on new challenges and push the boundaries of what’s
                    possible.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default AboutMe;
