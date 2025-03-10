import React, { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = '*[_type == "blogPost"] | order(publishedAt desc)';
      const data = await client.fetch(query);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="py-20 bg-white text-gray-900">
      <div className="px-8 mx-auto max-w-7xl md:px-16">
        <h2 className="text-5xl font-extrabold text-center text-blue-600 md:text-6xl">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="transition border-2 border-gray-300 rounded-xl shadow-lg bg-white hover:shadow-2xl"
              >
                <img
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  className="object-container w-full h-64 rounded-t-xl"
                />
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-blue-500">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-lg md:text-xl leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.link}
                    className="block mt-4 text-lg font-semibold text-blue-600 hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl">No blog posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
