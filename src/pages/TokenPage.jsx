import React from 'react';
import Navbar from '../components/Navbar';  // Reuse your existing Navbar
import Footer from '../components/Footer'; // Reuse existing Footer
import TokenHeroSection from '../components/Tokenpage/TokenHeroSection'; // Import the hero section
import TokenFeatures from '../components/Tokenpage/tokenfeature'; // Import the Key Features section
import TokenHow from '../components/Tokenpage/tokenhow'; // Corrected import for the How It Works section
import TokenBenefits from '../components/Tokenpage/TokenBenefits'; // Corrected import for the How It Works section
import Tokenstart from '../components/Tokenpage/Tokenstarted'; // Corrected import for the How It Works section
import Tokenreward from '../components/Tokenpage/Tokenreward'; // Corrected import for the How It Works section
import ActiveServers from '../components/learn/ActiveServers';
import PaymentOptions from '../components/learn/PaymentOptions';
import TokenBuy from '../components/Tokenpage/TokenBuy';

const TokenPage = () => {
  return (
    <div>
      <Navbar />
      
      {/* Token Hero Section */}
      <TokenHeroSection />
      
      {/* Key Features Section */}
      <TokenFeatures />
      
      {/* How It Works Section */}
      <TokenHow />

      <TokenBenefits />
      <Tokenstart />
      <Tokenreward />
      <PaymentOptions />

      <TokenBuy />
      <ActiveServers />
      <Footer />
    </div>
  );
};

export default TokenPage;
