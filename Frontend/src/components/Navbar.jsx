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
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md py-5 px-8">
      <div className="flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" className="text-4xl font-extrabold text-blue-600">
            {"</>"}
          </a>
        </div>

        {/* Right Side: Contact Us Button and Mobile Menu Button */}
        <div className="flex items-center space-x-6">
          {/* Contact Us Button */}
          <a
            href="mailto:kalisagad05@gmail.com"
            className="text-base font-semibold text-white bg-blue-600 border border-blue-600 px-6 py-2 rounded-full transition-all hover:bg-blue-500 hover:border-blue-500"
          >
            Let's Talk
          </a>

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
          className="md:hidden absolute top-0 left-0 right-0 bg-white px-8 py-6 mt-16"
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-black text-lg font-medium hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-black text-lg font-medium hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#services"
              className="text-black text-lg font-medium hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-black text-lg font-medium hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
