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
    <div className="bg-white py-24 relative">
      {/* Decorative Image at the top */}
      <div className="absolute top-0 left-0 right-0 z-0">
        <img
          src="/imih.webp" // Replace with your actual path
          alt="Decoration"
          className="w-full h-[50px] object-cover opacity-60"
        />
      </div>

      <div className="relative px-8 mx-auto max-w-7xl sm:px-12 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="text-left relative mb-16 mt-20">
            {" "}
            {/* Added mt-20 for top margin */}
            <div className="absolute inset-0 flex items-center justify-start z-[-1]">
              <div className="w-full h-1 bg-blue-500 opacity-50"></div>
            </div>
            <h2 className="text-6xl font-extrabold text-blue-600 tracking-wide uppercase">
              Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Helping you achieve your goals with innovative solutions.
            </p>
          </div>
          {/* Portfolio Cards */}
          {projects.map((project) => (
            <a
              key={project._id}
              href={project.link} // Direct link to the project
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden border border-blue-600 shadow-lg group"
            >
              {/* Project Image */}
              <img
                src={urlFor(project.image).url()}
                alt={project.title}
                className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                style={{ width: "100%", height: "250px" }}
              />

              {/* Eye Icon Hover Effect */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 group-hover:transition-all group-hover:delay-500">
                <Eye className="w-12 h-12 text-white" />
              </div>

              {/* Project Details with hover text effect */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-10 group-hover:translate-y-0 ">
                <h3 className="text-xl font-semibold text-white">
                  {project.title} {/* Title of the project */}
                </h3>
                <p className="mt-1 text-sm text-white">
                  Created on:{" "}
                  {new Date(project.publishedAt).toLocaleDateString()}
                </p>
                <p className="mt-2 text-sm text-white">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;
