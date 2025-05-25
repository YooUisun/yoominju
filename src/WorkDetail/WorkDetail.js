// src/Work/WorkDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./WorkDetail.css";

// Work.js와 동일한 데이터에 description, gallery 필드만 추가
const workData = [
  {
    id: 1,
    title: "민주의 여행",
    year: "2024",
    location: "Seoul",
    image: "/img/Sample.webp",
    description:
      "민주 작가의 첫 서울 프로젝트. 프로세스와 인사이트 설명을 여기에 작성하세요.",
    gallery: [
      "/img/Sample_detail1.jpg",
      "/img/Sample_detail2.jpg",
      "/img/Sample_detail3.jpg",
    ],
  },
  {
    id: 2,
    title: "의선의 여행",
    year: "2023",
    location: "Busan",
    image: "/img/Sample2.jpg",
    description:
      "의선 작가의 부산 프로젝트. 주요 키워드와 해설을 여기에 작성하세요.",
    gallery: ["/img/Sample2_detail1.jpg", "/img/Sample2_detail2.jpg"],
  },
  // ... 총 15개씩 동일하게 추가
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

      <div className="detail-main-image">
        <img src={process.env.PUBLIC_URL + item.image} alt={item.title} />
      </div>

      <div className="detail-gallery">
        {item.gallery.map((src, idx) => (
          <div key={idx} className="detail-thumb">
            <img
              src={process.env.PUBLIC_URL + src}
              alt={`${item.title} detail ${idx + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="detail-description">
        <p>{item.description}</p>
      </div>
    </div>
  );
}
