import React from "react";
import { useParams } from "react-router-dom";
import "./PwwibDetail.css";

const pwwibData = [
  {
    id: 1,
    slides: [
      process.env.PUBLIC_URL + "/img/PWWIBDetail/1.webp",
    ],
  },
];

export default function PwwibDetail() {
  const { id } = useParams();
  const item = pwwibData.find((w) => w.id === parseInt(id, 10));

  if (!item) return <div>게시물을 찾을 수 없습니다.</div>;

  return (
    <div className="pwwib-detail-page">
      <div className="pwwib-detail-inner">
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
    </div>
  );
}
