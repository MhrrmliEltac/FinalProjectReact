import React from "react";
import "../../CSS/slidersection2.css";

const SliderSection = () => {
  return (
    <section className="slider-section">
      <div className="container">
        <div className="slider">
          <div className="slide-track">
            {/* Orijinal slayt seti */}
            <div className="slide">
              <img
                src="https://craftohtml.themezaa.com/images/logo-pingdom.svg"
                alt="Pingdom Logo"
              />
            </div>
            <div className="slide">
              <img
                src="https://craftohtml.themezaa.com/images/logo-walmart.svg"
                alt="Walmart Logo"
              />
            </div>
            <div className="slide">
              <img
                src="https://craftohtml.themezaa.com/images/logo-logitech.svg"
                alt="Logitech Logo"
              />
            </div>
            <div className="slide">
              <img
                src="https://craftohtml.themezaa.com/images/logo-envato.svg"
                alt="Envato Logo"
              />
            </div>
            {/* Çoğaltılmış slayt seti */}
            <div className="slide">
              <img
                src="https://craftohtml.themezaa.com/images/logo-pingdom.svg"
                alt="Pingdom Logo"
              />
            </div>
            <div className="slide">
              <img
                src="https://craftohtml.themezaa.com/images/logo-walmart.svg"
                alt="Walmart Logo"
              />
            </div>
            <div className="slide">
              <img
                src="https://craftohtml.themezaa.com/images/logo-logitech.svg"
                alt="Logitech Logo"
              />
            </div>
            <div className="slide">
              <img
                src="https://craftohtml.themezaa.com/images/logo-envato.svg"
                alt="Envato Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
