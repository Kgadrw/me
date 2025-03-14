import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Services";
import Course from "../components/Courses";
import About from "../components/About";
import Footer from "../components/Footer";
import Features from "../components/Feature";
import Plan from "../components/Plans";
import Testimonial from "../components/Testmonial";
import Contact from "../components/Contact";
import Team from "../components/Team";

const Landingpage = () => {
  return (
    <div className="no-scrollbar">
      <Navbar />
      <Hero />
      <Features />
      <Course />
      <Service />
      <About />
      <Footer />
      <Team />
    </div>
  );
};

export default Landingpage;
