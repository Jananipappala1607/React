import React from "react";
import "./Navbar.css"; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "./SDG-Logo.png"; // Adjust the path according to your project structure

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="top-bar">
        <div className="container-fluid d-flex justify-content-between">
          <span>Mon-Fri: 8:00 AM - 6:30 PM</span>
          <div>
            <a href="/services" className="top-link">All Services</a>
            <a href="/careers" className="top-link">Careers</a>
            <a href="/news" className="top-link">News</a>
            <a href="mailto:media@tronix.com" className="top-link">media@tronix.com</a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="80"
              height="80"
              className="navbar-logo"
            />
            <span className="navbar-brand-text">SDG Solutions</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
              {/* New Dropdown for Pages */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Legal Pages
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Join with us
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Maintenance
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Coming Soon
                    </a>
                  </li>
                </ul>
              </li>
              {/* End of Pages Dropdown */}
            </ul>
            {/* Quick Call and Get Started Buttons */}
            <div className="d-flex align-items-center">
              <div className="quick-call">
                <span className="call-icon"><i className="fas fa-phone"></i></span> {/* FontAwesome icon */}
                <div className="call-details">
                  <span>Quick Call</span>
                  <span>(904) 12-366-25</span>
                </div>
              </div>
              <a href="/get-started" className="btn btn-get-started">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
