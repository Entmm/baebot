import React, { useState } from 'react';
import { FaRocket, FaUsers, FaLink, FaDollarSign, FaGlobe } from 'react-icons/fa';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { useSwipeable } from 'react-swipeable';
import bgRoadmapImage from '../assets/bg-roadmap-04.svg';


const phases = [
  {
    icon: <FaRocket className="text-4xl text-white" />,
    title: 'Phase 1',
    date: "Q2 '24",
    details: [
      { text: 'Development of BAE BOT', completed: true },
    ],
  },
  {
    icon: <FaUsers className="text-4xl text-white" />,
    title: 'Phase 2',
    date: "Q3 '24",
    details: [
      { text: 'Deployment – R&D', completed: true },
      { text: 'Pending Advanced Integrations', completed: false },
    ],
  },
  {
    icon: <FaLink className="text-4xl text-white" />,
    title: 'Phase 3',
    date: "Q4 '24",
    details: [
      { text: 'Bot Launch', completed: true },
      { text: 'Partnerships', completed: true },
      { text: 'Token Launch with Revenue Sharing', completed: true },
    ],
  },
  {
    icon: <FaDollarSign className="text-4xl text-white" />,
    title: 'Phase 4',
    date: "Q1 '25",
    details: [
      { text: 'Bot Launch on Discord, WeChat, WhatsApp, X', completed: true },
      { text: 'Further Platform Expansions Pending', completed: false },
    ],
  },
  {
    icon: <FaGlobe className="text-4xl text-white" />,
    title: 'Phase 5',
    date: "Q2 '25",
    details: [
      { text: 'Branding and Wearable NFTs', completed: true },
      { text: 'Decentraland / Sandbox Metaverse Integration', completed: true },
    ],
  },
];

const Roadmap = () => {
  const [currentPhase, setCurrentPhase] = useState(0);

  const handleNext = () => {
    if (currentPhase < phases.length - 1) {
      setCurrentPhase(currentPhase + 1);
    }
  };

  const handlePrev = () => {
    if (currentPhase > 0) {
      setCurrentPhase(currentPhase - 1);
    }
  };

  // Swipeable handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    trackMouse: true, // Optional: allows swiping via mouse on desktop too
  });

  return (
    <section
      id="roadmap"
      className="py-20 px-4 md:px-12 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgRoadmapImage})`}} // Add your image URL here
    >
      
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">BAEBOT ROADMAP</h2>
        <p className="text-lg text-gray-400 mb-16">2024 / 2025</p>

        <div className="relative">
          {/* Phases for large screens */}
          <div className="hidden md:flex justify-center items-start gap-12 text-justify">
            {phases.map((phase, index) => (
              <div key={index} className="flex flex-col items-center mx-6">
                <div className="bg-blue-600 border border-blue-400 rounded-full p-6 mb-4 shadow-lg animate-glow">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{phase.date}</p>
                <ul className="text-gray-300 text-sm list-inside space-y-2">
                  {phase.details.map((detail, i) => (
                    <li key={i} className="flex items-center justify-start text-justify">
                      {detail.completed ? (
                        <HiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      ) : (
                        <HiXCircle className="w-4 h-4 text-gray-400 mr-2" />
                      )}
                      {detail.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Phases for mobile with swipeable functionality */}
          <div {...swipeHandlers} className="md:hidden text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 border border-blue-400 rounded-full p-6 mb-4 shadow-lg animate-glow">
                {phases[currentPhase].icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{phases[currentPhase].title}</h3>
              <p className="text-sm text-gray-400 mb-4">{phases[currentPhase].date}</p>
              <ul className="text-gray-300 text-sm list-inside space-y-2 text-justify">
                {phases[currentPhase].details.map((detail, i) => (
                  <li key={i} className="flex items-center">
                    {detail.completed ? (
                      <HiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    ) : (
                      <HiXCircle className="w-4 h-4 text-gray-400 mr-2" />
                    )}
                    {detail.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500"
                onClick={handlePrev}
                disabled={currentPhase === 0}
              >
                Previous
              </button>
              <button
                className="bg-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500"
                onClick={handleNext}
                disabled={currentPhase === phases.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
