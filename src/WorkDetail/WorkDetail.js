// src/Work/WorkDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import "./WorkDetail.css";

const workData = [
  {
    id: 1,
    title:
      "Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin",
    year: "2024",
    gallery: [
      {
        src: "/img/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024/1.webp",
      },
      {
        src: "/img/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024/2.webp",
      },
      {
        src: "/img/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024/3.webp",
      },
      {
        src: "/img/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024/4.webp",
      },
      {
        src: "/img/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024/5.webp",
      },
      {
        src: "/img/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024/6.webp",
      },
    ],
  },

  {
    id: 2,
    title: "Sorgenkissen",
    year: "2024",
    gallery: [
      { src: "/img/Sorgenkissen/1.mov" },
      { src: "/img/Sorgenkissen/2.webp" },
      { src: "/img/Sorgenkissen/3.webp" },
      { src: "/img/Sorgenkissen/4.webp" },
      { src: "/img/Sorgenkissen/5.webp" },
      { src: "/img/Sorgenkissen/6.mov" },
      { src: "/img/Sorgenkissen/7.webp" },
    ],
  },

  {
    id: 3,
    title:
      "나를 담는 모든 동그라미들을 위하여,\n너를 담을 내 동그라미들을 위하여\n(For all the circles that hold me,\nfor my circles that will hold you)",
    year: "2024",
    gallery: [
      {
        src: "/img/For all the circles that hold me, for my circles that will hold you/1.mp4",
      },
      {
        src: "/img/For all the circles that hold me, for my circles that will hold you/2.webp",
      },
      {
        src: "/img/For all the circles that hold me, for my circles that will hold you/3.webp",
      },
      {
        src: "/img/For all the circles that hold me, for my circles that will hold you/4.webp",
      },
      {
        src: "/img/For all the circles that hold me, for my circles that will hold you/5.webp",
      },
      {
        src: "/img/For all the circles that hold me, for my circles that will hold you/6.webp",
      },
      {
        src: "/img/For all the circles that hold me, for my circles that will hold you/7.webp",
      },
    ],
  },

  {
    id: 4,
    title: "1st Seoul International Fireworks Festival",
    year: "2024",
    gallery: [
      // { src: "/img/1st Seoul International Fireworks Festival/1.mp4" }, // 동영상 추가 예정 아직 ㄴㄴ
      { src: "/img/1st Seoul International Fireworks Festival/2.webp" },
      { src: "/img/1st Seoul International Fireworks Festival/3.webp" },
    ],
  },
  {
    id: 5,
    title:
      "Peoples - Sie schweben leicht, setzen sich dann ab und werden schwer",
    year: "2024",
    gallery: [
      { src: "/img/ppl/1.webp" },
      { src: "/img/ppl/2.webp" },
      { src: "/img/ppl/3.webp" },
      { src: "/img/ppl/4.webp" },
      { src: "/img/ppl/5.webp" },
      { src: "/img/ppl/6.webp" },
      { src: "/img/ppl/7.webp" },
      { src: "/img/ppl/8.webp" },
    ],
  },
  {
    id: 6,
    title: "Cup - Sie schweben leicht, setzen sich dann ab und werden schwer",
    year: "2024",
    gallery: [
      { src: "/img/cup/1.webp" },
      { src: "/img/cup/2.webp" },
      { src: "/img/cup/3.webp" },
      { src: "/img/cup/4.webp" },
      { src: "/img/cup/5.webp" },
      { src: "/img/cup/6.webp" },
      { src: "/img/cup/7.webp" },
      { src: "/img/cup/8.webp" },
      { src: "/img/cup/9.webp" },
      { src: "/img/cup/10.webp" },
      { src: "/img/cup/11.webp" },
      { src: "/img/cup/12.webp" },
      { src: "/img/cup/13.webp" },
    ],
  },
  {
    id: 7,
    title: "Joyfulling waiting 13 Crackle by 1, 2",
    year: "2023",
    gallery: [{ src: "/img/Joyfulling waiting 13 Crackle by 1, 2/1.webp" }],
  },
  {
    id: 8,
    title: "1, 2",
    year: "2023",
    gallery: [
      { src: "/img/1,2/1.webp" },
      { src: "/img/1,2/2.webp" },
      { src: "/img/1,2/3.webp" },
      { src: "/img/1,2/4.webp" },
      { src: "/img/1,2/5.webp" },
      { src: "/img/1,2/6.webp" },
      { src: "/img/1,2/7.webp" },
      { src: "/img/1,2/8.webp" },
      { src: "/img/1,2/9.webp" },
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
        <h2 className="detail-title">
          {item.title.split("\n").map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </h2>
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
