import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-700 text-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo Section (You can add logo here if needed) */}
          <div className="flex justify-center md:justify-start">
            <a href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="object-cover h-10 w-21 cursor-pointer"
              />
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-center">
            <div className="mt-3 flex space-x-6">
              {[
                { icon: <FaFacebook />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaLinkedin />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-3 rounded-full border-2 border-gray-300 text-gray-100 hover:border-blue-500 hover:text-blue-500 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-100">
              &copy; {new Date().getFullYear()} NovaTech. All Rights Reserved.
            </p>
            <div className="mt-2 flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-100 hover:text-blue-500 transition"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-blue-500 transition"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
