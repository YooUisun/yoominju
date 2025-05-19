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

      {/* Education */}
      <div className="cv-container">
        <div className="cv-left">
          <h3>Education</h3>
        </div>
        <div className="cv-right">
          {/* Universität der Künste Berlin Item */}
          <div className="cv-item">
            <p className="cv-title">Universität der Künste Berlin</p>
            <p className="cv-subtitle">: Bildende Kunst</p>
            <p className="cv-location">Germany</p>
            <p className="cv-year">2019 – 2025</p>
          </div>

          {/* Class of Prof. Pryde Item */}
          <div className="cv-item">
            <p className="cv-title">Class of Prof. Pryde</p>
            <p className="cv-year">2022 – 2025</p>
          </div>

          {/* Class of Prof. Neugebauer Item */}
          <div className="cv-item">
            <p className="cv-title">Class of Prof. Neugebauer</p>
            <p className="cv-year">2020 – 2022</p>
          </div>

          {/* Sangmyung University Item */}
          <div className="cv-item">
            <p className="cv-title">Sangmyung University</p>
            <p className="cv-subtitle">: Photography & Visual Media</p>

            <p className="cv-location">South Korea</p>
            <p className="cv-year">2014 – 2016</p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Awards */}
      <div className="cv-container">
        <div className="cv-left">
          <h3>Awards</h3>
        </div>
        <div className="cv-right">
          <div className="cv-item">
            <p className="cv-title">„STIBET I“ Studienabschluss-Stipendium</p>
            <p className="cv-location">DAAD</p>
            <p className="cv-year">2024</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">„ASYAAF“ Culture Station Seoul 284</p>
            <p className="cv-location">Seoul, South Korea</p>
            <p className="cv-year">2014</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">„The 7th Daum Junior Photography Festival“</p>
            <p className="cv-location">Parkgeonhi Foundation, South Korea</p>
            <p className="cv-year">2013</p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Exhibitions */}
      <div className="cv-container">
        <div className="cv-left">
          <h3>Exhibitions</h3>
        </div>
        <div className="cv-right">
          <div className="cv-item">
            <p className="cv-title">Schritte²</p>
            <p className="cv-location">Kunstraum Potsdamer Straße, Berlin</p>
            <p className="cv-year">2024</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">Re:Fusion Crossing the Line</p>
            <p className="cv-location">Universität der Künste Berlin, Berlin</p>
            <p className="cv-year">2023</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">1, 2</p>
            <p className="cv-location">Treize, Paris</p>
            <p className="cv-year">2023</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">Joyfully waiting 13 Crackle by 1, 2</p>
            <p className="cv-location">Online</p>
            <p className="cv-year">2023</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">Sleeping Promises</p>
            <p className="cv-location">Feldfünf Metropolenhaus, Berlin</p>
            <p className="cv-year">2022</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">Butterbutter Projekt</p>
            <p className="cv-location">Online</p>
            <p className="cv-year">2020</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;