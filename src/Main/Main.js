// src/Main/Main.js
import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Work from '../Work/Work';
import About from '../About/About';
import Contact from '../Contact/Contact';
import './Main.css';

// 공통 네비게이션과 푸터를 포함하는 레이아웃 컴포넌트
function Layout() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <h1 className="logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              YOOMINJU
            </Link>
          </h1>
          <nav>
            <ul className="nav-list">
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 각 페이지 내용은 Outlet으로 렌더링 */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

// 홈(메인) 페이지 컴포넌트
function Home() {
  const images = [
    { label: 'Performances, Projects', src: '/img/Sample.webp' },
    { label: 'Etc.', src: '/img/Sample.webp' },
  ];

  return (
    <div className="app">
      <div className="hero"></div>
      <section className="work-section">
        {images.map((item, index) => (
          <div
            key={index}
            className="horizontal-item"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.src})` }}
          >
            <div className="overlay-text">{item.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>  {/* 레이아웃 경로 */}
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}