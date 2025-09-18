import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";

import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Experience from "./Components/Experience.jsx";
import Achievements from "./Components/Achievements.jsx";
import Contact from "./Components/Contact.jsx";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const scrollContainerRef = useRef(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // CHANGE 1: Create a single handler for link clicks
  const handleLinkClick = (href) => {
    setActiveLink(href); // Immediately set active state
    setOpen(false);      // Always close the drawer after a click
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      let currentSectionId = "";
      const containerRect = container.getBoundingClientRect();
      const offset = 150; // The "line" where we check for the active section

      navItems.forEach((item) => {
        const section = container.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section's top is above our offset line and its bottom is below it
          if (rect.top - containerRect.top < offset && rect.bottom - containerRect.top > offset) {
            currentSectionId = item.href;
          }
        }
      });
      
      // Also, handle the case where you scroll to the very top or bottom
      if (container.scrollTop === 0) {
        currentSectionId = "#home";
      }
      
      if (currentSectionId && currentSectionId !== activeLink) {
        setActiveLink(currentSectionId);
      }
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]); // Re-run if activeLink changes programmatically if needed, or keep empty `[]`

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List className="bg-[#161b1e] text-white h-screen overflow-auto">
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            {/* CHANGE 2: Add the onClick handler to the mobile link */}
            <a
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              className={`relative group p-2 mx-auto my-1 w-full text-center ${activeLink === item.href ? "text-orange-500 font-bold" : ""
                }`}
            >
              {item.label}
              <span className="absolute left-1/2 bottom-0 h-0.5 rounded w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <header
        className="fixed top-6 left-1/2 -translate-x-1/2 z-10 
                   bg-black/40 backdrop-blur-sm border border-white/20 
                   rounded-full shadow-lg"
      >
        <nav className="flex items-center px-6 py-2">
          <div className="flex items-center space-x-3 mr-20">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-500">
              <img
                src="https://res.cloudinary.com/dybicylgj/image/upload/v1757476632/userimage_ncyiht.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="hidden md:block text-2xl font-bold text-orange-500">Natarajan</h2>
          </div>

          <div className="space-x-6 hidden md:flex">
            {navItems.map((item) => (
              // CHANGE 3: Add the onClick handler to the desktop link
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`relative group p-1 text-gray-300 hover:text-white transition-colors
                           ${activeLink === item.href ? "text-orange-500 font-semibold" : ""}`}
              >
                {item.label}
                <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <Button onClick={toggleDrawer(true)} aria-label="Open menu">
              <MenuIcon className="text-white" />
            </Button>
            <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
        </nav>
      </header>
      
      <main>
        <div className="inner-layer" ref={scrollContainerRef}>
          <div className="space-y-28 md:space-y-36">
            <Home />
            <About />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
