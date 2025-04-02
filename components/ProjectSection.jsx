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
      className="w-full px-4 sm:px-6 py-20 lg:py-28 max-w-[90rem] mx-auto bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      id="projects"
    >
      <div className="space-y-16">
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0D2F3F] dark:text-white">
            Project<span className="text-teal-600 dark:text-teal-400">s</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 bg-teal-600 dark:bg-teal-400 rounded-full"
          />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[90rem] mx-auto"
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
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;