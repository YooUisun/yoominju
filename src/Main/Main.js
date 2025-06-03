import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.querySelector(".main-container");
    const mosaic = document.createElement("div");
    mosaic.className = "mosaic-overlay";

    // ✅ JS에서 이미지 경로 지정
    mosaic.style.backgroundImage = "url('/yoominju/img/MainBackground.webp')";
    container.appendChild(mosaic);

    const moveHandler = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mosaic.style.left = `${x}px`;
      mosaic.style.top = `${y}px`;
      mosaic.style.backgroundPosition = `-${x}px -${y}px`;
    };

    container.addEventListener("mousemove", moveHandler);

    return () => {
      container.removeEventListener("mousemove", moveHandler);
      mosaic.remove();
    };
  }, []);

  const handleClick = () => {
    navigate("/work");
  };

  return (
    <div
      className="main-container"
      onClick={handleClick}
      style={{
        backgroundImage: `url('/yoominju/img/MainBackground.webp')`,
      }}
    />
  );
};

export default Main;
