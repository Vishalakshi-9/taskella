import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFE5EC] dark:bg-[#1a1a1a] text-[#B5838D] dark:text-[#FFE5EC] border-t border-[#FCD2D2] dark:border-[#333] px-4 py-6 font-poppins">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-center md:text-left">
          🌸 <span className="font-semibold">Taskella</span> — Blossom your productivity, gently.
        </div>
        <div className="flex gap-4 text-sm">
          {/* <a href="#features" className="hover:underline hover:text-plum transition-all">
            Features
          </a>
          <a href="#demo" className="hover:underline hover:text-plum transition-all">
            Demo
          </a> */}
          {/* <a
            href="https://github.com/yourusername/taskella"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-plum transition-all"
          >
            GitHub
          </a> */}
        </div>
      </div>
      <div className="mt-4 text-center text-xs opacity-60">
        Made with 🌸 by Vishalakshi · © {new Date().getFullYear()} Taskella
      </div>
    </footer>
  );
};

export default Footer;