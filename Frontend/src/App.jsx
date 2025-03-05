import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/index";
import "./index.css";

function App() {
  // Load dark mode state from local storage
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");

    // Apply the theme to <html>
    document.documentElement.classList.toggle("dark", newMode);
  };

  // Apply theme on load
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <div className={`${isDarkMode ? "dark" : ""}`}>
        {/* Pass toggleDarkMode to AppRoutes */}
        <Routes>
          <Route
            path="/*"
            element={<AppRoutes toggleDarkMode={toggleDarkMode} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
