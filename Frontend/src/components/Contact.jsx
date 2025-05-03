import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Have questions or want to learn more about Harvest Direct? Our team is here to help you transform your kitchen supply chain.
        </p>
      </div>

      <div className="contact-info-section">
        <div className="info-item">
          <h2>📍 Office Location (HQ)</h2>
          <p>Harvest Direct</p>
          <p>Borivali West, Mumbai, Maharashtra, India</p>
        </div>

        <div className="info-item">
          <h2>📞 Phone</h2>
          <p>+91-XXXXXXXXXX</p>
          <p className="info-note">Available Monday–Saturday, 10:00 AM to 7:00 PM</p>
        </div>

        <div className="info-item">
          <h2>📧 Email</h2>
          <p>workwithdarshannn@gmail.com</p>
          <p className="info-note">We typically respond within 24 hours</p>
        </div>

        <div className="info-item">
          <h2>💬 WhatsApp Business</h2>
          <p>+91-XXXXXXXXXX</p>
          <p className="info-note">Quick responses during business hours</p>
        </div>
      </div>

      <div className="join-section">
        <h2>Join Our Network</h2>
        <p>
          Interested in becoming a part of Harvest Direct? Click the button below to join our waitlist.
        </p>
        <button onClick={() => window.location.href = '/'} className="waitlist-button">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
}

export default Contact; 