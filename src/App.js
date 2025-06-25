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
  const isMainPage = location.pathname.replace(/\/$/, "") === "/yoominju";

  // 오직 정확히 /work 경로일 때만 true (WorkDetail 포함 안함)
  const isExactWorkPage = location.pathname === "/work";

  return (
    <div className={`app-container ${isExactWorkPage ? "work-min-height" : ""}`}>
      {!isMainPage && <NavBar />}
      <div className="routes-wrapper">
        <Routes>
          <Route path="/yoominju" element={<Main />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {!isMainPage && <Footer />}
    </div>
  );
}
