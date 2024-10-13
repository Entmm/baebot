import React from 'react';
import featureImage from '../assets/phone2.png'; // Import your desired feature image

const KeyFeatures = () => {
  return (
    <section id="features" className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-90"></div> {/* Black background */}
      <div className="absolute inset-0 grain-effect"></div> {/* Grain effect */}
      <div className="container mx-auto max-w-1xl flex flex-col md:flex-row items-center relative z-10"> {/* Adjusted max-width */}
        {/* Left Side: Feature Details */}
        <div className="md:w-1/2 flex flex-col items-center text-left px-2">
          <h2 className="text-4xl font-bold text-center mb-6 text-white">Key Features</h2> {/* Made heading text smaller */}
          <ul className="list-none space-y-3 text-sm text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"> {/* Smaller text */}
            <li className="flex items-start">
              <span className="mr-2 text-blue-400 text-lg">•</span>
              <div>
                <h3 className="font-semibold text-base text-white">Real-Time Activity Monitoring</h3> {/* Slightly smaller heading */}
                <p className="text-gray-300 font-light">BAE BOT continuously tracks user interactions, message frequency, and overall participation. It provides real-time insights into who’s active and who’s not.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-400 text-lg">•</span>
              <div>
                <h3 className="font-semibold text-base text-white">Customizable Inactivity Rules</h3>
                <p className="text-gray-300 font-light">Tailor the bot’s settings to your group’s needs by defining specific inactivity criteria. Whether it’s days of silence or minimal engagement, BAE BOT adjusts to your parameters.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-400 text-lg">•</span>
              <div>
                <h3 className="font-semibold text-base text-white">Automatic Removal of Inactive Users</h3>
                <p className="text-gray-300 font-light">BAE BOT takes the hassle out of group management by automatically removing users who fall below the activity threshold, keeping your group’s roster up-to-date and relevant.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-400 text-lg">•</span>
              <div>
                <h3 className="font-semibold text-base text-white">Engagement Reminders</h3>
                <p className="text-gray-300 font-light">The bot sends friendly reminders to users approaching the inactivity threshold, giving them a chance to stay engaged and avoid removal.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-400 text-lg">•</span>
              <div>
                <h3 className="font-semibold text-base text-white">Admin Controls</h3>
                <p className="text-gray-300 font-light">Enjoy full administrative control with a user-friendly interface. Adjust settings, review activity logs, and oversee the bot’s operations with ease.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-400 text-lg">•</span>
              <div>
                <h3 className="font-semibold text-base text-white">Auto Pilot</h3>
                <p className="text-gray-300 font-light">When you need a break – The Custom reminders will keep the important information pinned at all times with the latest updates of the project.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-400 text-lg">•</span>
              <div>
                <h3 className="font-semibold text-base text-white">Clean up</h3>
                <p className="text-gray-300 font-light">Custom commands allow admins to clean up the server by removing inactive users and deleted accounts in just a few clicks.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-400 text-lg">•</span>
              <div>
                <h3 className="font-semibold text-base text-white">Customizable Ad Space</h3>
                <p className="text-gray-300 font-light">Use this ad space to redirect members to a custom link – Admins can use this placeholder to generate revenue with referral links, cross-promote other projects, or sell the ad space!</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Right Side: Feature Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img 
            src={featureImage} 
            alt="Key Features" 
            className="w-[250px] h-auto rounded-lg shadow-lg" // Custom size applied here
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
