import React from "react";
import { Link } from "react-router-dom";
import "./Pwwib.css";

const pwwibData = [
  {
    id: 3,
    src: process.env.PUBLIC_URL + "/img/PWWIB/3.webp",
    title: "정다혜",
    info: "작가 지망생 · 아티스트 어시스턴트",
  },
  {
    id: 2,
    src: process.env.PUBLIC_URL + "/img/PWWIB/2.webp",
    title: "성소영",
    info: [
      "온라인 독일어 학원 '뿌스빠센' 운영",
      "과학기술사 석사생 · 도서관 사서",
    ],
  },
  {
    id: 1,
    src: process.env.PUBLIC_URL + "/img/PWWIB/1.webp",
    title: "류지민",
    info: "요리사 및 총괄 매니저",
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
          <p className="pwwib-info">
            {Array.isArray(item.info)
              ? item.info.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < item.info.length - 1 && <br />}
                  </span>
                ))
              : item.info}
          </p>
        </Link>
      ))}
    </section>
  );
}