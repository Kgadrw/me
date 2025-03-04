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

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />

      <About />
      <Course />
      <Service />
      <Plan />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Landingpage;
