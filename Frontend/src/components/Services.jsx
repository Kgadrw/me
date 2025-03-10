import { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient";
import { Eye } from "lucide-react"; // Import Eye icon

const PortfolioProjects = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects from Sanity
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query =
          '*[_type == "portfolioProject"] | order(publishedAt desc)';
        const data = await client.fetch(query);
        console.log("Fetched projects:", data); // Debugging
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="py-8 bg-gray-100 text-gray-900 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* Heading Section */}
        <h2 className="text-5xl font-extrabold text-center text-blue-600">
          My Works
        </h2>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project._id}
              className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-200"
            >
              {/* Project Image */}
              <img
                src={urlFor(project.image).url()}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Eye Icon Hover Effect */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Eye className="w-12 h-12 text-white" />
              </a>

              {/* Project Title */}
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
