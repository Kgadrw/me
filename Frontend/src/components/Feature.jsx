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
    <div className="py-16 text-white bg-gray-950">
      <div className="px-6 mx-auto max-w-7xl md:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Map through the features data */}
          {features.map((feature) => (
            <div
              key={feature._id}
              className="p-8 transition border-2 border-gray-800 rounded-lg shadow-lg bg-gray-950 hover:shadow-xl"
            >
              <img
                src={urlFor(feature.image).url()} // Sanity URL for the feature image
                alt={feature.title}
                className="object-contain w-full h-32 mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-blue-400">
                {feature.title}
              </h3>
              <p className="mt-4 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
