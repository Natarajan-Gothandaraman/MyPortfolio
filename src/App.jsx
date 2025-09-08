import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Achivements from "./Components/Achivements";
import Contact from "./Components/Contact";

function App() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      let currentSectionId = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          currentSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        if (link.getAttribute("href").substring(1) === currentSectionId) {
          link.classList.add("button-active");
        } else {
          link.classList.remove("button-active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const DrawerList = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List className="bg-[#161b1e] text-white h-screen overflow-auto">
        {["Home", "About", "Projects", "Achivements", "Contact"].map(
          (text, index) => (
            <ListItem key={index} disablePadding>
              <a
                href={`#${text.toLowerCase()}`}
                className="relative group p-1 mx-auto my-1"
              >
                {text}
                <span className="absolute left-1/2 bottom-0 h-0.5 rounded w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </a>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      {/* Header/Navbar */}
      <header
        className={`fixed top-0 left-0 text-white p-6 lg:px-0 z-10 w-full transition-colors duration-100 ${
          isScrolled ? "bg-[#4949495c]" : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center lg:w-3/4 mx-auto">
          
          {/* Left Side - Profile Image + Name */}
          {/* Navbar Left Side - Profile Image + Name */}
<div className="flex items-center space-x-3">
  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-black-500">
    <img
      src="Public/assets/userimage.jpg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
  <h2 className="text-2xl font-bold text-orange-500">Natarajan</h2>
</div>


          {/* Desktop Menu */}
          <div className="space-x-6 hidden md:flex">
            <a href="#home" className="relative group p-1">
              Home
              <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded"></span>
            </a>
            <a href="#about" className="relative group p-1">
              About
              <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded"></span>
            </a>
            <a href="#projects" className="relative group p-1">
              Projects
              <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-600 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded"></span>
            </a>
            <a href="#achivements" className="relative group p-1">
              Achievements
              <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded"></span>
            </a>
            <a href="#contact" className="relative group p-1">
              Contact
              <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded"></span>
            </a>
          </div>

          {/* Mobile Drawer Menu */}
          <div className="md:hidden">
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon className="text-white" />
            </Button>
            <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
        </nav>
      </header>

      {/* Outer + Inner Layer */}
      <div className="relative bg-horizontal min-h-screen text-slate-100 antialiased">
        <div className="inner-layer">
          <Home />
          <About />
          <Projects />
          <Achivements />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
