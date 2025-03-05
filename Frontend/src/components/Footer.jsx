import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-12 border-t border-gray-800 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="Company Logo" className="h-12" />
            <p className="mt-3 text-gray-400 text-sm max-w-xs text-center md:text-left">
              Empowering businesses with innovative solutions. Let’s build the
              future together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col text-center md:text-left">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold text-blue-400">Follow Us</h4>
            <div className="mt-3 flex space-x-4">
              {[
                { icon: <FaFacebook />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaLinkedin />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-3 rounded-full border-2 border-gray-700 text-gray-400 hover:border-blue-400 hover:text-blue-400 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NovaTech. All Rights Reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
