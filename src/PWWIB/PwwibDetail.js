import React from "react";
import { useParams } from "react-router-dom";
import "./PwwibDetail.css";

const pwwibData = [
  {
    id: 1,
    title: "title 1",
    info: "2026, editorial, portraits",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/PWWIB/1/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/PWWIB/1/2.webp" },
    ],
  },
  {
    id: 2,
    title: "title 2",
    info: "2026, editorial, portraits",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/PWWIB/2/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/PWWIB/2/2.webp" },
    ],
  },
  {
    id: 3,
    title: "title 3",
    info: "2026, editorial, portraits",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/PWWIB/3/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/PWWIB/3/2.webp" },
    ],
  },
];

export default function PwwibDetail() {
  const { id } = useParams();
  const item = pwwibData.find((w) => w.id === parseInt(id, 10));

  if (!item) return <div>게시물을 찾을 수 없습니다.</div>;

  return (
    <div className="pwwib-detail-wrapper">
      <div className="pwwib-detail-header">
        <h2 className="pwwib-detail-title">{item.title}</h2>
        <p className="pwwib-detail-info">{item.info}</p>
      </div>
      <div className="pwwib-detail-gallery">
        {item.gallery.map((entry, idx) => (
          <div key={idx} className="pwwib-detail-block">
            <img
              src={entry.src}
              alt={`${item.title} ${idx + 1}`}
              className="pwwib-detail-image"
            />
            {entry.caption && (
              <p className="pwwib-detail-caption">{entry.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
