import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Work from "../Work/Work";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const isMobile = window.innerWidth <= 500;

  if (isMobile) {
    return <Work />;
  }

  const handleClick = () => {
    navigate("/work");
  };

  return (
    <div
      ref={containerRef}
      className="main-container"
      onClick={handleClick}
      style={{
        backgroundImage: `url('../img/MainBackground.webp')`,
      }}
    >
      <h1 className="main-title"></h1>
    </div>
  );
};

export default Main;