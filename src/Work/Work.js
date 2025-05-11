import React from 'react';
import './Work.css';

function Work() {
  const images = [
    { label: 'Performances,Projects', src: '/img/Sample.webp' },
    { label: 'Etc.', src: '/img/Sample.webp' },
  ];

  return (
    <section id="work" className="work-section">
      {images.map((item, index) => (
        <div
          key={index}
          className="horizontal-item"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + item.src})`
          }}
        >
          <div className="overlay-text">{item.label}</div>
        </div>
      ))}
    </section>
  );
}

export default Work;
