import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanityClient"; // Import the Sanity client and urlFor utility
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetch team members data from Sanity
    client
      .fetch(
        `*[_type == "team"]{name, role, image{asset->{_id, url}}, socialLinks}`
      )
      .then((data) => {
        setTeamMembers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="bg-gray-950 text-white py-16 px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-cyan-100">Meet Our Team</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-950 border border-gray-900 p-0 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            {/* Image Filling Entire Card */}
            <div className="relative w-full h-64">
              <img
                src={urlFor(member.image.asset).url()} // Use urlFor to generate image URL
                alt={member.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Team Member Name and Role */}
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold text-blue-400">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center mt-4 space-x-4 mb-4">
              {member.socialLinks.twitter && (
                <a
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                >
                  <FaTwitter size={24} />
                </a>
              )}
              {member.socialLinks.linkedin && (
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                >
                  <FaLinkedin size={24} />
                </a>
              )}
              {member.socialLinks.instagram && (
                <a
                  href={member.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-500"
                >
                  <FaInstagram size={24} />
                </a>
              )}
              {member.socialLinks.facebook && (
                <a
                  href={member.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <FaFacebook size={24} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
