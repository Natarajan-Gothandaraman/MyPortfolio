import React from "react";
import { ReactTyped } from "react-typed";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Tooltip from "@mui/material/Tooltip";
import userimage from "../assets/userimage.jpg";

export default function Home() {
  const typedStrings = [
    "Full-Stack Developer",
    "Java Developer",
    "React Developer",
    "Node.js",
    "Spring Boot",
    "MySQL",
    "Data Structures & Algorithms",
  ];

  return (
    <section
      id="home"
      className="md:h-screen flex flex-wrap items-center justify-evenly pt-24 md:pt-0"
    >
      <div className="w-full md:w-3/5 text-white px-5 py-10 lg:p-0">
        <h2 className="text-2xl lg:text-4xl">Hi, I'm</h2>
        <h1 className="text-4xl lg:text-6xl mb-3 font-bold text-white">
          Natarajan Gothandaraman
        </h1>

        <ReactTyped
          strings={typedStrings}
          typeSpeed={100}
          backSpeed={80}
          loop
          className="text-orange-500 font-medium text-2xl lg:text-4xl"
        />

        <p className="py-4 lg:text-lg text-slate-200 max-w-xl">
          A detail-oriented Full-Stack Developer with experience building responsive and user-friendly web applications from front to back.
        </p>

        <a
          href="https://drive.google.com/file/d/1znYBw9UVOh447zGIa_i-XmDw6e-G57il/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 lg:mt-6 text-lg px-6 py-2.5 rounded bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition-colors duration-300">
            View Resume
          </button>
        </a>

        <ul className="flex pt-8 space-x-10">
          <li>
            <a
              href="https://github.com/Natarajan-Gothandaraman"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-animated icon-github"
              aria-label="GitHub Profile"
            >
              <Tooltip title="GitHub">
                <GitHubIcon style={{ fontSize: "2.5rem" }} />
              </Tooltip>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/natarajangothandaraman/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-animated icon-linkedin"
              aria-label="LinkedIn Profile"
            >
              <Tooltip title="LinkedIn">
                <LinkedInIcon style={{ fontSize: "2.5rem" }} />
              </Tooltip>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/itz_mee_natraj/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-animated icon-instagram"
              aria-label="Instagram Profile"
            >
              <Tooltip title="Instagram">
                <InstagramIcon style={{ fontSize: "2.5rem" }} />
              </Tooltip>
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-2/5 flex items-center justify-center p-5 md:p-12">
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
          {/* Single Ring */}
          <div className="absolute inset-[-16px] rounded-full border-2 border-cyan-400 animate-breathe"></div>
          
          {/* New div for image and overlay */}
          <div className="relative w-full h-full rounded-full overflow-hidden z-10">
            <img
              src={userimage}
              alt="Natarajan Gothandaraman"
              className="w-full h-full object-cover"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
