import React from 'react';
import './Review.css';
import profile1 from './images/profile1.jpg';
import profile2 from './images/profile2.jpg';

const Review = () => {
  return (
    <div className="review-container">
      <h2>Customer Reviews</h2>
      <div className="review-section">
        <div className="review">
          <img src={profile1} alt="Customer 1" className="review-img" />
          <div className="review-content">
            <h3>Donald Simpson</h3>
            <h4>Chief Financial Officer</h4>
            <h5>Jamaica International</h5>
            <p>
              When you are in the financial industry you know the image you have to project to people. 
              You have to be agile and authoritative; Consulting WP is the way to go for financial institutions.
            </p>
          </div>
        </div>
        <div className="review">
          <img src={profile2} alt="Customer 2" className="review-img" />
          <div className="review-content">
            <h3>Cintia Le Corre</h3>
            <h4>Chairman</h4>
            <h5>Harmony Corporation</h5>
            <p>
              We thought a lot before choosing the Financial WordPress Theme because we wanted to ensure our investment 
              would yield results. This was clearly the best choice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
