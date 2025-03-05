import { useState } from "react";
import { Menu, X, Bell, User } from "lucide-react"; // Importing icons

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className="flex items-center justify-between w-full px-16 py-4 text-white bg-gray-900 border-b border-gray-800 shadow-md">
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
          {/* Stylish underline effect for hover and active */}
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
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full px-8 py-6 text-white bg-gray-900 md:hidden">
          <a
            href="/"
            className="block mb-4 text-base font-medium text-gray-300 hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="/about"
            className="block mb-4 text-base font-medium text-gray-300 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="/portfolio"
            className="block mb-4 text-base font-medium text-gray-300 hover:text-blue-500"
          >
            Portfolio
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
