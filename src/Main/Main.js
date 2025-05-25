// src/Main/Main.js
import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Work from '../Work/Work';
import WorkDetail from '../WorkDetail/WorkDetail';
import About from '../About/About';
import Contact from '../Contact/Contact';
import News from '../News/News';
import '../Main/Main.css';

// ✅ Home 컴포넌트를 위로 이동
function Home() {
  const images = [
    { label: 'Projects', src: '/img/Sample.webp', to: '/work' },
    { label: 'Document', src: '/img/Sample.webp', to: '/about' },
  ];

  return (
    <div className="app">
      <div className="hero"></div>
      <section className="work-section">
        {images.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className="horizontal-item-link"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="horizontal-item"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.src})` }}
            >
              <div className="overlay-text">{item.label}</div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

function Layout() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <h1 className="logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              YOO MIN JU
            </Link>
          </h1>
          <nav>
            <ul className="nav-list">
              <li><Link to="/work">WORK</Link></li>
              <li><Link to="/news">NEWS</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:id" element={<WorkDetail />} />
        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
