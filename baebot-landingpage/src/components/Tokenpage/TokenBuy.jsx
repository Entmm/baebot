import React from 'react';
import step1 from '../Tokenpage/images/bae-token180.png';
import step2 from '../Tokenpage/images/bae-token180.png';
import step3 from '../Tokenpage/images/bae-token180.png';
import step4 from '../Tokenpage/images/bae-token180.png';

const TokenPurchaseGuide = () => {
  const steps = [
    {
      title: 'Download Phantom Wallet',
      description:
        'First, download the Phantom Wallet from the official app store and create a new wallet. After setting up the wallet, you will see a welcome screen with options: "Buy Crypto" and "Transfer Crypto."',
      image: step1,
    },
    {
      title: 'Buy Solana (SOL)',
      description:
        'Select "Buy Crypto", then choose "Solana (SOL)". Enter the amount of SOL you wish to buy and press "Next." Choose a funding option like MoonPay or Coinbase Pay and finalize your order.',
      image: step2,
    },
    {
      title: 'Log In to Phantom Wallet',
      description:
        'Once you’ve bought Solana, log into your Phantom Wallet on the mobile app or the browser extension. To swap Solana for $BAE token, click the swap icon at the bottom of the app.',
      image: step3,
    },
    {
      title: 'Swap Solana for $BAE Token',
      description:
        'In the swap widget, select Solana (SOL) as the token you want to swap from. In the search bar, type "$BAE Token" or paste the contract address. Choose $BAE Token, enter the amount you’d like to swap, and finalize the swap.',
      image: step4,
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
          How to Purchase Solana and $BAE Token in Phantom Wallet
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto text-justify">
          Follow this step-by-step guide to buy Solana (SOL) and $BAE Token easily using the Phantom Wallet.
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="flex flex-col items-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-32 h-32 object-cover rounded-full mb-6"
              />
              <h3 className="text-2xl font-bold text-teal-400 mb-4">{step.title}</h3>
              <p className="text-gray-300 text-justify">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TokenPurchaseGuide;
