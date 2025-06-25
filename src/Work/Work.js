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
    src: "/img/WorksMain/Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin, 2024.webp",
    title:
      "Schritte² - Young Berlin Artists– Group Exhibition at Art Week Berlin",
    year: "2024",
  },
  {
    id: 2,
    src: "/img/WorksMain/Sorgenkissen.webp",
    title: "Sorgenkissenl",
    year: "2024",
  },
  {
    id: 3,
    src: "/img/WorksMain/For all the circles that hold me, for my circles that will hold you.webp",
    title:
      "나를 담는 모든 동그라미들을 위하여,너를 담을 내 동그라미들을 위하여\n(For all the circles that hold me,\nfor my circles that will hold you)",
    year: "2024",
  },
  {
    id: 4,
    src: "/img/WorksMain/1st Seoul International Fireworks Festival.webp",
    title: "1st Seoul International Fireworks Festivalr",
    year: "2024",
  },
  {
    id: 5,
    src: "/img/WorksMain/Sie schweben leicht, setzen sich dann ab und werden schwer.webp",
    title: "Sie schweben leicht, setzen sich dann ab und werden schwer",
    year: "2024",
  },
  {
    id: 6,
    src: "/img/WorksMain/Cup - Sie schweben leicht, setzen sich dann ab und werden schwer.webp",
    title: "Cup - Sie schweben leicht, setzen sich dann ab und werden schwer",
    year: "2024",
  },
  {
    id: 7,
    src: "/img/WorksMain/Joyfulling waiting 13 Crackle by 1, 2.webp",
    title: "Joyfulling waiting 13 Crackle by 1, 2",
    year: "2023",
  },
  {
    id: 8,
    src: "/img/WorksMain/1, 2.webp",
    title: "1, 2",
    year: "2023",
  },
];

const layouts = {
  lg: [ //pc버전
    { i: "1", x: 1, y: 0, w: 2, h: 13 },
    { i: "2", x: 5, y: 1, w: 3, h: 12 },
    { i: "3", x: 9, y: 0, w: 3, h: 19 },
    { i: "4", x: 0, y: 5, w: 3, h: 1 },
    { i: "5", x: 4, y: 20, w: 2, h: 10 },
    { i: "6", x: 6, y: 17, w: 2, h: 10 },
    { i: "7", x: 6, y: 27, w: 2, h: 10 },
    { i: "8", x: 9, y: 30, w: 3, h: 6 },
  ],
  md: [
    //보통 노트북,태블릿 가로
    { i: "1", x: 0, y: 0, w: 6, h: 3 },
    { i: "2", x: 6, y: 0, w: 6, h: 3 },
    { i: "3", x: 0, y: 3, w: 6, h: 4 },
    { i: "4", x: 6, y: 3, w: 6, h: 3 },
    { i: "5", x: 0, y: 7, w: 12, h: 5 },
    { i: "6", x: 0, y: 12, w: 6, h: 2 },
    { i: "7", x: 6, y: 12, w: 6, h: 3 },
    { i: "8", x: 0, y: 15, w: 12, h: 3 },
  ],
  sm: [
    //태블릿 세로, 작은 노트북 << 이걸 핸드폰으로 쓰면 될 듯
    { i: "1", x: 0, y: 0, w: 12, h: 3 },
    { i: "2", x: 0, y: 3, w: 12, h: 3 },
    { i: "3", x: 0, y: 6, w: 12, h: 3 },
    { i: "4", x: 0, y: 9, w: 12, h: 3 },
    { i: "5", x: 0, y: 12, w: 12, h: 3 },
    { i: "6", x: 0, y: 15, w: 12, h: 3 },
    { i: "7", x: 0, y: 18, w: 12, h: 3 },
    { i: "8", x: 0, y: 21, w: 12, h: 3 },
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
        breakpoints={breakpoints}
        cols={cols}
        rowHeight={30}
        isResizable={false}
        isDraggable={false}
      >
        {workData.map((item) => (
          <div key={String(item.id)}>
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
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
