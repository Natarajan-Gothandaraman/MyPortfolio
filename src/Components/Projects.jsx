import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Updated data: Added a 'features' array to each project
const projectsData = [
  {
    "name": "Employee Management System",
    "image": "/Project1.PNG",
    "description": "A full-stack CRUD application with a React frontend and Spring Boot backend for managing employee data.",
    "features": [
      "Full-stack CRUD functionality",
      "React Frontend & Spring Boot Backend",
      "Optimized REST APIs",
      "Unit testing with JUnit & Mockito"
    ],
    "tech": ["React", "Spring Boot", "MySQL", "JUnit"],
    "githubLink": "https://github.com/Natarajan-Gothandaraman/Fullstack-webapp",
    "liveLink": ""
  },
  {
    "name": "Searchy – YouTube Search",
    "image": "/public/assets/project2.png",
    "description": "A modern, distraction-free YouTube video search app with a draggable modal viewer and search history.",
    "features": [
      "Modern, distraction-free UI",
      "Draggable & resizable video modal",
      "Manages search history",
      "Responsive for all devices"
    ],
    "tech": ["HTML", "TailwindCSS", "JavaScript", "API"],
    "githubLink": "https://github.com/Natarajan-Gothandaraman/Searchy",
    "liveLink": "https://searchy-pro.vercel.app/"
  },
  {
    "name": "E-Commerce Website (Zindra)",
    "image": "/public/assets/Project3.png",
    "description": "A responsive e-commerce website with cart functionality, implemented with clean HTML, CSS, and JavaScript.",
    "features": [
      "Responsive e-commerce design",
      "Shopping cart functionality",
      "Interactive UI with DOM manipulation",
      "Performance optimized for fast loading"
    ],
    "tech": ["HTML", "CSS", "JavaScript", "Bootstrap"],
    "githubLink": "https://github.com/Natarajan-Gothandaraman/Zindra-E-commerce",
    "liveLink": "https://zindra-e-commerce.vercel.app/"
  }
];

// Animation variants for the card fade-in effect
const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function Projects() {
  return (
    <section id="projects" className="md:pt-20 px-3 mt-20">
      <h1 className="text-4xl font-bold text-orange-500 text-center pt-2 pb-12">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group bg-white/10 rounded-lg shadow-lg border border-white/20 p-4 flex flex-col h-full
                       backdrop-blur-sm transition-all duration-300 hover:border-cyan-400"
          >
            {/* Image container */}
            <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* This is the new overlay that appears on hover */}
              <div
                className="absolute inset-0 bg-black/70 flex items-center justify-center p-4
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <ul className="list-disc list-inside text-left text-sm text-gray-200 space-y-2">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white pb-2">{project.name}</h3>
              <p className="text-gray-300 text-sm flex-grow">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 text-sm my-4">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="px-2 py-1 rounded-full bg-cyan-900/50 text-cyan-300 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 mt-auto">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link"
                 className="text-gray-300 hover:text-orange-500 transition-colors">
                <GitHubIcon style={{ fontSize: '1.8rem' }} />
              </a>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo Link"
                   className="text-gray-300 hover:text-orange-500 transition-colors">
                  <OpenInNewIcon style={{ fontSize: '1.8rem' }} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
