import React from 'react';
import footerBg from '../assets/bg-roadmap-04.svg'; // Replace with your actual footer background image path

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent opacity-70"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>

      {/* Footer Content */}
      <div className="container mx-auto relative text-center z-10">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center justify-center md:justify-start">
              <img src={footerBg} className="h-8 me-3" alt="Logo" />
              <span className="text-2xl font-semibold whitespace-nowrap">BAE BOT</span>
            </a>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-left">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Docs</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">API</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Social Media Icons */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} BAE BOT. All rights reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 space-x-5">
            {/* Social Icons */}
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook Icon */}
                <path d="M22.676 0H1.325C.593 0 0 .593 0 1.325v21.352C0 23.407.593 24 1.325 24h11.499v-9.293H9.724v-3.62h3.1V8.413c0-3.066 1.873-4.738 4.61-4.738 1.311 0 2.437.097 2.765.141v3.207h-1.9c-1.489 0-1.777.707-1.777 1.744v2.285h3.554l-.464 3.62h-3.09V24h6.053c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.676 0z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                {/* Twitter Icon */}
                <path d="M24 4.557a9.956 9.956 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.7a9.864 9.864 0 0 1-3.127 1.195A4.917 4.917 0 0 0 11.872 8.1a13.959 13.959 0 0 1-10.141-5.138 4.822 4.822 0 0 0-.664 2.475c0 1.708.869 3.216 2.19 4.099a4.905 4.905 0 0 1-2.228-.616v.062a4.919 4.919 0 0 0 3.946 4.82 4.93 4.93 0 0 1-1.292.172c-.314 0-.618-.03-.916-.086a4.922 4.922 0 0 0 4.598 3.417A9.868 9.868 0 0 1 0 21.542a13.905 13.905 0 0 0 7.548 2.213c9.054 0 14.007-7.502 14.007-14.007 0-.214-.004-.426-.014-.637A9.993 9.993 0 0 0 24 4.557z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                {/* GitHub Icon */}
                <path d="M12 .296C5.373.296 0 5.668 0 12.297c0 5.292 3.437 9.781 8.207 11.387.6.11.793-.262.793-.582 0-.288-.01-1.05-.016-2.061-3.338.726-4.042-1.608-4.042-1.608-.546-1.389-1.333-1.76-1.333-1.76-1.09-.744.083-.729.083-.729 1.204.084 1.838 1.237 1.838 1.237 1.07 1.835 2.808 1.305 3.492.997.108-.775.418-1.305.762-1.606-2.664-.302-5.466-1.332-5.466-5.93 0-1.31.468-2.384 1.236-3.224-.124-.303-.536-1.524.118-3.176 0 0 1.01-.322 3.31 1.226a11.526 11.526 0 0 1 3.014-.405c1.022.004 2.051.138 3.014.405 2.297-1.548 3.305-1.226 3.305-1.226.655 1.652.244 2.873.12 3.176.77.84 1.235 1.913 1.235 3.224 0 4.607-2.807 5.625-5.479 5.922.43.372.81 1.107.81 2.23 0 1.613-.014 2.916-.014 3.315 0 .323.19.698.8.58C20.565 22.077 24 17.587 24 12.296 24 5.668 18.627.296 12 .296z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
