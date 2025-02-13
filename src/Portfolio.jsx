import React from "react";
import { motion } from "framer-motion";
import afriTrimImage from './assets/images/AfriTrimlogo.png'; 
import petPalImage from './assets/images/landing.jpg';
import inventaImage from './assets/images/apple-touch-icon.png';
import memoryAppImage from './assets/images/parrotlan.jpg';
import Navbar from "./Navbar";

const Portfolio = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" }},
  };

  const staggerVariants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.3 
      }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <Navbar />
      
      {/* Hero Section */}
      <header className="text-center py-10" id="about">
        <motion.h1 
          className="text-5xl font-bold text-gold-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Tonny Kipkemoi Bett
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Software Developer
        </motion.p>
      </header>

      {/* About Section */}
      <section className="max-w-3xl mx-auto text-center mb-12" id="about">
        <motion.h2
          className="text-3xl font-semibold text-gold-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I am a passionate Software Developer with experience in building
          dynamic and scalable applications. With a strong foundation in
          JavaScript, React, Tailwind CSS, Firebase, Python, and Flask, I
          specialize in developing web applications that enhance user experience
          and drive efficiency.
        </motion.p>
        <motion.p
          className="text-gray-300 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          My journey in software development has been shaped by working on
          impactful projects such as AfriTrim, PetPal, Inventa, and a Budget
          Tracker, along with hands-on experience at NCPB, where I honed my
          problem-solving and analytical skills. I thrive on tackling
          challenges, learning new technologies, and turning ideas into
          reality.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto text-center mb-12" id="projects">
        <motion.h2
          className="text-3xl font-semibold text-gold-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Projects
        </motion.h2>
        <motion.ul
          className="space-y-4"
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              name: "AfriTrim",
              github: "https://github.com/tonny-oscar/AfriTrim",
              live: "https://afri-trim.vercel.app",
              image: afriTrimImage
            },
            {
              name: "PetPal",
              github: "https://github.com/tonny-oscar/pet-pal",
              live: "https://project-petpal.vercel.app",
              image: petPalImage
            },
            {
              name: "Inventa",
              github: "https://github.com/tonny-oscar/inventa-Project-",
              live: "https://inventa-project.vercel.app",
              image: inventaImage
            },
            {
              name: "Memory App",
              github: "https://github.com/tonny-oscar/memory",
              live: "",
              image: memoryAppImage
            }
          ].map((project, index) => (
            <motion.li
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
              variants={projectVariants}
            >
              <motion.h3 className="text-xl font-semibold text-gold-500">{project.name}</motion.h3>
              <motion.div className="flex justify-center mt-4">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-gold-500 shadow-xl transform transition-transform duration-300 hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
              <div className="mt-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400">GitHub</a>
                {project.live && (
                  <>
                    {" | "}
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-400">Live Demo</a>
                  </>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto text-center mb-12" id="contact">
        <motion.h2
          className="text-3xl font-semibold text-gold-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Contact
        </motion.h2>
        <motion.p 
          className="text-gray-300"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Email: <a href="mailto:betttonny26@gmail.com" className="text-blue-400">betttonny26@gmail.com</a>
        </motion.p>
        <motion.p 
          className="text-gray-300"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          GitHub: <a href="https://github.com/tonny-oscar" target="_blank" rel="noopener noreferrer" className="text-blue-400">tonny-oscar</a>
        </motion.p>
        <motion.p 
          className="text-gray-300"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          LinkedIn: <a href="https://www.linkedin.com/in/Tonny-Bett" target="_blank" rel="noopener noreferrer" className="text-blue-400">Tonny Bett</a>
        </motion.p>
      </section>

      {/* Footer */}
      <motion.footer
        className="text-center py-6 mt-12 border-t border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-gray-400">&copy; 2025 Tonny Kipkemoi Bett. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Portfolio;
