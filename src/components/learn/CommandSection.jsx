const CommandSection = () => {
    return (
        <section className="bg-gray-950 py-12 px-4 relative w-full">
        {/* Title Section */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
            Customize Your BAE BOT Experience
          </h2>
          <p className="mt-2 text-base text-gray-300">
            Personalize and optimize BAE BOT for your group. Choose from various management tools to improve group functionality.
          </p>
        </div>
  
        {/* Compressed Grid Layout */}
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full mx-auto max-w-screen-xl">
          {/* Card: Inactive User Removal */}
          <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold text-teal-500">Set Inactive User Removal</h3>
            <p className="text-gray-400 mt-2">Automatically remove inactive users based on your chosen intervals:</p>
            <p className="text-gray-100 font-semibold mt-1">12h, 24h, 36h, 48h, 7d, 14d, 30d</p>
          </div>
  
          {/* Card: Notification Interval */}
          <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold text-purple-500">Notification Interval Selection</h3>
            <p className="text-gray-400 mt-2">Send custom notifications to your group. Select intervals:</p>
            <p className="text-gray-100 font-semibold mt-1">15min, 30min, 1h, 2h, 4h, 12h, 24h, 7d, 14d, 30d</p>
          </div>
  
          {/* Card: Custom Notify Message */}
          <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold text-blue-500">Set Custom Notify Message</h3>
            <p className="text-gray-400 mt-2">Create custom messages with text, images, gifs, or videos. Perfect for updates or announcements.</p>
          </div>
  
          {/* Card: Current Inactive Users */}
          <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold text-teal-500">Current Inactive Users</h3>
            <p className="text-gray-400 mt-2">View users inactive for 24 hours. Remove them instantly using the ‘Remove Now’ feature.</p>
          </div>
  
          {/* Card: Remove Deleted Accounts */}
          <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold text-purple-500">Remove Deleted Accounts</h3>
            <p className="text-gray-400 mt-2">Remove all deleted accounts from your group in one click.</p>
          </div>
  
          {/* Card: Deactivate Channel */}
          <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold text-blue-500">Deactivate Channel</h3>
            <p className="text-gray-400 mt-2">Remove BAE BOT from a channel. You can re-add the bot anytime without extra cost.</p>
          </div>
  
          {/* Card: Customize Ad-Space */}
          <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold text-teal-500">Customize Ad-Space</h3>
            <p className="text-gray-400 mt-2">Add custom text and links below BAE BOT’s posts. Use for promotions, referrals, or revenue generation.</p>
          </div>
        </div>
  
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-teal-500 to-purple-500 opacity-50 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-blue-500 to-purple-600 opacity-40 rounded-full blur-2xl"></div>
      </section>
    );
  };
  
  export default CommandSection;
  