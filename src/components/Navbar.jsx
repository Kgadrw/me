import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const translations = {
    English: {
      home: "Home",
      world: "World",
      politics: "Politics",
      technology: "Technology",
      sports: "Sports",
      contact: "Contact",
    },
    Kinyarwanda: {
      home: "Ahabanza",
      world: "Isi",
      politics: "Politiki",
      technology: "Ikoranabuhanga",
      sports: "Imikino",
      contact: "Twandikire",
    },
    French: {
      home: "Accueil",
      world: "Monde",
      politics: "Politique",
      technology: "Technologie",
      sports: "Sports",
      contact: "Contact",
    },
  };

  const handleLanguageChange = (newLanguage) => setLanguage(newLanguage);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? "bg-gray-950 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-blue-600"
          >
            K.ent
          </Link>
        </div>

        <div className="md:hidden">
          <button
            className="text-gray-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-gray-950 shadow-lg">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
              >
                {translations[language].home}
              </Link>
              <Link
                to="/world"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
              >
                {translations[language].world}
              </Link>
              <Link
                to="/politics"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
              >
                {translations[language].politics}
              </Link>
              <Link
                to="/technology"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
              >
                {translations[language].technology}
              </Link>
              <Link
                to="/sports"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
              >
                {translations[language].sports}
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
              >
                {translations[language].contact}
              </Link>
              <div className="border-t border-gray-700 mt-2">
                <button
                  onClick={() => handleLanguageChange("English")}
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                    alt="English"
                    className="w-6 h-4 mr-2"
                  />
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange("Kinyarwanda")}
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Rwanda.svg/2560px-Flag_of_Rwanda.svg.png"
                    alt="Kinyarwanda"
                    className="w-6 h-4 mr-2"
                  />
                  Kinyarwanda
                </button>
                <button
                  onClick={() => handleLanguageChange("French")}
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png"
                    alt="French"
                    className="w-6 h-4 mr-2"
                  />
                  French
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
