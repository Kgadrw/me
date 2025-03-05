import React, { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient"; // Assuming you have configured sanityClient.js

const TrustedCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchTrustedCompanies = async () => {
      const query = '*[_type == "trustedCompany"]'; // Fetch all trusted companies
      const companiesData = await client.fetch(query);
      setCompanies(companiesData);
    };

    fetchTrustedCompanies();
  }, []);

  return (
    <div className="px-6 py-4 text-white bg-gray-950">
      {/* Trusted Companies Title */}
      <h2 className="mb-12 text-4xl font-extrabold text-center text-cyan-100">
        Trusted by Leading Companies Across The Globe
      </h2>

      {/* Trusted Companies Logos */}
      <div className="trusted-companies">
        <div className="flex justify-center space-x-8">
          {companies.map((company) => (
            <img
              key={company._id}
              src={urlFor(company.logo).url()} // Sanity URL for the company logo
              alt={company.name}
              className="object-contain w-32 h-32"
            />
          ))}
        </div>
      </div>

      {/* Africa Image Below Trusted Companies */}
      <div className="flex justify-center mt-12">
        <img
          src="/africa.png" // Assuming africa.png is stored in the public folder
          alt="Africa"
          className="object-contain w-full max-w-4xl "
        />
      </div>

      {/* No animation required anymore */}
      <style jsx>{`
        .trusted-companies {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .trusted-companies img {
          margin-right: 40px; /* Space between each logo */
        }
      `}</style>
    </div>
  );
};

export default TrustedCompanies;
