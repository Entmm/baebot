import React from 'react';

const BaeBotGuide = () => {
    return (
        <section className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Section Title */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-600">
                        BAE BOT Guide: How to Get Started
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Follow these steps to integrate BAE BOT into your Telegram group and manage your community effectively.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Step 1 */}
                    <div className="relative bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-indigo-800 transition ease-in-out duration-300">
                        <span className="absolute top-4 right-4 bg-indigo-500 text-sm px-3 py-1 rounded-full">Step 1</span>
                        <h3 className="text-xl font-semibold mb-3">Find BAE BOT</h3>
                        <p className="text-gray-300">
                            Open Telegram and search for “BAEBOT_TechBot.” Select the bot to start integrating.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-purple-800 transition ease-in-out duration-300">
                        <span className="absolute top-4 right-4 bg-purple-500 text-sm px-3 py-1 rounded-full">Step 2</span>
                        <h3 className="text-xl font-semibold mb-3">Add to Group/Channel</h3>
                        <p className="text-gray-300">
                            Add BAE BOT to your Telegram group or channel. It’s the first step towards automating your community.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-pink-800 transition ease-in-out duration-300">
                        <span className="absolute top-4 right-4 bg-pink-500 text-sm px-3 py-1 rounded-full">Step 3</span>
                        <h3 className="text-xl font-semibold mb-3">Promote to Admin</h3>
                        <p className="text-gray-300">
                            In your group’s member list, promote BAE BOT to Admin and give it full permissions.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="relative bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-blue-800 transition ease-in-out duration-300">
                        <span className="absolute top-4 right-4 bg-blue-500 text-sm px-3 py-1 rounded-full">Step 4</span>
                        <h3 className="text-xl font-semibold mb-3">Start the Bot</h3>
                        <p className="text-gray-300">
                            Type <code>/start</code> in the group chat, then follow the prompts to connect BAE BOT to your server.
                        </p>
                    </div>

                    {/* Step 5 */}
                    <div className="relative bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-teal-800 transition ease-in-out duration-300">
                        <span className="absolute top-4 right-4 bg-teal-500 text-sm px-3 py-1 rounded-full">Step 5</span>
                        <h3 className="text-xl font-semibold mb-3">Invoice & Payment</h3>
                        <p className="text-gray-300">
                            Follow prompts to the invoice page, select your currency, and send payment. Await confirmation and you're set!
                        </p>
                    </div>

                    {/* Step 6 */}
                    <div className="relative bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-green-800 transition ease-in-out duration-300">
                        <span className="absolute top-4 right-4 bg-green-500 text-sm px-3 py-1 rounded-full">Step 6</span>
                        <h3 className="text-xl font-semibold mb-3">Server List & Commands</h3>
                        <p className="text-gray-300">
                            View your servers and access commands to manage your bots across platforms.
                        </p>
                    </div>

                    {/* Step 7 */}
                    <div className="relative bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-yellow-800 transition ease-in-out duration-300">
                        <span className="absolute top-4 right-4 bg-yellow-500 text-sm px-3 py-1 rounded-full">Step 7</span>
                        <h3 className="text-xl font-semibold mb-3">Inactive User Removal</h3>
                        <p className="text-gray-300">
                            Select a timeframe for inactive user sweeps. BAE BOT scans your chat and removes inactive users.
                        </p>
                    </div>

                    {/* Step 8 */}
                    <div className="relative bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-red-800 transition ease-in-out duration-300">
                        <span className="absolute top-4 right-4 bg-red-500 text-sm px-3 py-1 rounded-full">Step 8</span>
                        <h3 className="text-xl font-semibold mb-3">Notification Interval & Custom Message</h3>
                        <p className="text-gray-300">
                            Set notification intervals and create custom messages, including images, GIFs, and links.
                        </p>
                    </div>

                    {/* Step 9 */}
                    <div className="relative bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-orange-800 transition ease-in-out duration-300">
                        <span className="absolute top-4 right-4 bg-orange-500 text-sm px-3 py-1 rounded-full">Step 9</span>
                        <h3 className="text-xl font-semibold mb-3">Remove Deleted Accounts</h3>
                        <p className="text-gray-300">
                            BAE BOT scans for deleted accounts and provides a “Remove Now” option to clean up your group.
                        </p>
                    </div>

                    {/* Step 10 */}
                    <div className="relative bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-cyan-800 transition ease-in-out duration-300">
                        <span className="absolute top-4 right-4 bg-cyan-500 text-sm px-3 py-1 rounded-full">Step 10</span>
                        <h3 className="text-xl font-semibold mb-3">Customize Ad-Space</h3>
                        <p className="text-gray-300">
                            Add custom text and links to the bot’s posts. This can generate revenue or promote referrals.
                        </p>
                    </div>
                </div>
            </div>

           
        </section>
    );
};

export default BaeBotGuide;
