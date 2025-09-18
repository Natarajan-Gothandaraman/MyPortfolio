import React, { useState, useEffect, useRef } from "react"; // Import useRef
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
  const scrollContainerRef = useRef(null); // Create a ref for the scrollable container

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const container = scrollContainerRef.current; // Get the container element

    const handleScroll = () => {
      let currentSectionId = "";
      navItems.forEach((item) => {
        // Find sections within the scrolling container
        const section = container.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          
          // Check if section is near the top of the container
          if (rect.top - containerRect.top < 150 && rect.bottom - containerRect.top > 150) {
            currentSectionId = item.href;
          }
        }
      });

      if (currentSectionId) {
        setActiveLink(currentSectionId);
      }
    };

    // Attach the event listener to the container, not the window
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    
    // Cleanup function
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  const DrawerList = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List className="bg-[#161b1e] text-white h-screen overflow-auto">
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <a
              href={item.href}
              className={`relative group p-2 mx-auto my-1 ${activeLink === item.href ? "text-orange-500 font-bold" : ""
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
              <a
                key={item.label}
                href={item.href}
                className={`relative group p-1 text-gray-300 hover:text-white transition-colors
                           ${activeLink === item.href ? "button-active" : ""}`}
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

      {/* The main tag helps structure the page */}
      <main>
        {/* Attach the ref to the inner-layer div */}
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
