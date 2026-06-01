import React from "react";
import { Link } from "react-router-dom";
import "./Pwwib.css";

const pwwibData = [
  {
    id: 1,
    src: process.env.PUBLIC_URL + "/img/PWWIB/1.webp",
    title: "류지민",
    info: "요리사 및 총괄 매니저, OMONI Restaurant",
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
