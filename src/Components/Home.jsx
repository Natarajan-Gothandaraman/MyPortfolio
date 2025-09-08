import React from "react";
import { ReactTyped } from "react-typed";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Tooltip from "@mui/material/Tooltip";

export default function Home() {
  const items = [
    "Full-Stack Developer",
    "Java Developer",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Tailwind CSS",
    "JAVA",
    "MySQL",
    "Node.js",
    "Data Structure And Algorithm",
  ];

  return (
    <section
      id="home"
      className="md:h-screen flex flex-wrap items-center justify-evenly pt-10 md:pt-0"
    >
      {/* Left Side */}
      <div className="w-full md:w-3/5 text-white px-5 py-20 lg:p-0">
        <h2 className="text-2xl lg:text-4xl">Hi, This is</h2>
        <h1 className="text-4xl lg:text-6xl mb-3 font-bold text-white">
  Natarajan Gothandaraman
</h1>


        {/* Typing animation */}
        <ReactTyped
          strings={items}
          typeSpeed={150}
          backSpeed={150}
          loop
          className="text-orange-500 font-medium text-2xl lg:text-4xl"
        />

        <p className="py-3 lg:text-lg text-sm text-slate-200">
          Full-Stack developer with 10 months experience building responsive web
          applications using Frontend, Backend and Database.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1znYBw9UVOh447zGIa_i-XmDw6e-G57il/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          <button className="mt-4 lg:mt-8 text-lg px-5 py-2 rounded bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition">
            Resume
          </button>
        </a>

        {/* Social Links */}
        <ul className="flex pt-8 space-x-10 hidden lg:flex">
          <li>
            <a
              href="https://github.com/Natarajan-Gothandaraman"
              target="_blank"
              rel="noreferrer"
              className="icon-animated icon-github"
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
              rel="noreferrer"
              className="icon-animated icon-linkedin"
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
              rel="noreferrer"
              className="icon-animated icon-instagram"
            >
              <Tooltip title="Instagram">
                <InstagramIcon style={{ fontSize: "2.5rem" }} />
              </Tooltip>
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side - Profile with Wave Animation */}
      <div className="w-full md:w-2/5 px-5 md:pb-20 md:p-12 md:mt-10 lg:p-10">
        <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
          {/* Expanding Ripple Rings */}
          <span className="absolute w-full h-full rounded-full border-4 border-cyan-400 animate-ping"></span>
          <span className="absolute w-full h-full rounded-full border-4 border-cyan-600 animate-ping delay-200"></span>
          <span className="absolute w-full h-full rounded-full border-4 border-cyan-800 animate-ping delay-500"></span>

          {/* Profile Image */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-500 bg-yellow-400">
            <img
              src="Public/assets/userimage.jpg"
              alt="User"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
