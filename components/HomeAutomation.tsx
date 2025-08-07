import React, { useState } from "react";

const tabs = [
  {
    title: "Process",
    heading: "How it's made",
    description: "This video explains the process of making the product using natural ingredients and ethical practices.",
  },
  {
    title: "How To Use",
    heading: "How to use",
    description: "Apply a small amount to the affected area and gently massage until absorbed. Use twice daily for best results.",
  },
  {
    title: "Ingredients",
    heading: "What’s inside?",
    description: "Made with natural aloe vera, turmeric, and sandalwood — completely free of harsh chemicals and parabens.",
  },
];

const ProductVideoTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const videoUrl =
    "https://cdn.shopify.com/videos/c/vp/753dfe2212a04017b2429bb4bb1dbc7b/753dfe2212a04017b2429bb4bb1dbc7b.HD-720p-1.6Mbps-27734505.mp4";

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      {/* Video Section */}
      <div className="mb-6">
        <video
          className="w-full rounded-lg shadow-lg"
          controls
          autoPlay
          muted
          loop
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 text-sm font-semibold border-b-2 transition duration-300 ${
              activeTab === index
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        <h2 className="text-xl font-bold mb-2">{tabs[activeTab].heading}</h2>
        <p className="text-gray-700">{tabs[activeTab].description}</p>
      </div>
    </div>
  );
};

export default ProductVideoTabs;
