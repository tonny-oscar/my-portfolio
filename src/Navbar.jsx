import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="bg-black fixed top-0 w-full z-10 shadow-md">
      <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <motion.h1
          className="text-gold-500 text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        </motion.h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="about"
              smooth={true}
              className="text-white hover:text-gold-500 transition-all duration-300 ease-in-out"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              className="text-white hover:text-gold-500 transition-all duration-300 ease-in-out"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              className="text-white hover:text-gold-500 transition-all duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
