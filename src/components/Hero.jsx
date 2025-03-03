import { useState, useEffect } from "react";
import { Github, Twitter, Sun, Moon, Menu, X, Thermometer } from "lucide-react";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fetch weather data from the API
  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=548ef4a386a04e1e868235551250203&q=auto:ip"
      );
      const data = await response.json();
      if (data && data.current) {
        setWeather(data);
      } else {
        console.error("Weather data not found");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch weather data on page load
    fetchWeather();
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl flex items-center justify-between py-3 px-6 rounded-2xl shadow-lg border ${
          isDarkMode
            ? "bg-gray-900 border-gray-800 text-white"
            : "bg-white border-gray-200 text-gray-900"
        } transition-all duration-300`}
      >
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide">{"</>"}</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-lg font-medium hover:text-blue-500 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg font-medium hover:text-blue-500 transition"
          >
            Courses
          </a>
          <a
            href="#"
            className="text-lg font-medium hover:text-blue-500 transition"
          >
            FAQs
          </a>
          <a
            href="#"
            className="text-lg font-medium hover:text-blue-500 transition"
          >
            Services
          </a>
        </div>

        {/* Right Side: Weather, Social Icons + Dark Mode Toggle */}
        <div className="flex items-center space-x-6">
          {/* Weather Information */}
          {loading ? (
            <div className="flex items-center space-x-2">
              <Thermometer size={20} />
              <p>Loading...</p>
            </div>
          ) : weather && weather.current ? (
            <div className="flex items-center space-x-2">
              <Thermometer size={20} />
              <p>{weather.current.temp_c}°C</p>
              <p>{weather.current.condition.text}</p>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Thermometer size={20} />
              <p>Error</p>
            </div>
          )}

          {/* Social Icons */}
          <a
            href="https://github.com"
            className="hover:text-blue-500 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-blue-500 transition"
          >
            <Twitter size={20} />
          </a>
          <button
            onClick={toggleDarkMode}
            className="hover:text-blue-500 transition"
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-gray-950 dark:bg-gray-900 shadow-lg p-6 text-center space-y-4">
          <a
            href="#"
            className="block text-lg font-medium hover:text-blue-500 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-lg font-medium hover:text-blue-500 transition"
          >
            Courses
          </a>
          <a
            href="#"
            className="block text-lg font-medium hover:text-blue-500 transition"
          >
            FAQs
          </a>
          <a
            href="#"
            className="block text-lg font-medium hover:text-blue-500 transition"
          >
            Services
          </a>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-16">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1
            className={`text-4xl md:text-6xl font-bold leading-tight ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Learn & Build Your Future in Tech
          </h1>
          <p className="mt-6 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
            Start your journey into programming and technology with our online
            courses. Gain real-world skills to kickstart your career!
          </p>
          <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="#"
              className="px-6 py-3 text-lg font-medium rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
            >
              Start Learning
            </a>
            <a
              href="#"
              className="px-6 py-3 text-lg font-medium rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Banner Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/banner.png"
            alt="Online Learning"
            className="w-full max-w-lg rounded-lg"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        className={`flex flex-col transition-colors duration-300 ${
          isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            We offer the best online courses with experienced instructors,
            real-world projects, and a supportive community to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="w-60">
              <h3 className="text-xl font-semibold mb-4">
                Experienced Instructors
              </h3>
              <p>Learn from professionals with years of industry experience.</p>
            </div>
            <div className="w-60">
              <h3 className="text-xl font-semibold mb-4">
                Real-World Projects
              </h3>
              <p>Work on projects that mimic real-world scenarios.</p>
            </div>
            <div className="w-60">
              <h3 className="text-xl font-semibold mb-4">
                Supportive Community
              </h3>
              <p>Join a community of learners and get the support you need.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div
        className={`min-h-screen flex flex-col transition-colors duration-300 ${
          isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Plans</h2>
          <div className="flex justify-center gap-6">
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
              <p className="text-xl mb-4">$19/month</p>
              <p className="mb-4">
                Access to basic courses and learning materials.
              </p>
              <a
                href="#"
                className="bg-blue-500 text-white px-6 py-2 rounded-full"
              >
                Get Started
              </a>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
              <p className="text-xl mb-4">$49/month</p>
              <p className="mb-4">
                Access to all courses, including premium content.
              </p>
              <a
                href="#"
                className="bg-blue-500 text-white px-6 py-2 rounded-full"
              >
                Get Started
              </a>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-2xl font-semibold mb-4">Enterprise Plan</h3>
              <p className="text-xl mb-4">$99/month</p>
              <p className="mb-4">
                Custom solutions and group training for your organization.
              </p>
              <a
                href="#"
                className="bg-blue-500 text-white px-6 py-2 rounded-full"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg">
            &copy; 2025 TechCourses. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com"
              className="hover:text-blue-500 transition"
            >
              Github
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-500 transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
