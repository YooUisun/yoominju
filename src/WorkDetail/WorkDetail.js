// src/Work/WorkDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import "./WorkDetail.css";

const workData = [
  {
    id: 1,
    title: "Schritte²",
    year: "2024",
    gallery: [
      { src: "/img/Schritte²/1.MOV" },
      { src: "/img/Schritte²/2.webp" },
      { src: "/img/Schritte²/3.webp" },
      { src: "/img/Schritte²/4.webp" },
      { src: "/img/Schritte²/5.MOV" },
      { src: "/img/Schritte²/6.webp" }
    ],
  },
  {
    id: 2,
    title: "Words",
    year: "2023",
    gallery: [
      { src: "/img/Sample2_detail1.jpg", text: "ID 2 작품 설명 1입니다." },
      { src: "/img/Sample2_detail2.jpg", text: "ID 2작품 설명 2입니다." },
    ],
  },
  // ... 나머지도 같은 형식으로 이어서 작성
];

export default function WorkDetail() {
  const { id } = useParams();
  const item = workData.find((w) => w.id === parseInt(id, 10));

  return (
    <div className="detail-wrapper">
      <div className="detail-header">
        <h2 className="detail-title">{item.title}</h2>
        <p className="detail-meta">
          {item.year} {item.location}
        </p>
      </div>

      <div className="detail-gallery-vertical">
        {item.gallery.map((entry, idx) => (
          <div key={idx} className="detail-block">
            <div className="detail-thumb">
              {entry.src.toLowerCase().endsWith(".mov") ||
              entry.src.toLowerCase().endsWith(".mp4") ? (
                <video controls width="100%">
                  <source
                    src={process.env.PUBLIC_URL + entry.src}
                    type="video/mp4"
                  />
                  브라우저가 video 태그를 지원하지 않습니다.
                </video>
              ) : (
                <img
                  src={process.env.PUBLIC_URL + entry.src}
                  alt={`${item.title} detail ${idx + 1}`}
                />
              )}
            </div>
            <div className="detail-description">
              <p>{entry.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
