import React from 'react';

const TokenBenefits = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Aligned Incentives</h3>
            <p className="text-gray-300">
              By linking rewards directly to market cap growth, $BAE ensures that both the token and its holders benefit from a successful and expanding market presence.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Passive Income Opportunity</h3>
            <p className="text-gray-300">
              Holders can earn rewards passively as the market cap of $BAE increases, creating an attractive incentive for long-term investment and loyalty.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Encourages Holding</h3>
            <p className="text-gray-300">
              The growth-based reward structure motivates users to hold onto their tokens, contributing to stability and potentially driving further market cap appreciation.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Community Building</h3>
            <p className="text-gray-300">
              The reward mechanism fosters a sense of community and shared success, encouraging collaboration and engagement among token holders.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Transparent Growth</h3>
            <p className="text-gray-300">
              $BAE's transparent reward system provides clarity on how rewards are calculated and distributed, promoting trust and confidence in the token’s value proposition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenBenefits;
