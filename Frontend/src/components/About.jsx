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
                className="w-full md:w-[98%] transition border-2 border-gray-300 rounded-xl shadow-lg bg-white hover:shadow-2xl"
              >
                <img
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  className="object-cover w-full h-56 rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-500">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="mt-3 text-md leading-relaxed">{post.excerpt}</p>
                  <a
                    href={post.link}
                    className="block mt-4 text-md font-semibold text-blue-600 hover:underline"
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
