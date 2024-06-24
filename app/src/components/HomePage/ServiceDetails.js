import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({ title, description, icon }) => (
  <div className="home-service-card">
    <div className="home-service-icon" style={{ fontSize: '40px', color: '#3DB166' }}>{icon}</div>
    <h3 className="home-service-title">{title}</h3>
    <p className="home-service-description">{description}</p>
    <button className="home-read-more">Read More</button>
  </div>
);

const Services = () => (
  <div className="home-container">
    <div className="home-intro">
      <h2 className="home-specialty"><span style={{ color: '#3DB166' }}>Our Specialty?</span></h2>
      <p className="home-deliver"><strong>Delivering Exceptional Customer Solutions.</strong></p>
    </div>
    <div className="home-services">
      <ServiceDetails
        title="Web Development"
        description="Efficient web development process improvements."
        icon={<i className="fas fa-code"></i>}
      />
      <ServiceDetails
        title="Search Engine Optimization"
        description="Effective SEO strategies to enhance visibility."
        icon={<i className="fas fa-search"></i>}
      />
      <ServiceDetails
        title="Cloud Solutions"
        description="Scalable cloud solutions for businesses."
        icon={<i className="fas fa-cloud"></i>}
      />
    </div>
    <div className="home-services">
      <ServiceDetails
        title="Data Analysis"
        description="Data analytics to drive informed decisions."
        icon={<i className="fas fa-chart-line"></i>}
      />
      <ServiceDetails
        title="E-Commerce Development"
        description="Robust platforms for online sales."
        icon={<i className="fas fa-shopping-cart"></i>}
      />
      <ServiceDetails
        title="Digital Marketing"
        description="Comprehensive digital marketing strategies."
        icon={<i className="fas fa-bullhorn"></i>}
      />
    </div>
    <div className="sliding-banner">
      <div className="sliding-banner-content">
        <div className="banner-item">GET A QUOTE</div>
        <div className="banner-item">WEBSITE DEVELOPMENT</div>
        <div className="banner-item">IT MANAGEMENT</div>
        <div className="banner-item">IT STRATEGY & CONSULTING</div>
        <div className="banner-item">CLOUD SERVICES</div>
        <div className="banner-item">24/7 CUSTOMER SERVICE</div>
        <div className="banner-item">HAPPY CUSTOMER</div>
      </div>
    </div>
  </div>
);

export default Services;