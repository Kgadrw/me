import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-200 text-black py-12 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {[
              { icon: <FaGithub />, href: "https://github.com/Kgadrw" },
              { icon: <FaTwitter />, href: "https://x.com/gadkalisa05" },
              {
                icon: <FaLinkedin />,
                href: "www.linkedin.com/in/gad-kalisa-2aa319333",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="p-3 rounded-full border-2 border-gray-300 text-black hover:border-blue-500 hover:text-blue-500 transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
          {/* Contact Information */}
          <div className="text-center text-sm">
            <p className="text-black">
              Phone:{" "}
              <a href="tel:0791998365" className="text-blue-600">
                0791998365
              </a>{" "}
              | Email:{" "}
              <a href="mailto:kalisagad05@gmail.com" className="text-blue-600">
                kalisagad05@gmail.com
              </a>
            </p>
          </div>
          {/* Crafted with Love Text */}
          <p className="text-center text-blue-600 text-sm">
            Crafted with love by <span className="font-bold">GAD KALISA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
