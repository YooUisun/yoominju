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
      { src: "/img/Sorgenkissen/1.mp4" },
      { src: "/img/Sorgenkissen/2.webp" },
      { src: "/img/Sorgenkissen/3.webp" },
      { src: "/img/Sorgenkissen/4.webp" },
      { src: "/img/Sorgenkissen/5.webp" },
      { src: "/img/Sorgenkissen/6.mp4" },
      { src: "/img/Sorgenkissen/7.webp" },
    ],
  },

  {
    id: 3,
    title:
      "나를 담는 모든 동그라미들을 위하여,\n너를 담을 내 동그라미들을 위하여\n(For all the circles that hold me,\nfor my circles that will hold you)",
    year: "2024",
    gallery: [
      // {
      //   // src: "/img/For all the circles that hold me, for my circles that will hold you/1.mp4", // 용량 초과로 나중에 넣을 예정
      // },
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
  //첫 번째 줄 끝

  //두 번째 줄 시작
  {
    id: 9,
    title: "Words",
    year: "2023",
    gallery: [{ src: "/img/Words/1.webp" }],
  },
  {
    id: 10,
    title: "sch",
    year: "2023",
    gallery: [
      { src: "/img/sch/1.webp" },
      { src: "/img/sch/2.MP3" },
      { src: "/img/sch/3.MP3" },
      { src: "/img/sch/4.webp" },
    ],
  },
  {
    id: 11,
    title: "Inneres",
    year: "2023",
    gallery: [
      { src: "/img/Inneres/1.webp" },
      { src: "/img/Inneres/2.webp" },
      { src: "/img/Inneres/3.webp" },
      { src: "/img/Inneres/4.webp" },
      { src: "/img/Inneres/5.webp" },
      { src: "/img/Inneres/6.webp" },
      { src: "/img/Inneres/7.webp" },
      { src: "/img/Inneres/8.webp" },
      { src: "/img/Inneres/9.webp" },
    ],
  },
  {
    id: 12,
    title: "Re:Fusion",
    year: "2023",
    gallery: [
      { src: "/img/Re_Fusion/1.webp" },
      { src: "/img/Re_Fusion/2.webp" },
      { src: "/img/Re_Fusion/3.webp" },
      { src: "/img/Re_Fusion/4.webp" },
      { src: "/img/Re_Fusion/5.webp" },
      { src: "/img/Re_Fusion/6.webp" },
      { src: "/img/Re_Fusion/7.webp" },
      { src: "/img/Re_Fusion/8.webp" },
    ],
  },
  {
    id: 13,
    title: "진정한 행복 (True happiness)",
    year: "2022",
    gallery: [
      { src: "/img/True happiness/1.mp3" },
      { src: "/img/True happiness/2.mp3" },
      { src: "/img/True happiness/3.mp3" },
      { src: "/img/True happiness/4.mp4" },
      { src: "/img/True happiness/5.mp4" },
    ],
  },
  {
    id: 14,
    title: "die Spuren des Tages",
    year: "2022",
    gallery: [
      { src: "/img/die Spuren des Tages/1.webp" },
      { src: "/img/die Spuren des Tages/1-1.webp" },
      { src: "/img/die Spuren des Tages/1-2.mp4" },
      { src: "/img/die Spuren des Tages/1-3.webp" },
      { src: "/img/die Spuren des Tages/2.webp" },
      { src: "/img/die Spuren des Tages/4.webp" },
      { src: "/img/die Spuren des Tages/5.webp" },
      { src: "/img/die Spuren des Tages/6.webp" },
      { src: "/img/die Spuren des Tages/7.webp" },
      { src: "/img/die Spuren des Tages/8.webp" },
      { src: "/img/die Spuren des Tages/9.webp" },
      { src: "/img/die Spuren des Tages/10.webp" },
      { src: "/img/die Spuren des Tages/11.webp" },
      { src: "/img/die Spuren des Tages/12.webp" },
      { src: "/img/die Spuren des Tages/13.webp" },
      { src: "/img/die Spuren des Tages/14.webp" },
      { src: "/img/die Spuren des Tages/15.webp" },
      { src: "/img/die Spuren des Tages/16.webp" },
      { src: "/img/die Spuren des Tages/17.webp" },
      { src: "/img/die Spuren des Tages/18.webp" },
      { src: "/img/die Spuren des Tages/19.webp" },
      { src: "/img/die Spuren des Tages/20.webp" },
      { src: "/img/die Spuren des Tages/21.webp" },
      { src: "/img/die Spuren des Tages/22.webp" },
      { src: "/img/die Spuren des Tages/23.webp" },
      { src: "/img/die Spuren des Tages/24.webp" },
      { src: "/img/die Spuren des Tages/25.webp" },
      { src: "/img/die Spuren des Tages/26.webp" },
      { src: "/img/die Spuren des Tages/27.webp" },
      { src: "/img/die Spuren des Tages/28.webp" },
      { src: "/img/die Spuren des Tages/29.webp" },
      { src: "/img/die Spuren des Tages/30.webp" },
      { src: "/img/die Spuren des Tages/31.webp" },
      { src: "/img/die Spuren des Tages/32.webp" },
      { src: "/img/die Spuren des Tages/33.webp" },
    ],
  },
  {
    id: 15,
    title: "Butterbutterprojekt",
    year: "2020",
    gallery: [
      { src: "/img/Butterbutterprojekt/1.webp" },
      { src: "/img/Butterbutterprojekt/2.webp" },
    ],
  },
  {
    id: 16,
    title: "alles in butter",
    year: "2020",
    gallery: [
      { src: "/img/alles in butter/1.mp4" },
      { src: "/img/alles in butter/2.webp" },
      { src: "/img/alles in butter/3.webp" },
      { src: "/img/alles in butter/4.webp" },
      { src: "/img/alles in butter/5.webp" },
    ],
  },
  {
    id: 17,
    title: "sleeping promisses",
    year: "2022",
    gallery: [
      { src: "/img/sleeping promisses/1.webp" },
      { src: "/img/sleeping promisses/2.webp" },
    ],
  },
  {
    id: 18,
    title: "der Tag",
    year: "2022",
    gallery: [
      { src: "/img/der Tag/1.mp4" },
      { src: "/img/der Tag/2.webp" },
      { src: "/img/der Tag/3.webp" },
      { src: "/img/der Tag/4.webp" },
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
        {item.gallery.map((entry, idx) => {
          const src = entry.src?.toLowerCase();
          if (!src) return null;

          const isVideo = src.endsWith(".mov") || src.endsWith(".mp4");
          const isAudio = src.endsWith(".mp3");

          // 13번 id 진정한 행복 특별 언어 표시
          let languageLabel = "";

          if (item.id === 10) {
            // 기존 10번 id sch - 2.MP3: Korean, 3.MP3: German
            if (entry.src.includes("2.MP3")) languageLabel = "Korean";
            if (entry.src.includes("3.MP3")) languageLabel = "German";
          } else if (item.id === 13) {
            // 13번 진정한 행복 1,2,3번 오디오에 언어 표시
            if (idx === 0) languageLabel = "Korean";
            else if (idx === 1) languageLabel = "English";
            else if (idx === 2) languageLabel = "German";
          }

          return (
            <div key={idx} className="detail-block">
              <div className="detail-thumb">
                {isVideo ? (
                  <video controls width="100%">
                    <source
                      src={process.env.PUBLIC_URL + entry.src}
                      type="video/mp4"
                    />
                    브라우저가 video 태그를 지원하지 않습니다.
                  </video>
                ) : isAudio ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <button
                        onClick={() => {
                          const audio = document.getElementById(`audio-${idx}`);
                          if (audio) {
                            audio.play();
                          }
                        }}
                      >
                        ▶️ Play
                      </button>
                      <button
                        onClick={() => {
                          const audio = document.getElementById(`audio-${idx}`);
                          if (audio) {
                            audio.pause();
                            audio.currentTime = 0;
                          }
                        }}
                      >
                        ⏹ STOP
                      </button>
                      <span id={`time-${idx}`}>Remaining Time: 0:00</span>
                      {languageLabel && (
                        <span
                          style={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          ({languageLabel})
                        </span>
                      )}
                    </div>
                    <audio
                      id={`audio-${idx}`}
                      src={process.env.PUBLIC_URL + entry.src}
                      onTimeUpdate={() => {
                        const audio = document.getElementById(`audio-${idx}`);
                        const timeSpan = document.getElementById(`time-${idx}`);
                        if (audio && timeSpan && !isNaN(audio.duration)) {
                          const remaining = Math.floor(
                            audio.duration - audio.currentTime
                          );
                          const minutes = Math.floor(remaining / 60);
                          const seconds = String(remaining % 60).padStart(
                            2,
                            "0"
                          );
                          timeSpan.innerText = `Remaining Time: ${minutes}:${seconds}`;
                        }
                      }}
                      style={{ display: "none" }}
                    />
                  </>
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
          );
        })}
      </div>
    </div>
  );
}
