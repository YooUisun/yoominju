// src/Work/Work.js
import React from "react";
import GridLayout from "react-grid-layout";
import { Link } from "react-router-dom";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./Work.css";

const workData = [
  {
    id: 1,
    src: "/img/WorksMain/Schritte².webp",
    title: "Schritte²",
    year: "2024",
  },


  // 더 추가 가능
];

const layout = [
  { i: "1", x: 0, y: 0, w: 4, h: 8 },
  { i: "2", x: 1, y: 0, w: 4, h: 10 },
  { i: "3", x: 8, y: 0, w: 2, h: 10 },
];
// 좌표 자유롭게 수정 가능
//x = 가로위치 열 번호 몇 번째 열 에 배치할지지
//y = 세로위치 행 번호 몇 번째 줄 에 넣을지
//w = 가로위치 너비 몇 칸 차지할지
//h = 세로위치 너비 몇 칸 차지할지

export default function Work() {
  return (
    <div className="work-container">
      <div className="work-content">
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
          isResizable={false}
          isDraggable={false}
          autoSize={true}
        >
          {workData.map((item) => (
            <div key={String(item.id)} className="work-grid-item">
              <Link to={`/work/${item.id}`} className="work-link">
                <img
                  src={process.env.PUBLIC_URL + item.src}
                  alt={item.title}
                  className="thumb"
                />
                <div className="caption">
                  <div className="caption-line">
                    <div className="caption-title">{item.title},</div>
                    <div className="caption-info"> {item.year}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </GridLayout>

        <div className="artist-thoughts">
          <p>
            여기는 글 쓰는 곳 입니다. 작가로서의 생각, 전시 방향 등등 아무거나
            자유롭게 적어도 돼!
          </p>
        </div>
      </div>
    </div>
  );
}
