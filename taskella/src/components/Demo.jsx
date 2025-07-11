import React from 'react';
import { motion } from 'framer-motion';
import ss from '../assets/demo.png';

const DemoPreview = () => {
  return (
    <section id="demo" className="relative w-full py-20 bg-petal dark:bg-[#2a2a2a] overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-comfortaa text-plum mb-4">🌷 Kanban in Bloom</h2>
        <p className="text-[#B5838D] mb-10 font-poppins">
          Watch your tasks bloom from Seeds to Sprouts to Blossoms.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl border-4 border-[#EAC7C7] shadow-lg overflow-hidden max-w-4xl mx-auto"
        >
          <img
            src={ss}
            alt="Taskella Kanban Preview"
            className="w-full h-auto rounded-xl"
          />
          <div className="absolute inset-0 pointer-events-none animate-petal-float z-10" />
        </motion.div>

        <div className="absolute top-10 left-4 animate-slow-spin text-pink-200">🌸</div>
        <div className="absolute bottom-10 right-4 animate-slow-bounce text-pink-200">🌸</div>
      </div>
    </section>
  );
};

export default DemoPreview;