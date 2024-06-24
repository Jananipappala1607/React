import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <h2 className="help-heading">What Can We Do For You?</h2>
      <h1 className="help-title">Empowering Your IT Infrastructure</h1>
      <div className="help-services">
        <div className="service-card">
          <h3>IT Consultancy</h3>
          <p>Faster & Smarter Solutions</p>
        </div>
        <div className="service-card">
          <h3>Web Security</h3>
          <p>Faster & Smarter Solutions</p>
        </div>
      </div>
      <div className="testimonial">
        <p>
          <q>Every business is unique. Whether you're a small startup or a large corporation, we can tailor our services to fit your needs and budget. We pride ourselves on providing exceptional customer service and building long-term partnerships with our clients. As your trusted IT partner, you can focus on growing your business while we take care of your technology needs.</q>
        </p>
        <p className="testimonial-author">- Dinesh Kodali</p>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <h3>200+</h3>
            <p>TEAM MEMBER</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">📈</div>
          <div className="stat-info">
            <h3>10+</h3>
            <p>COMPLETE PROJECT</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🏆</div>
          <div className="stat-info">
            <h3>20+</h3>
            <p>WINNING AWARD</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">💬</div>
          <div className="stat-info">
            <h3>900+</h3>
            <p>CLIENT REVIEW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;