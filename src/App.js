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
  // isMainPage 로직 변경: 루트 경로('/')일 때가 메인 페이지
  const isMainPage = location.pathname.replace(/\/$/, "") === ""; // 또는 location.pathname === "/"

  // 오직 정확히 /work 경로일 때만 true (WorkDetail 포함 안함)
  const isExactWorkPage = location.pathname === "/work";

  return (
    <div className={`app-container ${isExactWorkPage ? "work-min-height" : ""}`}>
      {!isMainPage && <NavBar />}
      <div className="routes-wrapper">
        <Routes>
          {/* ✅ Main 컴포넌트의 path를 '/'로 변경 */}
          <Route path="/" element={<Main />} />
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