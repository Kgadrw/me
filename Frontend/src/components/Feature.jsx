import React, { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient"; // Assuming you have a configured Sanity client
import { Eye } from "lucide-react"; // Import Eye icon

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
    <div
      className="py-12 text-gray-900 bg-gray-100"
      style={{
        backgroundImage: 'url("")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content */}
      <div className="px-8 mx-auto max-w-7xl md:px-16 relative">
        {/* "What I Do" Section with Enhanced Styling */}
        <div className="text-left relative mb-8 mt-4">
          <div className="absolute inset-0 flex items-center justify-start z-[-1]">
            <div className="w-full h-1 bg-blue-500 opacity-50"></div>
          </div>
          <h2 className="text-3xl font-extrabold text-blue-600 tracking-wide uppercase">
            What I Do
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Helping you achieve your goals with innovative solutions.
          </p>
        </div>

        {/* Cards Layout */}
        <div className="flex flex-col items-center gap-6">
          {/* First Row: One Large Card on the Left and Two Smaller Cards Stacked on the Right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full">
            {/* First Card - Larger and Taller on the Left */}
            {features[0] && (
              <div
                key={features[0]._id}
                className="relative p-4 transition border-2 border-gray-300 shadow-md bg-white group hover:shadow-lg  h-full  ease-in-out"
              >
                {/* Feature Image */}
                <img
                  src={urlFor(features[0].image).url()} // Sanity URL for the feature image
                  alt={features[0].title}
                  className="object-contain w-full h-48 mb-4 rounded-lg  ease-in-out"
                />

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-blue-500 ">
                  {features[0].title}
                </h3>
                {/* Feature Description */}
                <p className="mt-2 text-sm font-thin md:text-base leading-relaxed">
                  {features[0].description}
                </p>
              </div>
            )}

            {/* Two Cards Stacked on the Right */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              {features.slice(1, 3).map((feature) => (
                <div
                  key={feature._id}
                  className="relative p-4 transition border-2 border-gray-300 shadow-md bg-white group hover:shadow-lg    ease-in-out"
                >
                  {/* Feature Image */}
                  <img
                    src={urlFor(feature.image).url()} // Sanity URL for the feature image
                    alt={feature.title}
                    className="object-contain w-full h-24 mb-4 rounded-lg "
                  />

                  {/* Feature Title */}
                  <h3 className="text-lg font-bold text-blue-500 g">
                    {feature.title}
                  </h3>
                  {/* Feature Description */}
                  <p className="mt-2 text-sm font-thin md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Remaining Cards - Smaller and Stacked */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(3).map((feature) => (
              <div
                key={feature._id}
                className="relative p-4 transition border-2 border-gray-300 shadow-md bg-white group hover:shadow-lg    ease-in-out"
              >
                {/* Feature Image */}
                <img
                  src={urlFor(feature.image).url()} // Sanity URL for the feature image
                  alt={feature.title}
                  className="object-contain w-full h-24 mb-4 rounded-lg transition-transform transform group-hover:scale-110 duration-300 ease-in-out"
                />

                {/* Feature Title */}
                <h3 className="text-lg font-bold text-blue-500 group-hover:text-white">
                  {feature.title}
                </h3>
                {/* Feature Description */}
                <p className="mt-2 text-sm font-thin md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
