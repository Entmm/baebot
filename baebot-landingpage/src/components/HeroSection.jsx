import React from 'react';
import bgHero from '../assets/bg-roadmap-04.svg'; // Example background image
import logo from '../assets/Baebotlogo.png'; // Your logo image


const HeroSection = () => {
  return (
    <section 
      className="h-screen bg-gray-900 flex items-center justify-between relative px-[9rem]" 
      style={{ backgroundImage: `url(${bgHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content on the left */}
      <div className="w-1/2 text-white z-10 pr-12">
        <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl mb-4 drop-shadow-lg">
          BAE BOT
        </h1>
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl mb-4 drop-shadow-lg">
          Basic Attention Economy Bot
        </h2>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
          Community is Power, Keep Yours Engaged.
        </p>
        <a 
          href="#learn" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105"
        >
          Get Started
        </a>
      </div>

         {/* Image on the right */}
         <div className="w-1/2 flex justify-end items-center z-10">
        <img 
          src={logo} 
          alt="BAE BOT Logo" 
          style={{ height: '500px', width: 'auto' }} // Adjusted size in pixels
          className="animate-pulse" // Keeping the pulse animation
        />
      </div>

    </section>
  );
};

export default HeroSection;
