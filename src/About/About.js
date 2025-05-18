import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      {/* Exhibition Header */}
      <div className="exhibition-block">
        <h2 className="exhibition-label">Ausstellung</h2>
        <img
          src={process.env.PUBLIC_URL + "/img/Sample.webp"}
          alt="Ausstellungsplakat"
          className="exhibition-image"
        />
        <h3 className="exhibition-title">Titel</h3>
        <p className="exhibition-date">9. Mai – 20. Juli 2025</p>
      </div>

      <hr className="divider" />

      {/* CV Section */}
      <div className="cv-main">
        <h2>CV</h2>
      </div>

      {/* Ausbildung */}
      <div className="cv-container">
        <div className="cv-left">
          <h2>Ausbildung</h2>
        </div>
        <div className="cv-right">
          <div className="cv-item">
            <p className="cv-title">Bildende Kunst</p>
            <p className="cv-location">Universität der Künste Berlin, Berlin, Deutschland</p>
            <p className="cv-year">2019 – 2025</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">Klasse von Prof. Pryde</p>
            <p className="cv-location"></p>
            <p className="cv-year">2022 – 2025</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">Klasse von Prof. Neugebauer</p>
            <p className="cv-location"></p>
            <p className="cv-year">2020 – 2022</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">Sangmyung Universität – Department für Fotografie & Visuelle Medien</p>
            <p className="cv-location">Cheonan, Südkorea</p>
            <p className="cv-year">2014 – 2016</p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Auszeichnungen */}
      <div className="cv-container">
        <div className="cv-left">
          <h3>Auszeichnungen</h3>
        </div>
        <div className="cv-right">
          <div className="cv-item">
            <p className="cv-title">STIBET I Studienabschluss-Stipendium</p>
            <p className="cv-location">DAAD</p>
            <p className="cv-year">2024</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">ASYAAF Kulturstation Seoul 284</p>
            <p className="cv-location">Seoul, Südkorea</p>
            <p className="cv-year">2014</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">The 7th Daum Junior Photography Festival</p>
            <p className="cv-location">Parkgeonhi Stiftung, Südkorea</p>
            <p className="cv-year">2013</p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Ausstellungen */}
      <div className="cv-container">
        <div className="cv-left">
          <h3>Ausstellungen</h3>
        </div>
        <div className="cv-right">
          <div className="cv-item">
            <p className="cv-title">Schritte²</p>
            <p className="cv-location">Kunstraum Potsdamer Straße, Berlin</p>
            <p className="cv-year">2024</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">Re:Fusion Crossing the Line</p>
            <p className="cv-location">UdK, Berlin</p>
            <p className="cv-year">2023</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">1, 2</p>
            <p className="cv-location">Treize, Paris</p>
            <p className="cv-year">2023</p>
          </div>
          <div className="cv-item">
            <p className="cv-title">Joyfully Waiting 13 Crackle by 1, 2</p>
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
