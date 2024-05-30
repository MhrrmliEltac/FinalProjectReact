import React, { useEffect, useRef } from "react";
import "../../CSS/sesction.css";

import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";

const Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="home-section">
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
        <div className="row d-flex justify-content-between">
          <div className="col-6 text-white main-home">
            <h1 className="main-heading">Power up web with hosting</h1>
            <p className="main-paragraph">
              Get access to tons of free apps to create websites, eCommerce
              websites and blogs installations.
            </p>
            <div className="main-footer">
              <Link to="/hosting" className="start-btn">
                Get started <i class="fa-solid fa-arrow-right"></i>
              </Link>
              <p className="main-footer-paragraph">
                Starting at only <p className="dark-paragraph">$2.78/mo*</p>
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="outside-circle">
              <img
                className="w-75"
                src="/demo-hosting-home-slider-01.webp"
                alt=""
              />
              <img
                className="main-img w-75"
                src="/demo-hosting-home-slider-02.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Section;
