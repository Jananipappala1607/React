import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';
import logo from "./SDG-Logo.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-contact-info">
            <img
              src={logo}
              alt="Logo"
              className="footer-logo"
            />
            <div className="footer-contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <p>Phone Number</p>
                <p>(+202) 2156-2145</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <p>Email Us Here</p>
                <p>info@tronix.com</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <p>Office Address</p>
                <p>251 Hilton, Berlin DE</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>About Company</h4>
              <p>SDG Solutions delivers cutting-edge software solutions for businesses and individuals.</p>
              <div className="footer-social">
                <a href="/"><i className="fab fa-facebook-f"></i></a>
                <a href="/"><i className="fab fa-instagram"></i></a>
                <a href="/"><i className="fab fa-twitter"></i></a>
                <a href="/"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Meet Our Team</a></li>
                <li><a href="/">News & Media</a></li>
                <li><a href="/">Our Projects</a></li>
                <li><a href="/">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>What We Do</h4>
              <ul>
                <li><a href="/">Cyber Security</a></li>
                <li><a href="/">IT Management</a></li>
                <li><a href="/">QA & Testing</a></li>
                <li><a href="/">Infrastructure Plan</a></li>
                <li><a href="/">Plan IT Consultant</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Popular Posts</h4>
              <div className="footer-post">
                <div className="footer-post-item">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Post"
                    className="footer-post-img"
                  />
                  <div className="footer-post-content">
                    <p className="footer-post-date">June 4, 2023</p>
                    <p className="footer-post-title">Your Business Safe...</p>
                    <a href="/" className="footer-post-read-more">READ MORE</a>
                  </div>
                </div>
                <div className="footer-post-item">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Post"
                    className="footer-post-img"
                  />
                  <div className="footer-post-content">
                    <p className="footer-post-date">June 4, 2023</p>
                    <p className="footer-post-title">Data Backup and...</p>
                    <a href="/" className="footer-post-read-more">READ MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>© Copyright 2024 Tronix All Rights Reserved Themepul</p>
            </div>
            <div className="col-md-6 footer-bottom-links">
              <a href="/">Terms & Condition</a>
              <a href="/">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
