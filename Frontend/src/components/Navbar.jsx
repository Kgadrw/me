import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Github, Twitter, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="top-0 left-0 right-0 z-10 bg-transparent shadow-none py-5 px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between">
        {/* Left Side: Logo with Text */}
        <div className="flex items-center space-x-2 pl-20">
          <Link
            to="/"
            className="text-3xl sm:text-4xl font-extrabold text-blue-600"
          >
            <img src="/gad.png" alt="logo" className="h-8  sm:h-10" />
          </Link>
        </div>

        {/* Right Side: Blog Link, Social Media Icons, and Mobile Menu Button */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Blog Link */}
          <Link
            to="/about"
            className="text-sm sm:text-base font-semibold text-black hover:text-blue-600 hidden md:block"
          >
            Blogs
          </Link>

          {/* Social Media Icons with Circle Border */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Kgadrw"
              className="text-black hover:text-blue-600 border border-gray-300 rounded-full p-2 transition-all transform hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com/Kgadrw"
              className="text-black hover:text-blue-600 border border-gray-300 rounded-full p-2 transition-all transform hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gad-kalisa-2aa319333"
              className="text-black hover:text-blue-600 border border-gray-300 rounded-full p-2 transition-all transform hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="md:hidden text-black"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Show when the menu is open */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-0 left-0 right-0 bg-white px-8 py-6 mt-16 shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            <Link
              to="/about"
              className="text-black text-lg font-medium hover:text-blue-600"
            >
              Blogs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
