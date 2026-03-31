// src/Contact/Contact.js
import React from "react";
import "./Contact.css";


function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-info">
        <p>
          Contact&nbsp;
          <a href="mailto:yoomangju.contact@gmail.com">yoomangju.contact@gmail.com</a>
        </p>
      </div>

      <div className="contact-mail">
        <p>
          Instagram&nbsp;
          <a
            href="https://www.instagram.com/yoomangju"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yoomangju
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
