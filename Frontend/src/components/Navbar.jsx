import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Bell, User } from "lucide-react"; // Importing icons

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
        <img src="/logo.png" alt="Logo" className="object-cover h-10 w-21" />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden space-x-6 md:flex">
        <a
          href="/"
          className="relative text-base font-medium text-gray-300 hover:text-blue-500 group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 transition-all group-hover:scale-x-100 group-active:scale-x-100"></span>
        </a>
        <a
          href="/about"
          className="relative text-base font-medium text-gray-300 hover:text-blue-500 group"
        >
          About
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 transition-all group-hover:scale-x-100 group-active:scale-x-100"></span>
        </a>
        <a
          href="/portfolio"
          className="relative text-base font-medium text-gray-300 hover:text-blue-500 group"
        >
          Portfolio
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 transition-all group-hover:scale-x-100 group-active:scale-x-100"></span>
        </a>
      </div>

      {/* Right Side: Notification Icon, Account Icon, and Mobile Menu Button */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="relative">
          <Bell size={24} className="cursor-pointer hover:text-blue-500" />
        </div>

        {/* Account Icon */}
        <div>
          <User size={24} className="cursor-pointer hover:text-blue-500" />
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef} // Attach the button ref
          onClick={toggleMenu}
          className="md:hidden"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef} // Attach the menu ref
        className={`absolute top-0 right-0 w-1/2 bg-gray-900 text-white px-8 py-6 space-y-4 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } mt-16`} // Added mt-16 to push the menu down
      >
        {/* Removed the duplicate X button */}

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
    </nav>
  );
};

export default Navbar;
