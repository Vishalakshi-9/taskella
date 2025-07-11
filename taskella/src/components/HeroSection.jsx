import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='w-full'>
    <section className="min-h-screen flex flex-col items-center justify-center ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-comfortaa font-bold text-plum drop-shadow-md text-center"
      >
        🌸 Taskella
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl max-w-xl font-poppins text-[#B5838D] text-center"
      >
        Your gentle garden of productivity – where tasks bloom beautifully.
      </motion.p>
      <motion.a
        href="#features"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 bg-petal hover:bg-rose-300 text-plum hover:text-amber-800 px-6 py-3 rounded-full shadow font-poppins transition"
      >
        🌷 Explore Features
      </motion.a>
      <Link to="/board">
      <motion.a
      initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}>
      <button className="mt-4 bg-petal hover:bg-rose-300 text-plum hover:text-amber-800 px-6 py-3 rounded-full shadow font-poppins transition">
        🌸 Start Organizing
      </button>
      </motion.a>
      </Link>
    </section> 
    </div>
  );
}

export default HeroSection;