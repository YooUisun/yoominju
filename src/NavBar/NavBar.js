import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // 활성화 여부 판단 함수
  const isActive = (path) => {
    // 정확한 경로 매칭 (예: /work, /news 등)
    return currentPath === path;
  };

  return (
    <header className="header">
      <div className="nav-container">
        <h1 className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            YOO MIN JU
          </Link>
        </h1>
        <nav>
          <ul className="nav-list">
            <li>
              <Link
                to="/work"
                className={isActive("/work") ? "active-nav-link" : ""}
              >
                WORK
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className={isActive("/news") ? "active-nav-link" : ""}
              >
                NEWS
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isActive("/about") ? "active-nav-link" : ""}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isActive("/contact") ? "active-nav-link" : ""}
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
