import React from 'react';
import backgroundImage from '../Tokenpage/images/bg-roadmap-04.svg'; // Ensure this path is correct for your background image
import tokenLogo from '../Tokenpage/images/bae-token.jpg'; // Ensure this path is correct for your token image

const TokenHeroSection = () => {
    return (
        <section
            className="relative bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported background image
        >
            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

            <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 z-10">
                {/* Token Logo */}
                <div className="flex justify-center mb-8">
                    <img src={tokenLogo} alt="BAE Token" className="h-24 w-auto" /> {/* Adjust size as needed */}
                </div>

                {/* Title */}
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600">
                        Introducing <span className="text-white">$BAE TOKEN</span>
                    </h1>
                </div>

                {/* Subtitle */}
                <div className="mt-6 max-w-3xl text-center mx-auto text-lg md:text-xl text-gray-300">
                    <p>
                        An innovative cryptocurrency that not only offers a promising investment opportunity but also rewards its holders as the market cap of the token increases. Designed to align the interests of the community with the success of the token, $BAE creates a dynamic ecosystem where growth benefits everyone.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="/holder-rewards"
                        className="inline-flex items-center gap-x-3 bg-gradient-to-tr from-teal-400 to-purple-600 hover:from-purple-600 hover:to-teal-400 text-white text-lg font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"
                    >
                        Learn About Holder Rewards
                    </a>
                </div>
            </div>

            {/* Decorative Shapes */}
            <div className="absolute top-1/3 left-10 w-40 h-40 bg-gradient-to-r from-purple-600 to-pink-500 opacity-60 rounded-full blur-xl z-0"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-blue-500 to-teal-400 opacity-50 rounded-full blur-3xl z-0"></div>
        </section>
    );
};

export default TokenHeroSection;
