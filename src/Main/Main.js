import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const magnifierRef = useRef(null);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleClick = () => {
    navigate("/work");
  };

  useEffect(() => {
    const container = containerRef.current;
    const magnifier = magnifierRef.current;
    if (!container || !magnifier) return;

    const zoom = 2; // 확대 배율
    // ✅ 이미지 경로 수정: /yoominju/ 제거
    const imgSrc = "/img/MainBackground.webp"; 

    // 이미지 자연 크기 얻기
    const img = new Image();
    img.src = imgSrc;

    img.onload = () => {
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;

      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (
          mouseX > 0 &&
          mouseY > 0 &&
          mouseX < rect.width &&
          mouseY < rect.height
        ) {
          setShowMagnifier(true);

          const magnifierWidth = magnifier.offsetWidth;
          const magnifierHeight = magnifier.offsetHeight;

          const left = mouseX - magnifierWidth / 2;
          const top = mouseY - magnifierHeight / 2;

          const bgX = -(mouseX / rect.width) * naturalWidth * zoom + magnifierWidth / 2;
          const bgY = -(mouseY / rect.height) * naturalHeight * zoom + magnifierHeight / 2;

          magnifier.style.left = `${left}px`;
          magnifier.style.top = `${top}px`;
          magnifier.style.backgroundSize = `${naturalWidth * zoom}px ${naturalHeight * zoom}px`;
          magnifier.style.backgroundPosition = `${bgX}px ${bgY}px`;
        } else {
          setShowMagnifier(false);
        }
      };

      const handleMouseLeave = () => {
        setShowMagnifier(false);
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="main-container"
      onClick={handleClick}
      style={{
        // ✅ 이미지 경로 수정: /yoominju/ 제거
        backgroundImage: `url('/img/MainBackground.webp')`, 
      }}
    >
      <div
        ref={magnifierRef}
        className="magnifier"
        style={{ display: showMagnifier ? "block" : "none" }}
      />
    </div>
  );
};

export default Main;