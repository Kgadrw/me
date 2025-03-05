import React, { useEffect, useState } from "react";
import client, { urlFor } from "../../sanityClient";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(
        '*[_type == "portfolio"]{title, owner, description, fullDescription, imageUrl, link}'
      )
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <p>Error loading projects: {error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-950 text-white py-16 px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-wide text-cyan-100 uppercase">
          Recent Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
          >
            {/* Thumbnail */}
            <img
              src={urlFor(project.imageUrl).width(600).height(400).url()}
              alt={project.title}
              className="w-full h-60 object-container"
            />

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{project.owner}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Visit Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-3 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-xl transition-all"
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
