import { useState, useEffect } from "react";
import { Eye } from "lucide-react"; // Eye icon for hover effect
import client, { urlFor } from "../sanityClient"; // Import client and urlFor

const PortfolioProjects = () => {
  const [projects, setProjects] = useState([]);

  // Fetch portfolio projects from Sanity
  useEffect(() => {
    const fetchProjects = async () => {
      const query = '*[_type == "portfolioProject"] | order(publishedAt desc)'; // Get latest projects
      const data = await client.fetch(query);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="py-16 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* Heading Section */}
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Recent Portfolio Projects
        </h2>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project._id} className="relative group">
              {/* Project Image */}
              <img
                src={urlFor(project.image).url()}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />

              {/* Hover Overlay with Eye Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-lg font-semibold"
                >
                  <Eye size={28} /> View
                </a>
              </div>

              {/* Project Title */}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
