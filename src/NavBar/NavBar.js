import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => currentPath === path;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="nav-container">
        <h1 className="logo">
          <Link to="/" className="logo-link">
            yoominju
          </Link>
        </h1>

        {isMobile && (
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        )}

        <nav>
          <ul className={`nav-list ${isMobile && menuOpen ? "active" : ""}`}>
            <li>
              <Link
                to="/work"
                className={isActive("/work") ? "active-nav-link" : ""}
                onClick={() => setMenuOpen(false)}
              >
                WORKS
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className={isActive("/news") ? "active-nav-link" : ""}
                onClick={() => setMenuOpen(false)}
              >
                NEWS
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isActive("/about") ? "active-nav-link" : ""}
                onClick={() => setMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isActive("/contact") ? "active-nav-link" : ""}
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
