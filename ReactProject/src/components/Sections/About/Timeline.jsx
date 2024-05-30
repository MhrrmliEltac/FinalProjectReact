import React from "react";
import "../../CSS/timeline.css";

const Timeline = () => {
  return (
    <section className="business-timeline">
      <div className="container">
        <div className="heading-info">
          <h2>Business timeline</h2>
        </div>
        <div className="year-interval">
          <div className="years">
            <p className="2010">2010</p>
            <p className="2014">2014</p>
            <p className="2016">2016</p>
            <p className="2020">2020</p>
          </div>
          <div className="span">
            <p className="circle">
              <p className="little-circle"></p>
            </p>
            <p className="circle">
              <p className="little-circle"></p>
            </p>
            <p className="circle">
              <p className="little-circle"></p>
            </p>
            <p className="circle">
              <p className="little-circle"></p>
            </p>
          </div>
          <div className="info-in-year">
            <div className="info">
              <p className="head-title">Business founded</p>
              <p className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="info">
              <p className="head-title">Business founded</p>
              <p className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="info">
              <p className="head-title">Business founded</p>
              <p className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="info">
              <p className="head-title">Business founded</p>
              <p className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="rating-container">
          <div className="rating">
            <div className="cllient-num">
              <i class="fa-regular fa-face-smile"></i>
              <span>Join the 10000+ clients trusting us</span>
            </div>
            <div className="rating-number">
              <i class="fa-regular fa-star"></i>
              <span>4.9 out of 5 - 8549 Total reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
