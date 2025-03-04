import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Courses from "../pages/Courses";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
};

export default AllRoutes;
