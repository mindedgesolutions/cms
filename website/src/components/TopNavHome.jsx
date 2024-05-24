import React, { useState } from "react";
import { Link } from "react-router-dom";
import { heroSlider } from "../utils/data";
import Carousel from "react-bootstrap/Carousel";
import { nanoid } from "nanoid";

const TopNavHome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link to="/" className="navbar-brand">
              <span>Digian</span>
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav  ">
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
              <div className="quote_btn-container">
                <button type="button" className="quote_btn">
                  Get A Quote
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="slider_section ">
        <div className="carousel slide">
          <div className="carousel-inner">
            <Carousel
              fade={true}
              controls={false}
              indicators={false}
              activeIndex={index}
              onSelect={handleSelect}
            >
              {heroSlider.map((i) => {
                return (
                  <Carousel.Item>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="img-box">
                          <img src={i.img} />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="detail-box">
                          <h1>{i.header}</h1>
                          <p>{i.body}</p>
                          <div class="btn-box">
                            <button type="button" className="btn1">
                              {i.btnText}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <ol className="carousel-indicators">
            {/* <li
              data-target="#customCarousel1"
              data-slide-to="0"
              className="active"
            ></li> */}
            {heroSlider.map((i, index) => {
              return (
                <li data-target="#customCarousel1" data-slide-to={index}></li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default TopNavHome;
