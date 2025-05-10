import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Have any questions? Reach out to us and we'll be happy to assist
            you.
          </p>
          <div className="contact-details">
            <div className="detail">
              <h2>Phone</h2>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="detail">
              <h2>Email</h2>
              <p>info@manbystate.com</p>
            </div>
            <div className="detail">
              <h2>Address</h2>
              <p>123 Real Estate St, City, Country</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;