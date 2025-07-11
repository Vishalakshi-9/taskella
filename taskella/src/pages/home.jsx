import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import DemoPreview from '../components/Demo';
import Footer from '../components/Footer';
import FloralBackground from '../components/Floral';
import ThemeToggle from '../context/ThemeToggle';
import Header from '../components/Header';


const Home = () => {
  return (
    //  <main className="w-full flex flex-col items-center justify-center min-h-screen">
    <div className="min-h-screen w-full bg-gradient-to-br from-petal to-lavender dark:from-[#1f1f1f] dark:to-[#2c2c2c] text-[#B5838D] dark:text-[#FFE5EC] transition-all">
    <div className='flex justify-end py-3 mx-8'>
      <ThemeToggle/>
      </div>
      <Header/>
      <FloralBackground />
      <HeroSection />
      <Features />
      <DemoPreview/>
      <Footer />
      
      </div>
      
  );
};

export default Home;