// import React from 'react';
import AnimatedIcons from '../SocialMediaIconsComponent/AnimatedIcons';  // Reusing AnimatedIcons instead of SocialMediaIcons
import ContactUs from '../ContactUs/ContactUs';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left side - Contact Form */}
          <div className="contact-form-container">
            <h2 className="contact-title">Contact Us</h2>
            <ContactUs />
          </div>

          {/* Right side - Social Media Icons (using AnimatedIcons now) */}
          <div className="social-icons-container">
            <AnimatedIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
