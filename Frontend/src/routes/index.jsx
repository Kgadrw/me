import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landingpage";
import Portfolio from "../pages/Portfolio";
import AboutUs from "../pages/AboutUs";
import ModalPage from "../pages/Modal";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/modal" element={<ModalPage />} />
    </Routes>
  );
};

export default AllRoutes;
