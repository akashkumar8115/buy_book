import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Our Company</h1>
      </header>

      <section className="about-section">
        <div className="about-intro fade-in">
          <h2>Who We Are</h2>
          <p>
            We are a leading company in the tech industry, providing innovative
            solutions to help businesses thrive in the digital age. Our team of
            experts is dedicated to pushing the boundaries of technology to
            create cutting-edge products that meet the needs of our clients.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-mission slide-in-left">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower businesses through technology, enabling
            them to reach their full potential. We strive to deliver
            high-quality products that are not only functional but also easy to
            use, ensuring that our clients can focus on what they do best.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-team slide-in-right">
          <h2>Meet Our Team</h2>
          <p>
            Our team is composed of passionate professionals who are experts in
            their fields. We work collaboratively to ensure that every project
            is a success, leveraging our diverse skills and experiences to
            deliver the best possible outcomes for our clients.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-contact fade-in">
          <h2>Contact Us</h2>
          <p>
            Have questions or want to work with us? Feel free to reach out!
            We're always excited to discuss new projects and opportunities.
          </p>
          <p>Email: contact@ourcompany.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </section>
    </div>
  );
};

export default About;
