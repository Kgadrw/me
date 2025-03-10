import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

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
      <div className="hidden space-x-6 md:flex"></div>

      {/* Right Side: Contact Us Button and Mobile Menu Button */}
      <div className="flex items-center space-x-6">
        {/* Contact Us Button */}
        <a
          href="mailto:kalisagad05@gmail.com"
          className="text-base font-medium text-white bg-blue-400 border border-blue-400 px-4 py-2 rounded-3xl transition-all hidden md:flex"
        >
          Let's Talk
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
    </nav>
  );
};

export default Navbar;
