import React from "react";
import { Routes, Route } from "react-router-dom";
import LowerNav from "../lowerNav/LowerNav";
import UpperNav from "../upperNav/UpperNav";
import About from "../../pages/About";
import MainContact from "../../pages/MainContact";

const NavBar = () => {
  return (
    <>
      <UpperNav />
      <LowerNav />
      <Routes>
        {/* Use simple path names */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<MainContact />} />
      </Routes>
    </>
  );
};

export default NavBar;
