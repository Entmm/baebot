import React from 'react';
import backgroundImage from '../learn/images/bg-roadmap-04.svg'; // Replace with your custom background image
import logo from '../learn/images/Baebotlogo.png'; // Ensure the correct path for your logo

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="BAE Bot Logo" className="h-24 w-auto" /> {/* Adjust size as needed */}
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600">
            Getting Started with <span className="text-white">BAE BOT</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-6 max-w-3xl text-center mx-auto text-lg md:text-xl text-gray-300">
          <p>
            Adding BAE BOT to your group is simple! Configure inactivity settings through an intuitive dashboard, 
            and let BAE BOT handle the rest. It’s the perfect tool for group admins aiming to optimize and energize their community.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            className="inline-flex items-center gap-x-3 bg-gradient-to-tr from-teal-400 to-purple-600 hover:from-purple-600 hover:to-teal-400 text-white text-lg font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"
            href="#"
          >
            Set Up Now
          </a>
          <a
            className="inline-flex items-center gap-x-3 border border-white text-white text-lg font-medium py-3 px-8 rounded-full transition-all hover:bg-white hover:text-black transform hover:scale-105"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-gradient-to-r from-purple-600 to-pink-500 opacity-60 rounded-full blur-xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-blue-500 to-teal-400 opacity-50 rounded-full blur-3xl z-0"></div>
    </section>
  );
};

export default HeroSection;
