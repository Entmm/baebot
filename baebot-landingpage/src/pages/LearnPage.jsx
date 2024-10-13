import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/learn/Herosection';
import BaeBotGuide from '../components/learn/baebotguide';
import CommandSection from '../components/learn/CommandSection';
import PaymentOptions from '../components/learn/PaymentOptions';
import ActiveServers from '../components/learn/ActiveServers';
import Footer from '../components/Footer';

const LearnPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BaeBotGuide />
      <CommandSection />
      <PaymentOptions />
      <ActiveServers />
      <Footer />
    </div>
  );
};

export default LearnPage;
