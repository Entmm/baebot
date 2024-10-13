import React from 'react';
import btcLogo from '../learn/Icons/solana.png'; // Ensure you have the correct path for the BTC logo
import ethLogo from '../learn/Icons/solana.png'; // Ensure you have the correct path for the ETH logo
import solanaLogo from '../learn/Icons/solana.png'; // Ensure you have the correct path for the Solana logo
import usdtLogo from '../learn/Icons/solana.png'; // Add more payment logos as needed


const PaymentOptions = () => {
    return (
        <section className="bg-gray-950 py-16 px-4 relative w-full flex flex-col items-center">
        {/* Title Section */}
        <div className="max-w-3xl text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
            Payment Options
          </h2>
          <p className="mt-4 text-base text-gray-300">
            BAE BOT offers a wide range of payment methods, ensuring inclusivity and compatibility with any Telegram group across different blockchain networks.
          </p>
        </div>
  
        {/* Payment Logos */}
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <img src={btcLogo} alt="BTC Logo" className="h-12 w-auto" /> {/* BTC Logo */}
          <img src={ethLogo} alt="ETH Logo" className="h-12 w-auto" /> {/* ETH Logo */}
          <img src={btcLogo} alt="BTC Logo" className="h-12 w-auto" /> {/* BTC Logo */}
          <img src={ethLogo} alt="ETH Logo" className="h-12 w-auto" /> {/* ETH Logo */}
          <img src={btcLogo} alt="BTC Logo" className="h-12 w-auto" /> {/* BTC Logo */}
          <img src={ethLogo} alt="ETH Logo" className="h-12 w-auto" /> {/* ETH Logo */}
          <img src={btcLogo} alt="BTC Logo" className="h-12 w-auto" /> {/* BTC Logo */}
          <img src={ethLogo} alt="ETH Logo" className="h-12 w-auto" /> {/* ETH Logo */}
          <img src={solanaLogo} alt="Solana Logo" className="h-12 w-auto" /> {/* Solana Logo */}
          <img src={usdtLogo} alt="USDT Logo" className="h-12 w-auto" /> {/* USDT Logo */}
          {/* Add more logos as needed */}
        </div>
  
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-teal-500 to-purple-500 opacity-50 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-blue-500 to-purple-600 opacity-40 rounded-full blur-2xl"></div>
      </section>
    );
  };
  
  export default PaymentOptions;
  