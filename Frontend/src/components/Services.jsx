import { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient";
import { Eye } from "lucide-react";

const PortfolioProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query =
          '*[_type == "portfolioProject"] | order(publishedAt desc)';
        const data = await client.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="bg-white py-12 relative">
      {/* Image at the top right */}
      <img
        src="/j.png"
        alt="Top Right Image"
        className="absolute top-0 right-16 w-28 h-28 md:w-32 md:h-32 object-cover"
      />

      <div className="px-8 mx-auto max-w-7xl md:px-16 z-10">
        <div className="text-left mb-10">
          <h2 className="text-4xl font-extrabold text-blue-600 tracking-wide uppercase">
            Project
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Helping you achieve your goals with innovative solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project._id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden border-2 border-gray-300 shadow-md group"
            >
              <img
                src={urlFor(project.image).url()}
                alt={project.title}
                className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100">
                <Eye className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-5 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold text-black">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-800">
                  Created on:{" "}
                  {new Date(project.publishedAt).toLocaleDateString()}
                </p>
                <p className="mt-1 text-sm text-black">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
