import React from 'react';
import communityImage from '../Tokenpage/images/bae-token180.png'; // Replace with actual path

const ActiveServers = () => {
    return (
        <section className="bg-white dark:bg-gray-800 overflow-hidden relative py-16 px-4">
            <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 text-center lg:text-left">
                    <h2 className="text-4xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block">
                            Join Our Vibrant Community!
                        </span>
                        <span className="block text-indigo-500">
                            Enhance your experience today.
                        </span>
                    </h2>
                    <p className="text-lg mt-4 text-gray-500 dark:text-gray-300">
                        Be a part of something bigger! Connect with other users, share tips, and help shape the future of BAE BOT. Together, we can create a more engaging and interactive community.
                    </p>
                    <div className="mt-12">
                        <button type="button" className="py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform transform hover:scale-105">
                            Join the Community
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative">
                <img 
                    src={communityImage} 
                    alt="Community" 
                    className="object-cover w-full h-64 lg:h-96 rounded-lg shadow-lg" 
                    />
                </div>
            </div>
        </section>
    );
};

export default ActiveServers;
