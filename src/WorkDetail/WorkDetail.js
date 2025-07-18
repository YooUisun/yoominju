// src/Work/WorkDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import "./WorkDetail.css";

const workData = [
  {
    id: 1,
    title:
      "Schritte² - Young Berlin Artists \nGroup Exhibition at Art Week Berlin",
    year: "2024",
    gallery: [
      {
        src:
          process.env.PUBLIC_URL +
          "/img/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024/1.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024/2.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024/3.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024/4.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024/6.webp",
      },
    ],
  },

  {
    id: 2,
    title: "Sorgenkissen",
    year: "2024",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/Sorgenkissen/1.mp4" },
      { src: process.env.PUBLIC_URL + "/img/Sorgenkissen/6.mp4" },
      { src: process.env.PUBLIC_URL + "/img/Sorgenkissen/2.webp" },
      { src: process.env.PUBLIC_URL + "/img/Sorgenkissen/3.webp" },
      { src: process.env.PUBLIC_URL + "/img/Sorgenkissen/4.webp" },
      { src: process.env.PUBLIC_URL + "/img/Sorgenkissen/5.webp" },
    ],
  },

  {
    id: 3,
    title:
      "나를 담는 모든 동그라미들을 위하여, 너를 담을 내 동그라미들을 위하여\nFor all the circles that hold me, for my circles that will hold you",
    year: "2024",
    gallery: [
      {
        src:
          process.env.PUBLIC_URL +
          "/img/For all the circles that hold me, for my circles that will hold you/1.mp4",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/For all the circles that hold me, for my circles that will hold you/2.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/For all the circles that hold me, for my circles that will hold you/3.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/For all the circles that hold me, for my circles that will hold you/4.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/For all the circles that hold me, for my circles that will hold you/6.webp",caption: "Exhibition view - Rundgang at UdK, Klasse. Pryde",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/For all the circles that hold me, for my circles that will hold you/7.webp",caption: "Exhibition view at Kunstraum Potsdamer Straße",
      },
    ],
  },

  {
    id: 4,
    title: "1st Seoul International Fireworks Festival",
    year: "2024",
    gallery: [
      {
        src:
          process.env.PUBLIC_URL +
          "/img/1st Seoul International Fireworks Festival/1.mp4",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/1st Seoul International Fireworks Festival/2.webp",caption: "Exhibition view at Kunstraum Potsdamer Straße",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/1st Seoul International Fireworks Festival/3.webp",caption: "Exhibition view at Kunstraum Potsdamer Straße",
      },
    ],
  },
  {
    id: 5,
    title:
      "Peoples : Sie schweben leicht, setzen sich dann ab und werden schwer",
    year: "2024",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/ppl/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/ppl/2.webp" },
      { src: process.env.PUBLIC_URL + "/img/ppl/3.webp" },
      { src: process.env.PUBLIC_URL + "/img/ppl/4.webp" },
      { src: process.env.PUBLIC_URL + "/img/ppl/5.webp" },
      { src: process.env.PUBLIC_URL + "/img/ppl/6.webp" },
      { src: process.env.PUBLIC_URL + "/img/ppl/7.webp" },
      { src: process.env.PUBLIC_URL + "/img/ppl/8.webp" },
    ],
  },
  {
    id: 6,
    title:
      "Object : Sie schweben leicht, setzen sich dann ab und werden schwer",
    year: "2024",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/cup/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/2.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/3.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/4.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/5.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/6.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/7.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/8.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/9.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/10.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/11.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/12.webp" },
      { src: process.env.PUBLIC_URL + "/img/cup/13.webp" },
    ],
  },
  {
    id: 7,
    title: "Joyfulling waiting 13 Crackle by 1, 2",
    year: "2023",
    gallery: [
      {
        src:
          process.env.PUBLIC_URL +
          "/img/Joyfulling waiting 13 Crackle by 1, 2/1.webp",
      },
    ],
    // ✅ 외부 링크 속성 추가
    externalLink: "https://joyfully-waiting.ch/joyfully-waiting-13",
  },
  {
    id: 8,
    title: "1, 2",
    year: "2023",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/1,2/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/1,2/2.webp" },
      {
        src: process.env.PUBLIC_URL + "/img/1,2/3.webp",
        caption: "© Julian Blum",
      },
      {
        src: process.env.PUBLIC_URL + "/img/1,2/4.webp",
        caption: "© Julian Blum",
      },
      {
        src: process.env.PUBLIC_URL + "/img/1,2/5.webp",
        caption: "© Julian Blum",
      },
      {
        src: process.env.PUBLIC_URL + "/img/1,2/6.webp",
        caption: "© Julian Blum",
      },
      { src: process.env.PUBLIC_URL + "/img/1,2/7.webp",caption: "© Julian Blum", },
      { src: process.env.PUBLIC_URL + "/img/1,2/8.webp" },
      { src: process.env.PUBLIC_URL + "/img/1,2/9.webp" },
    ],
  },
  //첫 번째 줄 끝

  //두 번째 줄 시작
  {
    id: 9,
    title: "Words",
    year: "2023",
    gallery: [{ src: process.env.PUBLIC_URL + "/img/Words/1.webp" }],
  },
  {
    id: 10,
    title: "sch",
    year: "2023",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/sch/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/sch/2.mp3" },
      { src: process.env.PUBLIC_URL + "/img/sch/3.mp3" },
      { src: process.env.PUBLIC_URL + "/img/sch/4.webp" },
    ],
  },
  {
    id: 11,
    title: "Inneres",
    year: "2023",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/Inneres/2.webp" },
      { src: process.env.PUBLIC_URL + "/img/Inneres/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/Inneres/5.webp" },
      { src: process.env.PUBLIC_URL + "/img/Inneres/7.webp" },
      { src: process.env.PUBLIC_URL + "/img/Inneres/3.webp" },
      { src: process.env.PUBLIC_URL + "/img/Inneres/8.webp" },
      { src: process.env.PUBLIC_URL + "/img/Inneres/9.webp" },
    ],
  },
  {
    id: 12,
    title: "Re:Fusion",
    year: "2023",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/Re_Fusion/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/Re_Fusion/2.webp" },
      { src: process.env.PUBLIC_URL + "/img/Re_Fusion/3.webp" },
      { src: process.env.PUBLIC_URL + "/img/Re_Fusion/4.webp" },
      { src: process.env.PUBLIC_URL + "/img/Re_Fusion/5.webp" },
      { src: process.env.PUBLIC_URL + "/img/Re_Fusion/6.webp" },
      { src: process.env.PUBLIC_URL + "/img/Re_Fusion/7.webp" },
      { src: process.env.PUBLIC_URL + "/img/Re_Fusion/8.webp" },
    ],
  },
  {
    id: 13,
    title: "진정한 행복 \nTrue happiness\nwahres Glück",
    year: "2022",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/True happiness/1.mp3" },
      { src: process.env.PUBLIC_URL + "/img/True happiness/2.mp3" },
      { src: process.env.PUBLIC_URL + "/img/True happiness/3.mp3" },
      { src: process.env.PUBLIC_URL + "/img/True happiness/4.mp4" ,caption: "Exhibition view - Rundgang at UdK, Klasse. Pryde",},
      { src: process.env.PUBLIC_URL + "/img/True happiness/5.mp4" ,caption: "Exhibition view - Rundgang at UdK, Klasse. Pryde",},
    ],
  },
  {
    id: 14,
    title: "die Spuren des Tages",
    year: "2022",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/1-1.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/1-2.mp4", caption: "Performance - Rundgang at UdK" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/1-3.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/2.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/4.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/5.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/6.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/7.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/8.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/9.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/10.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/11.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/12.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/13.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/14.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/15.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/16.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/17.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/18.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/19.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/20.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/21.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/22.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/23.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/24.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/25.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/26.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/27.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/28.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/29.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/30.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/31.webp" },
      { src: process.env.PUBLIC_URL + "/img/die Spuren des Tages/32.webp" },
    ],
  },
  {
    id: 15,
    title: "Butterbutter projekt",
    year: "2020",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/Butterbutterprojekt/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/Butterbutterprojekt/2.webp" },
    ],
  },
  {
    id: 16,
    title: "Alles in Butter",
    year: "2020",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/alles in Butter/1.mp4" },
      { src: process.env.PUBLIC_URL + "/img/alles in Butter/2.webp" },
      { src: process.env.PUBLIC_URL + "/img/alles in Butter/3.webp" },
      { src: process.env.PUBLIC_URL + "/img/alles in Butter/4.webp" },
      { src: process.env.PUBLIC_URL + "/img/alles in Butter/5.webp" },
    ],
  },
  {
    id: 17,
    title: "sleeping promisses",
    year: "2022",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/sleeping promisses/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/sleeping promisses/2.webp" },
    ],
  },
  {
    id: 18,
    title: "der Tag",
    year: "2022",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/der Tag/1.mp4" },
      { src: process.env.PUBLIC_URL + "/img/der Tag/3.webp" ,caption: "Exhibition view at feldfünf Gallery" },
      { src: process.env.PUBLIC_URL + "/img/der Tag/4.webp" ,caption: "Exhibition view at feldfünf Gallery" },
    ],
  },
  {
    id: 19,
    title: "폭발 II",
    year: "2019",
    gallery: [{ src: process.env.PUBLIC_URL + "/img/boom2/1.webp" }],
  },
  {
    id: 20,
    title: "폭발",
    year: "2019",
    gallery: [{ src: process.env.PUBLIC_URL + "/img/boom/1.webp" }],
  },
  {
    id: 21,
    title: "die Pandemie",
    year: "2019",
    gallery: [{ src: process.env.PUBLIC_URL + "/img/die Pandemie/1.webp" }],
  },
  {
    id: 22,
    title: "der Raum",
    year: "2019",
    gallery: [{ src: process.env.PUBLIC_URL + "/img/der Raum/1.webp" }],
  },
  {
    id: 23,
    title: "das Hinterhaus",
    year: "2019",
    gallery: [{ src: process.env.PUBLIC_URL + "/img/das Hinterhaus/1.webp" }],
  },
  {
    id: 24,
    title: "Alles Okay",
    year: "2017",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/Alles Okay/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/Alles Okay/2.webp" },
      { src: process.env.PUBLIC_URL + "/img/Alles Okay/3.webp" },
      { src: process.env.PUBLIC_URL + "/img/Alles Okay/4.webp" },
      { src: process.env.PUBLIC_URL + "/img/Alles Okay/5.webp" },
      { src: process.env.PUBLIC_URL + "/img/Alles Okay/6.webp" },
    ],
  },
  {
    id: 25,
    title: "0-200",
    year: "2017",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/0-200/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/0-200/2.webp" },
      { src: process.env.PUBLIC_URL + "/img/0-200/3.webp" },
      { src: process.env.PUBLIC_URL + "/img/0-200/4.webp" },
      { src: process.env.PUBLIC_URL + "/img/0-200/5.webp" },
      { src: process.env.PUBLIC_URL + "/img/0-200/6.webp" },
    ],
  },
  {
    id: 26,
    title: "Sa Jin Gwan",
    year: "2014",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/Sa Jin Gwan/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/Sa Jin Gwan/2.webp" },
      { src: process.env.PUBLIC_URL + "/img/Sa Jin Gwan/3.webp" },
      { src: process.env.PUBLIC_URL + "/img/Sa Jin Gwan/4.webp" },
      { src: process.env.PUBLIC_URL + "/img/Sa Jin Gwan/5.webp" },
      { src: process.env.PUBLIC_URL + "/img/Sa Jin Gwan/6.webp" },
    ],
  },
  {
    id: 27,
    title: "ASYAAF",
    year: "2014",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/ASYAAF/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/ASYAAF/2.webp" },
    ],
  },
  {
    id: 28,
    title: "The 7th Daum Junior Photography Festival",
    year: "2013",
    gallery: [
      {
        src:
          process.env.PUBLIC_URL +
          "/img/The 7th Daum Junior Photography Festival/1-1.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/The 7th Daum Junior Photography Festival/1.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/The 7th Daum Junior Photography Festival/2.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/The 7th Daum Junior Photography Festival/4.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/The 7th Daum Junior Photography Festival/5.webp",
      },
      {
        src:
          process.env.PUBLIC_URL +
          "/img/The 7th Daum Junior Photography Festival/6.webp",
      },
    ],
  },
  {
    id: 29,
    title: "열아홉\n18",
    year: "2013",
    gallery: [
      { src: process.env.PUBLIC_URL + "/img/열아홉/1.webp" },
      { src: process.env.PUBLIC_URL + "/img/열아홉/2.webp" },
      { src: process.env.PUBLIC_URL + "/img/열아홉/3.webp" },
      { src: process.env.PUBLIC_URL + "/img/열아홉/4.webp" },
      { src: process.env.PUBLIC_URL + "/img/열아홉/5.webp" },
      { src: process.env.PUBLIC_URL + "/img/열아홉/6.webp" },
      { src: process.env.PUBLIC_URL + "/img/열아홉/7.webp" },
    ],
  },
  // ... 나머지도 같은 형식으로 이어서 작성
];

// 오디오 파일인지 판단하는 헬퍼 함수
const isAudioFile = (src) => {
  // 소문자로 변환된 src를 받아서 확장자 체크
  return src.endsWith('.mp3') || src.endsWith('.wav') || src.endsWith('.ogg');
};

export default function WorkDetail() {
  const { id } = useParams();
  const item = workData.find((w) => w.id === parseInt(id, 10));

  if (!item) return <div>작업을 찾을 수 없습니다.</div>;

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
        {item.gallery.map((entry, idx, arr) => { // arr (전체 배열)을 받아서 다음 요소 체크
          const src = entry.src?.toLowerCase();
          if (!src) return null;

          const isVideo = src.endsWith(".mov") || src.endsWith(".mp4");
          const isAudio = isAudioFile(src); // 헬퍼 함수 사용

          let languageLabel = "";

          if (item.id === 10) {
            if (entry.src.includes("2.mp3")) languageLabel = "Korean";
            if (entry.src.includes("3.mp3")) languageLabel = "German";
          } else if (item.id === 13) {
            if (idx === 0) languageLabel = "Korean";
            else if (idx === 1) languageLabel = "English";
            else if (idx === 2) languageLabel = "German";
          }

          let blockStyle = {};
          if (item.id === 4) {
            if (idx === 0) {
              blockStyle = { marginBottom: '20px' };
            }
          } else if (item.id === 11) {
              if (idx === 4) {
                  blockStyle = { marginBottom: '30px' };
              }
          }

          // ✅ 특정 ID에 따라 클래스 추가
          const blockClassName = `detail-block ${item.id === 22 || item.id === 23 ? 'large-image-work' : ''}`;

          // 현재 entry가 오디오이고, 다음 entry가 존재하며, 다음 entry가 오디오가 아닐 때 (즉, 이미지일 때)
          const isLastAudioBeforeImage =
            isAudio && // 현재 파일이 오디오인지
            (idx + 1 < arr.length) && // 다음 파일이 존재하는지
            !isAudioFile(arr[idx + 1].src); // 다음 파일이 오디오가 아닌지 (즉, 이미지일 가능성)

          // 마진 스타일을 조건부로 적용
          const audioImageGapStyle = isLastAudioBeforeImage ? { marginBottom: '60px' } : {}; // 원하는 마진 값으로 조절!

          return (
            <div
              key={idx}
              className={blockClassName}
              style={{ ...blockStyle, ...audioImageGapStyle }} 
            >
              <div className="detail-thumb">
                {isVideo ? (
                  <video controls width="100%" poster={entry.poster ? process.env.PUBLIC_URL + entry.poster : ''}>
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
                        style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        <img
                          // ✅ 경로 수정: process.env.PUBLIC_URL 제거하고 '../' 사용
                          src="../img/Audio/play.png"
                          alt="Play"
                          style={{ width: '24px', height: '24px' }}
                        />
                      </button>
                      <button
                        onClick={() => {
                          const audio = document.getElementById(`audio-${idx}`);
                          if (audio) {
                            audio.pause();
                            audio.currentTime = 0;
                          }
                        }}
                        style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        <img
                          // ✅ 경로 수정: process.env.PUBLIC_URL 제거하고 '../' 사용
                          src="../img/Audio/play-pause.png"
                          alt="Stop"
                          style={{ width: '30px', height: '30px' }}
                        />
                      </button>
                      <span id={`time-${idx}`}></span>
                      {languageLabel && (
                        <span
                          style={{ fontWeight: "bold", marginLeft: "20px" }}
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
                          timeSpan.innerText = ` ${minutes}:${seconds}`;
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
                {/* caption 있을 때만 보여줌 */}
                {entry.caption && <p>{entry.caption}</p>}
              </div>

              {item.externalLink && idx === item.gallery.length - 1 && (
                <div style={{ marginTop: '15px', textAlign: 'center', width: '100%' }}>
                  <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#007bff',
                      textDecoration: 'underline',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {item.externalLink}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}