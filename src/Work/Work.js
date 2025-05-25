// src/Work/Work.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Work.css';

const images = [
  { src: '/img/Sample.webp', title: '민주의 여행', year: '2024', location: 'Seoul' },
  { src: '/img/Sample2.jpg', title: '의선의 여행', year: '2023', location: 'Busan' },
  // 추가 시 여기에만 객체를 늘리면 됩니다.
];

const workData = Array.from({ length: 15 }, (_, i) => {
  const img = images[i % images.length];
  return {
    id: i + 1,
    image: img.src,
    title: img.title,
    year: img.year,
    location: img.location,
  };
});

export default function Work() {
  return (
    <div className="work-container">
      {workData.map((item, idx) => (
        <Link to={`/work/${item.id}`} key={item.id} className="work-link">
          <div className={`work-item item-${idx + 1}`}>
            <img
              src={process.env.PUBLIC_URL + item.image}
              alt={item.title}
              className="thumb"
            />
            {/* 캡션을 이미지 아래로 이동 */}
            <div className="caption">
              <div className="caption-title">{item.title}</div>
              <div className="caption-info">{item.year} | {item.location}</div>
            </div>
          </div>
        </Link>
      ))}
      <div className="artist-thoughts">
        <h3>글 쓰는 곳 </h3>
        <p>여기는 글 쓰는 곳 입니다. ㅁㄴㅇㅁ노ㅓㅣㅏㅑ윤미ㅑㅏㅗ율니ㅓㅗ류미ㅓㅗㅇ륭ㅁ너ㅣㅏㅗ륨ㄴ어ㅏㅣㅗ륜어마ㅣㅗ륜ㅇ머ㅏㅗ륜ㅇ머ㅏㅗㅠ</p>
      </div>
    </div>
  );
}
