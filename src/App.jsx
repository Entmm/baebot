import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import KeyFeatures from './components/KeyFeatures';
import Benefits from './components/Benefits';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <KeyFeatures />
      <Benefits />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
