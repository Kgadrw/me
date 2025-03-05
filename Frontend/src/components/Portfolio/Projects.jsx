import React, { useEffect, useState } from "react";
import client, { urlFor } from "../../sanityClient";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the portfolio data from Sanity
    client
      .fetch(
        '*[_type == "portfolio"]{title, owner, description, fullDescription, imageUrl, link}'
      )
      .then((data) => {
        setProjects(data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p>Error loading projects: {error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-950 text-white py-16 px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-wide text-cyan-100 uppercase">
          Recents Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-950 border border-gray-900 p-2 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            {/* Thumbnail */}
            <img
              src={urlFor(project.imageUrl).width(400).height(300).url()} // Ensure responsive images
              alt={project.title}
              className="w-full h-40 object-container mb-4"
            />

            {/* Title and Owner */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-blue-400">
                {project.title}
              </h3>
              <span className="text-sm text-gray-400">{project.owner}</span>
            </div>

            {/* Short Description */}
            <p className="text-base mb-4">{project.description}</p>

            {/* Visit Project Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-2 px-4 text-base text-white bg-blue-500 hover:bg-blue-600 rounded-full text-center mt-4"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
