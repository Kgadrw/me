import React, { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient"; // Import client and urlFor

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState(null);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchAboutUsData = async () => {
      const query = '*[_type == "aboutUs"][0]'; // Get the first (and only) document for the About Us page
      const data = await client.fetch(query);
      setAboutUsData(data);
    };
    fetchAboutUsData();
  }, []);

  if (!aboutUsData)
    return (
      <div className="flex flex-col justify-center py-4 text-xl font-bold text-center text-white bg-gray-950 about-us-container md:px-16">
        No data to display
      </div>
    ); // Wait until the data is fetched

  return (
    <div className="flex flex-col justify-center min-h-screen px-8 py-2 bg-gray-950 text-gray-950 about-us-container md:px-16">
      {/* First Section: Banner Image on the Left, Text on the Right */}
      <div className="flex flex-col items-center justify-between gap-4 mb-0 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img
            src={urlFor(aboutUsData.section1Image).url()} // Dynamically fetch the image URL
            alt="Banner"
            className="object-contain w-full h-68 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-cyan-100">
            {aboutUsData.section1Heading} {/* Dynamically fetch the heading */}
          </h2>
          <p className="text-lg text-gray-200">
            {aboutUsData.section1Text} {/* Dynamically fetch the text */}
          </p>
        </div>
      </div>

      {/* Second Section: Text on the Left, Banner Image on the Right */}
      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h3 className="mb-6 text-4xl font-extrabold leading-tight text-cyan-100">
            {aboutUsData.section2Heading} {/* Dynamically fetch the heading */}
          </h3>
          <p className="text-lg text-white">
            {aboutUsData.section2Text} {/* Dynamically fetch the text */}
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={urlFor(aboutUsData.section2Image).url()} // Dynamically fetch the image URL
            alt="Banner"
            className="object-contain w-full h-68 "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
