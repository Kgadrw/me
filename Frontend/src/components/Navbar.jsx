import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // Importing icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to the mobile menu container
  const buttonRef = useRef(null); // Ref to the mobile menu button

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu if a click occurs outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative flex items-center justify-between w-full px-16 py-4 text-white bg-gray-900 border-b border-gray-800 shadow-md">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <a href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="object-cover h-10 w-21 cursor-pointer"
          />
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden space-x-6 md:flex">
        <a
          href="/"
          className="text-base font-medium text-gray-300 hover:text-blue-500"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-base font-medium text-gray-300 hover:text-blue-500"
        >
          About
        </a>
        <a
          href="/portfolio"
          className="text-base font-medium text-gray-300 hover:text-blue-500"
        >
          Portfolio
        </a>
      </div>

      {/* Right Side: Contact Us Button and Mobile Menu Button */}
      <div className="flex items-center space-x-6">
        {/* Contact Us Button */}
        <a
          href="/contact"
          className="text-base font-medium text-white bg-blue-400 border border-blue-400 px-4 py-2 rounded-3xl transition-all hidden md:flex"
        >
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="md:hidden"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu - Now appears normally when open */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-0 w-full bg-gray-900 text-white px-8 py-6 space-y-4 md:hidden"
        >
          <a
            href="/"
            className="block text-base font-medium text-gray-300 hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="/about"
            className="block text-base font-medium text-gray-300 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="/portfolio"
            className="block text-base font-medium text-gray-300 hover:text-blue-500"
          >
            Portfolio
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
