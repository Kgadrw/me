import React from "react";
import Hero from "../components/Hero";

const App = ({ toggleDarkMode }) => {
  return (
    <div>
      <Hero toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;
