import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Import Close icon as well
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll

const NavbarMenu = [
  { id: 1, title: "Home", path: "hero" },       // Link to Hero section
  { id: 2, title: "Our Services", path: "services" }, // Link to Services section
  { id: 4, title: "Features", path: "banner3" },       // Link to Banner3 section
  { id: 3, title: "About Us", path: "banner" },     // Link to Banner section
  { id: 5, title: "FAQs", path: "subscribe" }    // Link to FAQs section
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero"); // Track the active section
  const [clickedItem, setClickedItem] = useState(null); // Track the clicked item for animation
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle mobile menu

  const handleClick = (menu) => {
    setActiveSection(menu.path); // Set active section on click
    setClickedItem(menu.id); // Set clicked item for animation
    setTimeout(() => setClickedItem(null), 300); // Reset after animation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-20 shadow-md">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container max-w-6xl mx-auto py-4 px-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <motion.h1 className="font-bold text-3xl lg:text-4xl font-poppins transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-secondary">
            FixKar
          </motion.h1>
          <p className="text-sm font-semibold text-primary">
            Say It, Find It, Get It Done!
          </p>
        </div>

        {/* Desktop Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  smooth={true}
                  duration={300}
                  className="inline-block py-2 px-4 hover:text-secondary relative group text-base cursor-pointer transition duration-300 ease-in-out"
                  onClick={() => handleClick(menu)} // Handle click with animation
                  style={{
                    transform: clickedItem === menu.id ? "scale(0.95)" : "scale(1)", // Scale animation on click
                    transition: "transform 0.3s ease", // Smooth transition for scale
                  }}
                >
                  <span className="relative z-10">{menu.title}</span>
                </Link>
              </li>
            ))}
            {/* Removed Sign In button */}
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <IoMdClose className="text-4xl" /> : <IoMdMenu className="text-4xl" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white shadow-md"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  smooth={true}
                  duration={300}
                  className="inline-block py-2 px-4 hover:text-secondary relative group text-base cursor-pointer transition duration-300 ease-in-out"
                  onClick={() => {
                    handleClick(menu);
                    toggleMenu(); // Close the menu after selection
                  }}
                >
                  <span className="relative z-10">{menu.title}</span>
                </Link>
              </li>
            ))}
            {/* Removed Sign In button */}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
