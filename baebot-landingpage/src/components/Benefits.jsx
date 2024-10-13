import React from 'react';
import { FaUsers, FaCog, FaStar, FaHandHoldingHeart } from 'react-icons/fa'; // Importing icons
import benefitImage from '../assets/phone2.png'; // Replace with your desired image

const Benefits = () => {
  return (
    <section className="bg-gray-900 py-12 relative overflow-hidden">
      {/* Adding a similar black background and grain effect like Key Features */}
      <div className="absolute inset-0 bg-black opacity-90"></div> 
      <div className="absolute inset-0 grain-effect"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        
        {/* Right Side: Benefit Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src={benefitImage}
            alt="Benefits Illustration"
            className="w-[300px] h-auto rounded-lg shadow-lg" // Adjust size as needed
          />
        </div>

        {/* Left Side: Benefit Details */}
        <div className="md:w-1/2 text-left px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-white">Benefits</h2>
          <p className="text-gray-300 px-10 mb-8">
            BAE BOT helps maintain an engaged and high-quality community by ensuring active participation and simplifying management tasks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit Box 1 */}
            <div className="bg-black-800 border border-gray-700 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <div className="flex items-center mb-4">
                <FaUsers className="text-blue-400 text-2xl mr-3" /> {/* Custom bullet-like icon */}
                <h3 className="text-lg font-semibold text-white">Enhanced Group Engagement</h3>
              </div>
              <p className="text-gray-300 text-sm font-light">
                Keep your group active and vibrant by removing inactive members. BAE BOT fosters more meaningful interactions among engaged members.
              </p>
            </div>

            {/* Benefit Box 2 */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <div className="flex items-center mb-4">
                <FaCog className="text-green-400 text-2xl mr-3" /> {/* Custom bullet-like icon */}
                <h3 className="text-lg font-semibold text-white">Efficient Management</h3>
              </div>
              <p className="text-gray-300 text-sm font-light">
                Automate the process of tracking and managing user activity, reducing your administrative workload and saving valuable time.
              </p>
            </div>

            {/* Benefit Box 3 */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-400 text-2xl mr-3" /> {/* Custom bullet-like icon */}
                <h3 className="text-lg font-semibold text-white">Improved Member Quality</h3>
              </div>
              <p className="text-gray-300 text-sm font-light">
                Focus on active participants to enhance the overall experience and value of your group by maintaining a high-quality member base.
              </p>
            </div>

            {/* Benefit Box 4 */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <div className="flex items-center mb-4">
                <FaHandHoldingHeart className="text-red-400 text-2xl mr-3" /> {/* Custom bullet-like icon */}
                <h3 className="text-lg font-semibold text-white">Proactive Member Retention</h3>
              </div>
              <p className="text-gray-300 text-sm font-light">
                Encourage users to stay engaged with timely reminders, helping to retain valuable members and promote long-term participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
