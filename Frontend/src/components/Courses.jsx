import React, { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient";

const AdBannerSection = () => {
  const [ad, setAd] = useState(null);
  const [isVisible, setIsVisible] = useState(true); // Reset on refresh

  useEffect(() => {
    const fetchAd = async () => {
      const query = '*[_type == "adBanner"][0]'; // Fetch first ad
      const data = await client.fetch(query);
      setAd(data);
    };

    fetchAd();
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Temporarily hide, but resets on refresh
  };

  if (!isVisible || !ad) return null; // Hide if dismissed

  return (
    <div className="relative px-6 py-12 bg-white text-gray-900">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 px-3 py-1 text-sm font-bold text-white bg-red-500 rounded hover:bg-red-600"
      >
        ✕ Close
      </button>

      <h2 className="mb-12 text-4xl font-extrabold text-center text-blue-600">
        Sponsored Ad
      </h2>

      <div className="flex justify-center">
        <a href={ad.link} target="_blank" rel="noopener noreferrer">
          <img
            src={urlFor(ad.image).url()}
            alt="Sponsored Ad"
            className="object-cover w-full max-w-4xl h-64 rounded-lg shadow-md border border-gray-300"
          />
        </a>
      </div>
    </div>
  );
};

export default AdBannerSection;
