import { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient"; // Import client and urlFor

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials from Sanity
  useEffect(() => {
    const fetchTestimonials = async () => {
      const query = '*[_type == "testimonial"]'; // Sanity query to get all testimonials
      const testimonialData = await client.fetch(query);
      setTestimonials(testimonialData);
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-gray-950 px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-bold tracking-wide text-cyan-100 uppercase">
          What Our Clients Say
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial._id}
              className="bg-gray-950 border-2 border-gray-900 p-5 rounded-lg text-white relative overflow-hidden  hover:border-blue-400"
            >
              <blockquote className="text-base sm:text-lg relative text-gray-200">
                {/* Styled Top Quote */}
                <span className="absolute text-5xl font-bold text-gray-400 left-2 top-0 transform -translate-x-6 opacity-80">
                  "
                </span>
                <p className="relative px-4 py-2 italic">{testimonial.quote}</p>
              </blockquote>
              <figcaption className="mt-3 flex flex-col items-center">
                <img
                  src={urlFor(testimonial.image).url()} // Use urlFor to get the image URL
                  alt={testimonial.name}
                  className="size-24 rounded-full border-2 border-white"
                />
                <div className="mt-2 text-xs sm:text-sm">
                  <span className="font-semibold">{testimonial.name}</span>
                  <span className="block text-gray-400">
                    {testimonial.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
