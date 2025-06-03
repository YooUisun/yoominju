// src/App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Main from "./Main/Main";
import Work from "./Work/Work";
import WorkDetail from "./WorkDetail/WorkDetail";
import About from "./About/About";
import Contact from "./Contact/Contact";
import News from "./News/News";

import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

import "./App.css";

export default function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <>
      {!isMainPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isMainPage && <Footer />}
    </>
  );
}
