import React from "react";
import { Link } from "react-router-dom";
import "./Pwwib.css";

const pwwibData = [
  {
    id: 1,
    src: process.env.PUBLIC_URL + "/img/PWWIB/1.webp",
    title: "title 1",
    info: "2026, editorial, portraits",
  },
  {
    id: 2,
    src: process.env.PUBLIC_URL + "/img/PWWIB/2.webp",
    title: "title 2",
    info: "2026, editorial, portraits",
  },
  {
    id: 3,
    src: process.env.PUBLIC_URL + "/img/PWWIB/3.webp",
    title: "title 3",
    info: "2026, editorial, portraits",
  },
];

export default function Pwwib() {
  return (
    <section className="pwwib-section">
      {pwwibData.map((item) => (
        <Link to={`/pwwib/${item.id}`} key={item.id} className="pwwib-item">
          <div className="pwwib-image-wrapper">
            <img src={item.src} alt={item.title} className="pwwib-image" />
          </div>
          <p className="pwwib-title">{item.title}</p>
          <p className="pwwib-info">{item.info}</p>
        </Link>
      ))}
    </section>
  );
}
