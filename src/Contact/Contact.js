import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      
      <div className="contact-info">
        <p><strong>Contact</strong></p>
        <p>
          <a href="mailto:958.mum@gmail.com">
            958.mum@gmail.com
          </a>
        </p>
      </div>

      <hr /> 

      <div className="contact-mail">
        <p><strong>Instagram</strong></p>
        <p>
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
