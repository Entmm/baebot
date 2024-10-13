import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logoImage from '../assets/phone2.png'; // Make sure to use the correct path to your logo image

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo with fixed size (32x32) */}
        <div className="flex items-center space-x-2">
          <img 
            src={logoImage} // Logo image imported above
            alt="BAE BOT Logo" 
            className="w-8 h-8" // Fixed width and height (32x32)
            style={{ width: '32px', height: '32px' }} // Ensures that the size is exactly 32x32
          />
          <span className="text-lg font-bold">BAE BOT</span>
        </div>

        {/* Center Section: Navigation Links */}
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/learn" className="hover:text-blue-400 transition">Learn</Link></li>
          <li><Link to="/token" className="hover:text-blue-400 transition">Token</Link></li>
        </ul>

        {/* Right Section: Social Media Icons and Buy Button */}
        <div className="flex items-center space-x-5">
          {/* Twitter Icon */}
          <a 
            href="https://twitter.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.956 9.956 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.7a9.864 9.864 0 0 1-3.127 1.195A4.917 4.917 0 0 0 11.872 8.1a13.959 13.959 0 0 1-10.141-5.138 4.822 4.822 0 0 0-.664 2.475c0 1.708.869 3.216 2.19 4.099a4.905 4.905 0 0 1-2.228-.616v.062a4.919 4.919 0 0 0 3.946 4.82 4.93 4.93 0 0 1-1.292.172c-.314 0-.618-.03-.916-.086a4.922 4.922 0 0 0 4.598 3.417A9.868 9.868 0 0 1 0 21.542a13.905 13.905 0 0 0 7.548 2.213c9.054 0 14.007-7.502 14.007-14.007 0-.214-.004-.426-.014-.637A9.993 9.993 0 0 0 24 4.557z" />
            </svg>
          </a>

          {/* Telegram Icon */}
          <a 
            href="https://t.me/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.75 3.508c-.26-.21-.63-.196-1.174.045L1.584 10.597c-.543.242-.817.53-.82.865-.003.334.267.612.81.826l5.86 2.14 2.255 6.93c.27.821.672 1.023 1.02 1.041.349.018.787-.192 1.255-.662l3.283-3.358 5.482 4.028c.496.368.89.555 1.19.556.302.002.707-.27 1.064-1.152 1.052-2.548 1.68-5.016 1.882-7.402.2-2.387-.052-4.007-.755-5.73-.36-.875-.99-1.57-1.67-1.995zm-2.49 5.065l-10.9 6.365-.688 5.196L14.6 13.65l5.66-5.077z" />
            </svg>
          </a>

          {/* Dexscreener Icon */}
          <a 
            href="https://dexscreener.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.59 5.924l-.902.858c-2.43-1.21-4.648-1.528-6.731-1.133-1.915.365-3.5 1.271-5.011 2.196l-.552.345-.182-.006c-2.948-.136-4.866-1.79-6.382-2.976-.532.637-1.006 1.389-1.44 2.264 2.388 1.79 4.618 3.82 7.553 4.004 2.208-.593 4.428-1.51 6.379-1.51 1.786 0 3.96.3 6.124 1.4l.875-.83.552.657c-2.276 1.396-5.185 1.246-7.762.56-.972-.28-1.895-.609-2.89-.94-2.155-.7-4.108-.49-6.187.214-.544.178-1.106.36-1.71.57l.017.02c2.316.992 4.08 1.64 5.847 2.528 1.51.73 3.057 1.39 4.828 1.74 1.18.228 2.417.26 3.678-.027 2.602-.589 4.638-2.136 6.476-4.258-.96-.806-1.97-1.49-3.15-2.09z" />
            </svg>
          </a>

          {/* Buy Button */}
          <a
            href="#buy"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition"
          >
            Buy
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
