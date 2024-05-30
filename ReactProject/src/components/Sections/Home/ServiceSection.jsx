import React, { useEffect, useRef } from "react";
import "../../CSS/section-2.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="services">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        ref={ref}
        className="container"
      >
        <div className="row justify-content-center mb-3">
          <div className="col-lg-8 text-center">
            <span className="fw-600 mb-5px text-uppercase d-block card-span">
              HOSTING SOLUTION
            </span>
            <h2 className="card-h2 text-dark-gray fw-700 ls-minus-2px">
              Hosting services
            </h2>
          </div>
        </div>
        <div className="row justify-constent-center">
          <div className="col-3 d-flex">
            <div className="card">
              <div className="card-img">
                <img
                  className="inner-img w-75"
                  src="https://craftohtml.themezaa.com/images/demo-hosting-home-icon-02.svg"
                  alt=""
                />
              </div>
              <h4 className="card-heading">Online store</h4>
              <p className="card-paragraph">
                Lorem dummy printing type setting industry.
              </p>
              <Link to="/hosting" className="card-btn">
                Learn more<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-3 d-flex">
            <div className="card">
              <div className="card-img">
                <img
                  className="inner-img w-75"
                  src="https://craftohtml.themezaa.com/images/demo-hosting-home-icon-03.svg"
                  alt=""
                />
              </div>
              <h4 className="card-heading">Web Hosting</h4>
              <p className="card-paragraph">
                Lorem dummy printing type setting industry.
              </p>
              <Link to="/hosting" className="card-btn">
                Learn more<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-3 d-flex">
            <div className="card">
              <div className="card-img">
                <img
                  className="inner-img w-75"
                  src="https://craftohtml.themezaa.com/images/demo-hosting-home-icon-04.svg"
                  alt=""
                />
              </div>
              <h4 className="card-heading">Business email</h4>
              <p className="card-paragraph">
                Lorem dummy printing type setting industry.
              </p>
              <Link to="/hosting" className="card-btn">
                Learn more<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-3 d-flex">
            <div className="card">
              <div className="card-img">
                <img
                  className="inner-img w-75"
                  src="https://craftohtml.themezaa.com/images/demo-hosting-home-icon-05.svg"
                  alt=""
                />
              </div>
              <h4 className="card-heading">Cloud storage</h4>
              <p className="card-paragraph">
                Lorem dummy printing type setting industry.
              </p>
              <Link to="/hosting" className="card-btn">
                Learn more<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
