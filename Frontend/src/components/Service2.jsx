import { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient"; // Import client and urlFor

const ServiceCards = () => {
  const [services, setServices] = useState([]);

  // Fetch services from Sanity
  useEffect(() => {
    const fetchServices = async () => {
      const query = '*[_type == "service"]'; // Sanity query to get all services
      const servicesData = await client.fetch(query);
      setServices(servicesData);
    };
    fetchServices();
  }, []);

  return (
    <div className="py-16 bg-gray-950 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* Heading Section */}

        {/* Service Cards Section */}
        <div className="max-w-6xl mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center p-6 border border-gray-700 rounded-2xl shadow-lg bg-gray-950 hover:shadow-xl transition-all duration-300"
              >
                {/* Service Image */}
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={urlFor(service.image).url()} // Use urlFor to get the image URL
                    alt={service.title}
                    className="w-full h-48 rounded-lg object-container"
                  />
                </div>

                {/* Service Title */}
                <dt className="text-lg font-semibold text-white text-center">
                  {service.title}
                </dt>
                <dd className="mt-2 text-sm text-gray-400 text-center">
                  {service.description}
                </dd>

                {/* Call to Action Button */}
                <a
                  href="/modal"
                  className="inline-block px-6 py-3 mt-4 text-sm font-medium text-white transition-all duration-300 rounded-full bg-cyan-600 hover:bg-cyan-500 shadow-md"
                >
                  {service.ctaText}
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
