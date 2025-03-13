import React, { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient"; // Assuming you have a configured Sanity client

const Features = () => {
  const [features, setFeatures] = useState([]);

  // Fetch features data from Sanity
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const query = '*[_type == "feature"]'; // Query all feature documents
        const featureData = await client.fetch(query);
        setFeatures(featureData);
      } catch (error) {
        console.error("Error fetching features:", error); // Error handling
      }
    };

    fetchFeatures();
  }, []);

  return (
    <div className="py-12 text-gray-900 bg-gray-100">
      {/* Decorative Image at the Bottom */}

      {/* Main Content */}
      <div className="px-8 mx-auto max-w-7xl md:px-16 relative">
        {/* "What I Do" Section with Enhanced Styling */}
        <div className="text-left relative mb-8 mt-4">
          {" "}
          {/* Added mt-20 for top margin */}
          <div className="absolute inset-0 flex items-center justify-start z-[-1]">
            <div className="w-full h-1 bg-blue-500 opacity-50"></div>
          </div>
          <h2 className="text-6xl font-extrabold text-blue-600 tracking-wide uppercase">
            What I Do
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Helping you achieve your goals with innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map through the features data */}
          {features.map((feature) => (
            <div
              key={feature._id}
              className="p-10 transition border-2 border-gray-300  shadow-lg bg-white hover:shadow-2xl"
            >
              {/* Feature Image */}
              <img
                src={urlFor(feature.image).url()} // Sanity URL for the feature image
                alt={feature.title}
                className="object-contain w-full h-40 mb-6 rounded-lg"
              />
              {/* Feature Title */}
              <h3 className="text-3xl font-bold text-blue-500">
                {feature.title}
              </h3>
              {/* Feature Description */}
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
