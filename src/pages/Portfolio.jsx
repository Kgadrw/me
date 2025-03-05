import React from "react";
import Navbar from "../components/Navbar";
import Project from "../components/Portfolio/Projects";
import Footer from "../components/Footer";
import Plan from "../components/Plans";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Project />
      <Plan />
      <Footer />
    </div>
  );
};

export default Portfolio;
