import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Link } from "react-router-dom";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./Work.css";

const ResponsiveGridLayout = WidthProvider(Responsive);
const workData = [
  {
    id: 1,
    src: process.env.PUBLIC_URL + "/img/WorksMain/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024.webp",
    title:
      "Schritte²  \nYoung Berlin Artists\nGroup Exhibition \nArt Week Berlin",
    year: "2024",
  },
  {
    id: 2,
    src: process.env.PUBLIC_URL + "/img/WorksMain/Sorgenkissen.webp",
    title: "Sorgenkissen",
    year: "2024",
  },
  {
    id: 3,
    src: process.env.PUBLIC_URL + "/img/WorksMain/For all the circles that hold me, for my circles that will hold you.webp",
    title:
      "나를 담는 모든 동그라미들을 위하여, 너를 담을 내 동그라미들을 위하여\nFor all the circles that hold me, for my circles that will hold you",
    year: "2024",
  },
  {
    id: 4,
    src: process.env.PUBLIC_URL + "/img/WorksMain/1st Seoul International Fireworks Festival.webp",
    title: "1st Seoul International Fireworks Festival",
    year: "2024",
  },
  {
    id: 5,
    src: process.env.PUBLIC_URL + "/img/WorksMain/Sie schweben leicht, setzen sich dann ab und werden schwer.webp",
    title:
      "Peoples : \nSie schweben leicht, setzen sich dann ab und werden schwer",
    year: "2024",
  },
  {
    id: 6,
    src: process.env.PUBLIC_URL + "/img/WorksMain/Cup - Sie schweben leicht, setzen sich dann ab und werden schwer.webp",
    title:
      "Object : \nSie schweben leicht, setzen sich dann ab und werden schwer",
    year: "2024",
  },
  {
    id: 7,
    src: process.env.PUBLIC_URL + "/img/WorksMain/Joyfulling waiting 13 Crackle by 1, 2.webp",
    title: "Joyfulling waiting 13 Crackle by 1, 2",
    year: "2023",
  },
  {
    id: 8,
    src: process.env.PUBLIC_URL + "/img/WorksMain/1, 2.webp",
    title: "1, 2",
    year: "2023",
  },
  {
    id: 9,
    src: process.env.PUBLIC_URL + "/img/WorksMain/Words.webp",
    title: "Words",
    year: "2023",
  },
  {
    id: 10,
    src: process.env.PUBLIC_URL + "/img/WorksMain/sch.webp",
    title: "sch",
    year: "2023",
  },
  {
    id: 11,
    src: process.env.PUBLIC_URL + "/img/WorksMain/Inneres.webp",
    title: "Inneres",
    year: "2023",
  },
  {
    id: 12,
    src: process.env.PUBLIC_URL + "/img/WorksMain/Re_Fusion.webp",
    title: "Re:Fusion",
    year: "2023",
  },
  {
    id: 13,
    src: process.env.PUBLIC_URL + "/img/WorksMain/True happiness.webp",
    title: "진정한 행복 \nTrue happiness \nwahres Glück",
    year: "2022",
  },
  {
    id: 14,
    src: process.env.PUBLIC_URL + "/img/WorksMain/die Spuren des Tages.webp",
    title: "die Spuren des Tages",
    year: "2022",
  },

  {
    id: 15,
    src: process.env.PUBLIC_URL + "/img/WorksMain/Butterbutterprojekt.webp",
    title: "Butterbutter projekt",
    year: "2020",
  },
  {
    id: 16,
    src: process.env.PUBLIC_URL + "/img/WorksMain/alles in Butter.webp",
    title: "Alles in Butter",
    year: "2020",
  },
  {
    id: 17,
    src: process.env.PUBLIC_URL + "/img/WorksMain/sleeping promisses.webp",
    title: "sleeping promisses",
    year: "2022",
  },
  {
    id: 18,
    src: process.env.PUBLIC_URL + "/img/WorksMain/der Tag.webp",
    title: "der Tag",
    year: "2022",
  },
  {
    id: 19,
    src: process.env.PUBLIC_URL + "/img/WorksMain/boom 2.webp",
    title: "폭발 II",
    year: "2019",
  },
  {
    id: 20,
    src: process.env.PUBLIC_URL + "/img/WorksMain/boom.webp",
    title: "폭발",
    year: "2019",
  },
  {
    id: 21,
    src: process.env.PUBLIC_URL + "/img/WorksMain/die Pandemie_11zon.webp",
    title: "die Pandemie",
    year: "2019",
  },

  {
    id: 22,
    src: process.env.PUBLIC_URL + "/img/WorksMain/der Raum.webp",
    title: "der Raum",
    year: "2019",
  },
  {
    id: 23,
    src: process.env.PUBLIC_URL + "/img/WorksMain/das Hinterhaus.webp",
    title: "das Hinterhaus",
    year: "2019",
  },
  {
    id: 24,
    src: process.env.PUBLIC_URL + "/img/WorksMain/Alles okay.webp",
    title: "Alles okay",
    year: "2017",
  },
  {
    id: 25,
    src: process.env.PUBLIC_URL + "/img/WorksMain/0-200.webp",
    title: "0-200",
    year: "2017",
  },
  {
    id: 26,
    src: process.env.PUBLIC_URL + "/img/WorksMain/Sa Jin Gwan.webp",
    title: "Sa Jin Gwan",
    year: "2014",
  },
  {
    id: 27,
    src: process.env.PUBLIC_URL + "/img/WorksMain/ASYAAF.webp",
    title: "ASYAAF",
    year: "2014",
  },
  {
    id: 28,
    src: process.env.PUBLIC_URL + "/img/WorksMain/The 7th Daum Junior Photography Festival.webp",
    title: "Daum Junior ",
    year: "2013",
  },
  {
    id: 29,
    src: process.env.PUBLIC_URL + "/img/WorksMain/열아홉(18).webp",
    title: "열아홉(18)",
    year: "2013",
  },
];
const layouts = {
  lg: [
    // 첫 번째 줄
    { i: "1", x: 1.7, y: 1, w: 2, h: 14 }, // Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin
    { i: "2", x: 5, y: 4, w: 3.5, h: 15 }, // Sorgenkissenl
    { i: "3", x: 9, y: 1, w: 3, h: 20 }, // 나를 담는 모든 동그라미들을 위하여...
    { i: "4", x: 0, y: 10, w: 3, h: 15 }, // 1st Seoul International Fireworks Festivalr
    { i: "5", x: 3.4, y: 5, w: 2, h: 5 }, // Sie schweben leicht, setzen sich dann ab und werden schwer
    { i: "6", x: 6, y: 5, w: 2, h: 8 }, // Cup - Sie schweben leicht, setzen sich dann ab und werden schwer
    { i: "7", x: 6, y: 11, w: 2, h: 10 }, // Joyfulling waiting 13 Crackle by 1, 2
    { i: "8", x: 9, y: 14, w: 3, h: 13 }, // 1, 2

    // 두 번째 줄
    { i: "9", x: 0, y: 19, w: 3, h: 20 }, // Words
    { i: "10", x: 4.5, y: 19, w: 3.5, h: 15 }, // sch
    { i: "11", x: 9, y: 19, w: 2.5, h: 17 }, // Inneres
    { i: "12", x: 1, y: 28, w: 3, h: 13 }, // Re:Fusion
    { i: "13", x: 5, y: 5, w: 2, h: 12.5 }, // True happiness
    { i: "14", x: 8, y: 29, w: 3.2, h: 23 }, // die Spuren des Tages

    // 세 번째 줄
    { i: "15", x: 0.2, y: 49, w: 2.2, h: 15 }, // Butter Butter Projekt, 2020
    { i: "16", x: 1, y: 59, w: 3.8, h: 19 }, // Alles in Butter, 2020
    { i: "17", x: 3.5, y: 30, w: 3.5, h: 12 }, // Sleeping Promises, 2022
    { i: "18", x: 9, y: 49, w: 4.8, h: 13 }, // Der Tag, 2022
    { i: "19", x: 5, y: 89, w: 2, h: 13 }, // 폭발 II, 2019
    { i: "20", x: 7, y: 89.5, w: 2, h: 12 }, // 폭발, 2019
    { i: "21", x: 10, y: 90, w: 1.5, h: 17 }, // Die Pandemie, 2019

    // 네 번째 줄
    { i: "22", x: 0.1, y: 70, w: 4, h: 15 }, // Der Raum
    { i: "23", x: 5, y: 70, w: 3, h: 21 }, // Das Hinterhaus
    { i: "24", x: 2, y: 30, w: 3, h: 9 }, // Alles Okay (Das Hinterhaus 아래 살짝 오른쪽)

    { i: "25", x: 9, y: 80, w: 2, h: 15 }, // 0-200 (그대로)

    // 다섯 번째 줄 (Alles Okay 아래)
    { i: "26", x: 0, y: 80, w: 4, h: 10 }, // Sa Jin Kwan (위치 유지)
    { i: "27", x: 5, y: 80, w: 1.34, h: 10 }, // ASYAAF (Alles Okay 아래 살짝 왼쪽)
    { i: "28", x: 6.5, y: 80, w: 1.3, h: 10 }, // Daum Festival (ASYAAF 바로 오른쪽)
    { i: "29", x: 9, y: 90, w: 4, h: 10 }, // 열아홉(18) (Daum Festival 오른쪽)
  ],

  sm: [
    // 첫 번째 줄
    { i: "1", x: 0, y: 1, w: 4.5, h: 8 }, // Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin
    { i: "2", x: 6, y: 1.5, w: 6, h: 5 }, // Sorgenkissenl
    { i: "3", x: 7, y: 3, w: 5, h: 10 }, // 나를 담는 모든 동그라미들을 위하여...
    { i: "5", x: 0, y: 5, w: 5, h: 9 }, // Sie schweben leicht, setzen sich dann ab und werden schwer
    { i: "6", x: 6, y: 5, w: 6, h: 6 }, // Cup - Sie schweben leicht, setzen sich dann ab und werden schwer
    { i: "4", x: 0, y: 7.5, w: 6, h: 5 }, // 1st Seoul International Fireworks Festivalr
    { i: "7", x: 0, y: 13, w: 5, h: 5 }, // Joyfulling waiting 13 Crackle by 1, 2
    { i: "8", x: 9, y: 13, w: 6, h: 4 }, // 1, 2

    // 두 번째 줄
    { i: "9", x: 0, y: 15, w: 6, h: 6 }, // Words
    { i: "10", x: 7, y: 18, w: 6, h: 5 }, // sch
    { i: "11", x: 9, y: 20, w: 5.5, h: 7 }, // Inneres
    { i: "12", x: 0, y: 36.5, w: 5, h: 4 }, // Re:Fusion
    { i: "13", x: 9, y: 37, w: 4.5, h: 3 }, // True happiness
    { i: "14", x: 0, y: 40, w: 7, h: 9.5 }, // die Spuren des Tages
    { i: "17", x: 9, y: 44, w: 5, h: 3 }, // Sleeping Promises, 2022
    { i: "18", x: 0.6, y: 48, w: 12, h: 7 }, // Der Tag, 2022

    // 세 번째 줄
    { i: "15", x: 9, y: 57, w: 4, h: 4.5 }, // Butter Butter Projekt, 2020
    { i: "16", x: 0, y: 57, w: 7, h: 4.5 }, // Alles in Butter, 2020
    { i: "19", x: 1, y: 60, w: 5, h: 5 }, // 폭발 II, 2019
    { i: "20", x: 6, y: 61.8, w: 5, h: 6.7 }, // 폭발, 2019
    { i: "22", x: 0.3, y: 63, w: 11, h: 7 }, // Der Raum
    { i: "21", x: 9, y: 76, w: 4, h: 6.6 }, // Die Pandemie, 2019
    { i: "23", x: 0, y: 77.7, w: 7.8, h: 2 }, // Das Hinterhaus

    { i: "24", x: 6, y: 80, w: 8, h: 3 }, // Alles Okay
    { i: "25", x: 0, y: 85, w: 4, h: 6 }, // 0-200

    // 다섯 번째 줄
    { i: "26", x: 10, y: 88, w: 7, h: 5 }, // Sa Jin Kwan
    { i: "27", x: 1, y: 93, w: 3, h: 4.2 }, // ASYAAF
    { i: "28", x: 4, y: 93, w: 3, h: 4 }, // Daum Festival
    { i: "29", x: 9, y: 94, w: 11, h: 10 }, // 열아홉(18)
  ],
};

const breakpoints = { lg: 1200, md: 996, sm: 768 };
const cols = { lg: 12, md: 12, sm: 12 };

export default function Work() {
  return (
    <div className="work-container">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        compactType={null}
        preventCollision={true}
        breakpoints={breakpoints}
        cols={cols}
        rowHeight={30}
        isResizable={false}
        isDraggable={false}
      >
        {workData.map((item) => {
          const isDisabled = [].includes(item.id); // 클릭 비활성화 아이디

          return (
            <div key={String(item.id)}>
              {isDisabled ? (
                // 링크 대신 div로 감싸서 클릭 막기
                <div className="work-link disabled">
                  <img
                    src={process.env.PUBLIC_URL + item.src}
                    alt={item.title}
                    className="thumb"
                  />
                  <div className="caption">
                    <div className="caption-title">{item.title}</div>
                    <div className="caption-info">{item.year}</div>
                  </div>
                </div>
              ) : (
                // 기본 링크
                <Link to={`/work/${item.id}`} className="work-link">
                  <img
                    src={process.env.PUBLIC_URL + item.src}
                    alt={item.title}
                    className="thumb"
                  />
                  <div className="caption">
                    <div className="caption-title">{item.title}</div>
                    <div className="caption-info">{item.year}</div>
                  </div>
                </Link>
              )}
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
}
