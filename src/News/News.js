// src/News/News.js
import React from "react";
import { Link } from "react-router-dom";
import "./News.css";

const newsItem = {
  id: 1,
  title: "Rundgang",
  date: "July 18 – July 20, 2025",
  images: [
    "/img/Exhibition1.webp",
    "/img/Exhibition2.webp",
    "/img/Exhibition3.webp",
  ],
};

export default function News() {
  return (
    <section id="about" className="about-section">
      <h2 className="exhibition-label">News</h2>

      {/* 🔥 이미지 3개 가로 배치 */}
      <div className="exhibition-row">
        {newsItem.images.map((img, index) => (
          <Link
            className="exhibition-image-wrapper"
            key={index}
          >
            <img
              src={process.env.PUBLIC_URL + img}
              alt={`${newsItem.title} ${index + 1}`}
              className="exhibition-image"
            />
          </Link>
        ))}
      </div>

      {/* 🔥 제목과 날짜는 아래 한 번만 */}
      <h3 className="exhibition-title">{newsItem.title}</h3>
      <p className="exhibition-date">{newsItem.date}</p>
    </section>
  );
}
