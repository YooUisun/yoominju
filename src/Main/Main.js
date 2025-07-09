import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const magnifierRef = useRef(null);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleClick = () => {
    console.log("Main container clicked, navigating to /work"); // 클릭 이벤트 확인
    navigate("/work");
  };

  useEffect(() => {
    const container = containerRef.current;
    const magnifier = magnifierRef.current;

    console.log("useEffect running..."); // useEffect 실행 확인
    console.log("Container Ref:", container); // containerRef가 제대로 잡혔는지 확인
    console.log("Magnifier Ref:", magnifier); // magnifierRef가 제대로 잡혔는지 확인

    if (!container || !magnifier) {
      console.log("Container or Magnifier ref not found, returning.");
      return;
    }

    const zoom = 2; // 확대 배율
    const imgSrc = process.env.PUBLIC_URL + "/img/MainBackground.webp"; 
    
    console.log("Image Source (imgSrc):", imgSrc); // 이미지 소스 경로 확인

    // 돋보기 배경 이미지 설정 (이 부분은 이미지 로드 후 다시 설정됩니다)
    magnifier.style.backgroundImage = `url(${imgSrc})`;
    magnifier.style.backgroundRepeat = "no-repeat";

    // 이미지 자연 크기 얻기
    const img = new Image();
    img.src = imgSrc;

    img.onload = () => {
      console.log("Image loaded successfully!"); // ✅ 1. 이미지가 로드되는지 확인
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;
      console.log("Natural dimensions (width, height):", naturalWidth, naturalHeight); // ✅ 2. 이미지 실제 크기 확인

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
          mouseX >= 0 && // 0보다 크거나 같음
          mouseY >= 0 && // 0보다 크거나 같음
          mouseX <= rect.width && // 너비보다 작거나 같음
          mouseY <= rect.height // 높이보다 작거나 같음
        ) {
          if (!showMagnifier) { 
            console.log("Mouse entered container: Setting showMagnifier to true.");
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
            console.log("Mouse left container: Setting showMagnifier to false.");
            setShowMagnifier(false);
          }
        }
      };

      const handleMouseLeave = () => {
        console.log("Mouse left container (handleMouseLeave event).");
        setShowMagnifier(false);
      };

      // 이벤트 리스너 등록
      console.log("Adding mouse event listeners to container.");
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      // 클린업 함수 (컴포넌트 언마운트 시 이벤트 리스너 제거)
      return () => {
        console.log("Cleaning up event listeners.");
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    img.onerror = () => {
        console.error("Failed to load image:", imgSrc); // 이미지 로드 실패 시 에러 로그
    };

  }, []); // 의존성 배열 비어있음 - 컴포넌트 마운트 시 한 번만 실행

  console.log("Rendering Main component. Current showMagnifier state:", showMagnifier); // 렌더링 시 상태 확인

  return (
    <div
      ref={containerRef}
      className="main-container"
      onClick={handleClick}
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/img/MainBackground.webp')`, 
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