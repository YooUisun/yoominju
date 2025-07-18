import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null); 

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
      <h1 className="main-title">yoominju</h1>

    </div>
  );
};

export default Main;