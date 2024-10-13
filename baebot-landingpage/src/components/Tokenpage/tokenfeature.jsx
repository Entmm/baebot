import React from 'react';

const KeyFeatures = () => {
    const features = [
        {
            title: "Growth-Based Rewards",
            description: "Designed to reward holders as the market cap of the token increases. The higher the market cap, the greater the rewards distributed to token holders, creating a direct link between the success of the token and the benefits received by the community."
        },
        {
            title: "Automated Reward Distribution",
            description: "Rewards are automatically calculated and distributed based on market cap milestones. Holders receive their share of rewards without needing to take any action, ensuring a seamless and effortless experience."
        },
        {
            title: "Market Cap Milestones",
            description: "The token includes predefined market cap milestones that trigger reward distributions. These milestones are designed to encourage long-term holding and participation as the token’s value grows."
        },
        {
            title: "Transparent Reward Mechanism",
            description: "$BAE employs a transparent reward mechanism, with clear criteria for how rewards are calculated and distributed. Holders can easily track the progress of market cap milestones and anticipated rewards."
        },
        {
            title: "Community-Focused Design",
            description: "$BAE emphasizes community engagement and participation. As the token’s market cap increases, the entire community benefits, fostering a collaborative environment where everyone’s interests are aligned."
        },
    ];

    return (
        <section className="bg-gray-900 text-white py-20 px-4">
            <div className="container mx-auto max-w-7xl text-center">
                <h2 className="text-4xl font-bold mb-10">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
