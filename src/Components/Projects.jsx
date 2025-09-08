import React from 'react';
import MoreIcon from '@mui/icons-material/More';

export default function Projects() {
  return (
    <section id="projects" className="md:pt-14 px-3 mt-40">
      <h1 className="text-4xl font-bold text-[#00ffff] text-center lg:block pt-2 pb-5">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            "name": "Employee Management System – Full Stack Web App",
            "date": "June-2025",
            "features": [
             " Built a full-stack CRUD application with react frontend and spring boot backend",
            " Developed rest apis optimized for fast data retrieval.",
            "Integrated mysql with optimized queries for efficient data storage",
            " Wrote unit tests using junit and mockito."
            ],
            "tech": ["React","Node.js","Spring Boot", "MySQL","Vs Code","Eclipse"],
            "link": "https://github.com/Natarajan-Gothandaraman/Fullstack-webapp"
          },
          {
            "name": "Searchy",
            "date": "May 2025",
            "features": [
              "A modern, distraction-free YouTube Video Search Web App built with HTML, TailwindCSS, and JavaScript.",
              "This project allows you to search YouTube videos, view them in a draggable/resizable modal, and manage your search history with night-mode support",
              "Search YouTube Videos with multiple API keys for fallback and Responsive Layout for mobile, tablet, and desktop."
            ],
            "tech": ["YouTube Data API v3", "Html", "TailwindCSS", "JavaScript", "CSS","Vercel" ],
            "link": "https://searchy-pro.vercel.app/"
          },
          {
            "name": "E-Commerce Website (Zindra)",
            "date": "JAN -2025",
            "features": [
              "Designed and developed a responsive e-commerce website with cart features.",
              "Implemented dom manipulation and event handling for interactive ui..",
              "Optimized performance to reduce load times."
            ],
            "tech": ["Html", "CSS", "Java Script","vercel","Bootstrap"],
            "link": "https://zindra-e-commerce.vercel.app/"
          }
        ].map((data, idx) => (
          <div className="border border-gray-600 p-3 text-white rounded transform hover:scale-105 transition-transform duration-500 flex flex-col h-full hover:border-[#00ffff]" key={idx}>

            <div className='flex flex-col flex-grow'>
              <h3 className="text-xl font-bold pb-1">{data.name}</h3>
              <p className="text-orange-500 text-sm pb-2">{data.date}</p>

              <p className="text-[#00ffff] text-sm pb-1">Features</p>
              <ul className="list-disc list-inside text-gray-300 pb-3">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="pb-1">
                    <span className='text-gray-100'>{feature.split(":")[0]}:</span>
                    <span>{feature.split(":")[1]}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[#00ffff] text-sm py-2">Technology</p>
              <div className="flex flex-wrap  text-sm">
                {data.tech.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 rounded-full mb-2 me-1 border border-gray-700 h-fit">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* View Project Button */}
            <div className="text-center mt-auto pt-5">
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-orange-500 border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-white transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-end py-3">
        <a
          href="https://github.com/Natarajan-Gothandaraman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md text-[#00ffff] flex items-center pe-2 hover:text-orange-500"
          title="Explore more projects on GitHub"
        >
          View More Projects
          <MoreIcon className="ms-1 rotate-45 mb-1" style={{ fontSize: "1rem" }} />
        </a>
      </div>
    </section>
  );
}
