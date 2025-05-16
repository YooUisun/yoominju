import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      {/* Exhibition Header */}
      <div className="exhibition-block">
        <h2 className="exhibition-label">Exhibition</h2>
        <img
          src={process.env.PUBLIC_URL + "/img/Sample.webp"}
          alt="Exhibition Poster"
          className="exhibition-image"
        />
        <h3 className="exhibition-title">Title</h3>
        <p className="exhibition-date">May 9 – July 20, 2025</p>
      </div>

      <hr className="divider" />

      {/* CV Section */}
      <div className="cv-main">
        <h2>CV</h2>
      </div>
      <div className="cv-container">
        <div className="cv-left">
          <h3>Schulbildung</h3>
        </div>
        <div className="cv-right">
          <div className="cv-item">
            <p className="cv-title">
              Seit 10/2019 – Studium an der UdK, Berlin
            </p>
            <p className="cv-date">Bildende Kunst</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">
              03/2014 – 08/2019 – Sangmyung Universität, Cheonan
            </p>
            <p className="cv-date">Department of Photography & Visual Media</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">02/2014 – Koreanisches Abitur, Asan</p>
            <p className="cv-date">Seolhwa Highschool, Südkorea</p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="cv-container">
        <div className="cv-left">
          <h3>Berufliche Tätigkeiten</h3>
        </div>
        <div className="cv-right">
          <div className="cv-item">
            <p className="cv-title">
              07/2020 – 11/2023 – Diverse Ausstellungen als Künstlerin
            </p>
            <p className="cv-date">Butterbutter Projekt 2020 (Online)</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">Sleeping Promises</p>
            <p className="cv-date">Feldfünf Metropolenhaus Berlin</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">Re : Fussion Crossing the Line</p>
            <p className="cv-date">UdK Berlin</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">1, 2</p>
            <p className="cv-date">Treize Paris</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">und viele mehr</p>
            <p className="cv-date">—</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
