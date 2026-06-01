import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./PwwibDetail.css";

const pwwibData = [
  {
    id: 1,
    slides: [
      process.env.PUBLIC_URL + "/img/PWWIBDetail/1.webp",
      process.env.PUBLIC_URL + "/img/PWWIBDetail/2.webp",
      process.env.PUBLIC_URL + "/img/PWWIBDetail/3.webp",
      process.env.PUBLIC_URL + "/img/PWWIBDetail/4.webp",
      process.env.PUBLIC_URL + "/img/PWWIBDetail/5.webp",
      process.env.PUBLIC_URL + "/img/PWWIBDetail/6.webp",
    ],
  },
];

export default function PwwibDetail() {
  const { id } = useParams();
  const item = pwwibData.find((w) => w.id === parseInt(id, 10));
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  if (!item) return <div>게시물을 찾을 수 없습니다.</div>;

  const prev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };
  const next = () => {
    if (current < item.slides.length - 1) setCurrent((c) => c + 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  };

  return (
    <div className="pwwib-detail-page">
      <div className="pwwib-slide-container">
        {current > 0 && (
          <button className="pwwib-arrow left" onClick={prev}>
            ‹‹
          </button>
        )}
        <div
          className="pwwib-slide-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {item.slides.map((src, idx) => (
            <div key={idx} className="pwwib-slide">
              <img
                src={src}
                alt={`slide ${idx + 1}`}
                className="pwwib-slide-img"
              />
            </div>
          ))}
        </div>
        {current < item.slides.length - 1 && (
          <button className="pwwib-arrow right" onClick={next}>
            ››
          </button>
        )}
      </div>
    </div>
  );
}
