import React, { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    client
      .fetch('*[_type == "blogPost"] | order(publishedAt desc)')
      .then(setPosts);
  }, []);

  const nextSlide = () => {
    if (currentIndex < posts.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      className="bg-gray-100 py-24 relative"
      style={{
        backgroundImage: "url(/path/to/your-image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative px-8 mx-auto max-w-7xl md:px-16 z-10">
        {/* Header with Toggle Icon */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="sm:text-3xl md:text-6xl text-3xl font-extrabold text-blue-600 tracking-wide uppercase">
            My Latest Linkedin Posts
          </h2>
          <button
            className="p-2 bg-white shadow-md rounded-full"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Minus size={32} /> : <Plus size={32} />}
          </button>
        </div>

        {isVisible && (
          <>
            {/* First Blog Post (Big Card) */}
            {posts.length > 0 && (
              <a
                key={posts[0]._id}
                href={posts[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden shadow-2xl bg-white w-full mb-12 group"
              >
                <img
                  src={urlFor(posts[0].mainImage).url()}
                  alt={posts[0].title}
                  className="object-cover w-full h-96 sm:h-80 md:h-96"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black opacity-80">
                  <h3 className="text-3xl sm:text-2xl font-bold text-white mb-3 font-montserrat">
                    {posts[0].title}
                  </h3>
                  <p className="text-sm text-white opacity-80 font-roboto">
                    Published:{" "}
                    {new Date(posts[0].publishedAt).toLocaleDateString()}
                  </p>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      {posts[0].excerpt}
                    </p>
                  </div>
                </div>
              </a>
            )}

            {/* Other Blog Posts (Carousel) */}
            <div className="relative flex items-center mt-8">
              {currentIndex > 0 && (
                <button
                  className="absolute left-0 z-10 p-2 bg-white shadow-md"
                  onClick={prevSlide}
                >
                  <ChevronLeft size={32} />
                </button>
              )}

              <div className="flex gap-6 overflow-hidden w-full">
                {posts
                  .slice(1)
                  .slice(currentIndex, currentIndex + 3)
                  .map((post) => (
                    <a
                      key={post._id}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden shadow-xl bg-white flex-shrink-0 w-full sm:w-1/2 md:w-1/3 group"
                    >
                      <img
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        className="object-cover w-full h-56"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black opacity-90">
                        <h3 className="text-xl sm:text-lg font-bold text-white mb-2 font-montserrat">
                          {post.title}
                        </h3>
                        <p className="text-sm text-white opacity-80 font-roboto">
                          Published:{" "}
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </p>
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <p className="text-white text-center px-4">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>

              {currentIndex < posts.length - 3 && (
                <button
                  className="absolute right-0 z-10 p-2 bg-white shadow-md"
                  onClick={nextSlide}
                >
                  <ChevronRight size={32} />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
