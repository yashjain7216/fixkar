import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 bg-gray-800"> {/* Changed background color to dark gray */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-3xl font-bold text-white">Your Trusted Marketplace</h1> {/* Changed heading color to white */}
            <p className="text-gray-300 text-lg"> {/* Changed text color to light gray for better contrast */}
              Our platform connects you with reliable service providers across various fields. 
              Experience seamless service access, personalized recommendations, and multi-language support.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-white">Services</h1> {/* Changed heading color to white */}
              <div className="text-gray-300"> {/* Changed text color to light gray */}
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">Plumber</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Carpenter</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Electrician</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Cleaner</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Mechanic</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Gardener</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-white">Quick Links</h1> {/* Changed heading color to white */}
              <div className="text-gray-300"> {/* Changed text color to light gray */}
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">Home</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">About Us</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">FAQs</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-white">Stay Connected</h1> {/* Changed heading color to white */}
            <p className="text-gray-300">Email: info@example.com</p> {/* Hardcoded email */}
            <p className="text-gray-300">Phone: +123 456 7890</p> {/* Hardcoded phone number */}
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-white text-3xl" /> {/* Increased size */}
              </a>
              <a href="https://www.instagram.com/the.coding.journey/">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-white text-3xl" /> {/* Increased size */}
              </a>
              <a href="https://thecodingjourney.com/">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-white text-3xl" /> {/* Increased size */}
              </a>
              <a href="https://www.youtube.com/@TheCodingJourney">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-white text-3xl" /> {/* Increased size */}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
