import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { FaLeaf, FaTasks, FaRegHeart, FaCalendarCheck } from 'react-icons/fa';


const FloralBackground = () => {
  const containerRef = useRef(null);
  const petals = Array.from({ length: 12 });

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      petals.forEach((_, i) => {
        const petal = document.querySelector(`[data-petal-index="${i}"]`);
        if (petal) {
          petal.style.left = `${Math.random() * containerWidth}px`;
        }
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          data-petal-index={i}
          className="absolute w-6 h-6"
          initial={{
            x: Math.random() * 100,
            y: -50,
            opacity: 0.6,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: '110vh',
            opacity: [0.6, 0.3, 0],
            rotate: Math.random() * 360 + 360,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <div className="w-6 h-6 bg-pink-200 rounded-full opacity-70" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloralBackground;