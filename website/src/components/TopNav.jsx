import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div class="hero_area">
      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand">
              <span>Digian</span>
            </Link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact-us" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div class="quote_btn-container">
                <button type="button" className="quote_btn">
                  Get A Quote
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default TopNav;
