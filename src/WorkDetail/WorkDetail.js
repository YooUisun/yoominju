// src/Work/WorkDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./WorkDetail.css";

const workData = [
  {
    id: 1,
    title: "18",
    year: "2024",
    location: "Seoul",
    gallery: [
      { src: "/img/18SubPic/1.webp", text: "작품 설명 1." },
      { src: "/img/18SubPic/2.webp", text: "작품 설명 2." },
      { src: "/img/18SubPic/3.webp", text: "작품 설명 3." },
      { src: "/img/18SubPic/4.webp", text: "작품 설명 4." },
      { src: "/img/18SubPic/5.webp", text: "작품 설명 5." },
      { src: "/img/18SubPic/7.webp", text: "작품 설명 6." },
    ],
  },
  {
    id: 2,
    title: "Words",
    year: "2023",
    location: "Busan",
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

  if (!item) {
    return (
      <div className="detail-wrapper">
        <Link to="/work" className="back-link">
          ← Back to Works
        </Link>
        <p>작품을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="detail-wrapper">
      <Link to="/work" className="back-link">
        ← Back to Works
      </Link>
      <div className="detail-header">
        <h2 className="detail-title">{item.title}</h2>
        <p className="detail-meta">
          {item.year} | {item.location}
        </p>
      </div>

      <div className="detail-gallery-vertical">
        {item.gallery.map((entry, idx) => (
          <div key={idx} className="detail-block">
            <div className="detail-thumb">
              <img
                src={process.env.PUBLIC_URL + entry.src}
                alt={`${item.title} detail ${idx + 1}`}
              />
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
