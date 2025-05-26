// src/App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Main from "./Main/Main";
import SubMain from "./SubMain/SubMain";
import Work from "./Work/Work";
import WorkDetail from "./WorkDetail/WorkDetail";
import About from "./About/About";
import Contact from "./Contact/Contact";
import News from "./News/News";

import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";  // Footer import 추가

import "./App.css";

export default function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <>
      {!isMainPage && <NavBar />} {/* Main 제외한 페이지에만 NavBar */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="sub" element={<SubMain />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:id" element={<WorkDetail />} />
        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      {/* Main 페이지가 아닐 때만 Footer 보여주기 */}
      {!isMainPage && <Footer />}
    </>
  );
}
