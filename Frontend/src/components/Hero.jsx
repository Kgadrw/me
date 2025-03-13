import React, { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      const query = '*[_type == "hero"][0]'; // Fetch the first hero document
      const data = await client.fetch(query);
      setHeroData(data);
    };

    fetchHeroData();
  }, []);

  if (!heroData) return <div className="py-20 text-center">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-between min-h-[80vh] px-16 text-gray-900 md:flex-row md:px-16 bg-white font-serif">
      {/* Left: Banner Image */}
      <div className="flex justify-center md:w-1/2">
        {heroData.backgroundImage ? (
          <img
            src={urlFor(heroData.backgroundImage).url()}
            alt="Hero Background"
            className="w-full max-w-lg h-[400px]  shadow-lg object-container"
          />
        ) : (
          <div className="w-full max-w-lg h-[400px] bg-gray-300 rounded-lg shadow-lg"></div>
        )}
      </div>

      {/* Right: Text Content */}
      <div className="text-center md:w-1/2 md:text-left">
        <h1 className="text-5xl font-extrabold text-blue-600 md:text-6xl uppercase">
          {heroData.title}
        </h1>
        <p className="max-w-lg mt-6 text-lg font-thin leading-relaxed text-gray-500 md:text-xl">
          {heroData.description}
        </p>
        <div className="flex flex-col mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <a
            href={heroData.ctaPrimaryLink}
            className="px-6 py-3 text-lg font-medium text-white transition bg-blue-600 rounded-full hover:bg-blue-500"
          >
            {heroData.ctaPrimary}
          </a>
          <a
            href={heroData.ctaSecondaryLink}
            className="px-6 py-3 text-lg font-medium transition border border-gray-600 rounded-full hover:bg-gray-300"
          >
            {heroData.ctaSecondary}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
