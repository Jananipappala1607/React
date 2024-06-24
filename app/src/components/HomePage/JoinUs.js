import React from 'react';
import './JoinUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import sampleImage from './images/image6.jpg'; // Assuming the image is in the same directory


const JoinUs = () => {
    return (
        <div className="join-us-container">
            <div className="hero-section">
                <div className="content">
                    <div className="breadcrumbs">Professional IT Experts For Tech Solutions</div>
                    <h1>At SDG Solutions</h1>
                    <p className="years-experience">We specialize in providing top-quality software solutions for businesses and individuals alike.</p>
                    {/* <p className="description">
                        Our team of expert developers and designers are committed to delivering cutting-edge software that is both intuitive and functional. 
                        At our company, we understand the importance of staying ahead of the curve when it comes to software development.
                    </p> */}
                    <div className="features">
                        <div className="feature">
                            <span className="icon"><FontAwesomeIcon icon={faCheck} /></span> Cutting-edge Software Solutions
                        </div>
                        <div className="feature">
                            <span className="icon"><FontAwesomeIcon icon={faCheck} /></span> Expert Developers and Designers
                        </div>
                        <div className="feature">
                            <span className="icon"><FontAwesomeIcon icon={faCheck} /></span> Intuitive and Functional Software
                        </div>
                        <div className="feature">
                            <span className="icon"><FontAwesomeIcon icon={faCheck} /></span> Staying Ahead of the Curve
                        </div>
                    </div>
                    <button className="primary-button">Read More About Us</button> {/* Changed to button */}
                </div>
                <div className="image-container">
                    <img src={sampleImage} alt="Connecting People" />
                </div>
            </div>
        </div>
    );
}

export default JoinUs;

