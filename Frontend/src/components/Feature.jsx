import React, { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient"; // Assuming you have a configured Sanity client

const Features = () => {
  const [features, setFeatures] = useState([]);

  // Fetch features data from Sanity
  useEffect(() => {
    const fetchFeatures = async () => {
      const query = '*[_type == "feature"]'; // Query all feature documents
      const featureData = await client.fetch(query);
      setFeatures(featureData);
    };

    fetchFeatures();
  }, []);

  return (
    <div className="py-20 text-gray-900 bg-gray-100">
      <div className="px-8 mx-auto max-w-7xl md:px-16">
        <h2 className="text-5xl font-extrabold text-center text-blue-600 md:text-6xl">
          What I Do
        </h2>

        <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map through the features data */}
          {features.map((feature) => (
            <div
              key={feature._id}
              className="p-10 transition border-2 border-gray-300 rounded-xl shadow-lg bg-white hover:shadow-2xl"
            >
              <img
                src={urlFor(feature.image).url()} // Sanity URL for the feature image
                alt={feature.title}
                className="object-contain w-full h-40 mb-6 rounded-lg"
              />
              <h3 className="text-3xl font-bold text-blue-500">
                {feature.title}
              </h3>
              <p className="mt-4 text-lg font-thin md:text-xl leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
