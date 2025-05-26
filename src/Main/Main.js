import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";  // CSS 임포트

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sub");
  };

  return (
    <div
      className="main-container"
      onClick={handleClick}
      style={{
        backgroundImage: `url('/yoominju/img/Exhibition1.webp')`,
      }}
    />
  );
};

export default Main;
