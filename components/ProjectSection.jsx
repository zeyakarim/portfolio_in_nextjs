"use client";

import { motion } from "framer-motion";
import { appImages, codielWebsiteImages, onlineCheckInWebsiteImages } from "../data/datas";
import ProjectCard from "./ProjectCard";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const ProjectSection = () => {
  const projects = [
    {
      images: codielWebsiteImages,
      headerTitle: 'Web Design',
      title: 'School Management Dashboard',
      subtitle: "Managing School Data in One Dashboard",
      githubLink: 'https://github.com/zeyakarim/school_management_app',
      liveLink: 'https://school-management-app-eta.vercel.app/',
      tags: ['Next.js', 'Tailwind CSS', 'PostGreDB', 'AWS']
    },
    {
      images: appImages,
      headerTitle: 'App Design',
      title: 'Groceries and essentials online',
      subtitle: "KROZA is a grocery and e-commerce platform",
      githubLink: 'https://github.com/zeyakarim/kroza_frontend_react_native_app',
      tags: ['React Native', 'Tailwind CSS', 'Node.js', 'PostGreDB', 'AWS']
    },
    {
      images: onlineCheckInWebsiteImages,
      headerTitle: 'Web Design',
      title: 'Online Hotel Check-In',
      subtitle: "Digitally Manage Hotel Check In",
      githubLink: 'https://github.com/zeyakarim/hotel_check_in_online_mode_frontend',
      tags: ['React.js', 'Tailwind CSS', 'Node.js', 'PostGreDB']
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={sectionVariants}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden w-[96.5%]"
      id="projects"
    >
      <div className="absolute inset-0 z-0 opacity-15" style={{ backgroundImage: "url('/noise.png')", backgroundSize: '400px' }}></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-2">
            My Creations
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base text-gray-300 max-w-3xl mx-auto">
            Discover the innovative projects I've built, showcasing my skills across web and mobile development.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ProjectCard 
                images={project.images} 
                headerTitle={project.headerTitle}
                title={project.title}
                subtitle={project.subtitle}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                tags={project.tags}
                className="relative bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-teal-500/20 cursor-pointer overflow-hidden"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 opacity-0 hover:opacity-100 transition-opacity duration-500" /> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
