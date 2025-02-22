import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landingpage";
import LoginRegisterPage from "../pages/LoginRegisterPage";
import Courses from "../pages/Courses";
import News from "../pages/News";
import Contact from "../pages/Contact";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginRegisterPage />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/News" element={<News />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRoutes;
