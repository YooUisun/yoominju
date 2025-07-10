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

    if (!container || !magnifier) {
      return;
    }

    const zoom = 2; // 확대 배율
    // ✅ 이미지 경로 수정: process.env.PUBLIC_URL 제거하고 '../' 사용
    const imgSrc = "../img/MainBackground.webp"; 
    
    // 돋보기 배경 이미지 설정 (이 부분은 이미지 로드 후 다시 설정됩니다)
    magnifier.style.backgroundImage = `url(${imgSrc})`;
    magnifier.style.backgroundRepeat = "no-repeat";

    // 이미지 자연 크기 얻기
    const img = new Image();
    img.src = imgSrc;

    img.onload = () => {
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;

      if (naturalWidth === 0 || naturalHeight === 0) {
        console.error("Image natural dimensions are 0. Magnifier might not work.");
        return; // 크기가 0이면 로직 실행 중단
      }

      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // 마우스가 컨테이너 안에 있는지 확인
        if (
          mouseX >= 0 && 
          mouseY >= 0 && 
          mouseX <= rect.width && 
          mouseY <= rect.height 
        ) {
          if (!showMagnifier) { 
            setShowMagnifier(true);
          }

          const magnifierWidth = magnifier.offsetWidth;
          const magnifierHeight = magnifier.offsetHeight;
          
          if (magnifierWidth === 0 || magnifierHeight === 0) {
              console.warn("Magnifier dimensions are 0. Check CSS for .magnifier.");
              return; // 돋보기 크기가 0이면 계산 중단
          }

          const left = mouseX - magnifierWidth / 2;
          const top = mouseY - magnifierHeight / 2;

          const bgX = -(mouseX / rect.width) * naturalWidth * zoom + magnifierWidth / 2;
          const bgY = -(mouseY / rect.height) * naturalHeight * zoom + magnifierHeight / 2;

          magnifier.style.left = `${left}px`;
          magnifier.style.top = `${top}px`;
          magnifier.style.backgroundSize = `${naturalWidth * zoom}px ${naturalHeight * zoom}px`;
          magnifier.style.backgroundPosition = `${bgX}px ${bgY}px`;
        } else {
          if (showMagnifier) { 
            setShowMagnifier(false);
          }
        }
      };

      const handleMouseLeave = () => {
        setShowMagnifier(false);
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      // 클린업 함수 (컴포넌트 언마운트 시 이벤트 리스너 제거)
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    img.onerror = () => {
        console.error("Failed to load image:", imgSrc); // 이미지 로드 실패 시 에러 로그
    };

  }, []); 

  return (
    <div
      ref={containerRef}
      className="main-container"
      onClick={handleClick}
      style={{
        // ✅ 이미지 경로 수정: process.env.PUBLIC_URL 제거하고 '../' 사용
        backgroundImage: `url('../img/MainBackground.webp')`, 
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