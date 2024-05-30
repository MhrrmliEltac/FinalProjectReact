import React, { useEffect, useRef } from "react";
import "../CSS/footer.css";
import { motion, useAnimation, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <footer>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        ref={ref}
        className="container-fluid mycontainer"
      >
        <div className="container d-flex text-white">
          <div className="info-footer">
            <a href="#">
              <img src="/demo-hosting-logo-white.webp" alt="gege" />
            </a>
            <p className="info-paragraph">
              Lorem ipsum amet adipiscing elit to eiusmod ad tempor incididunt
              enim.
            </p>
            <ul className="d-flex justify-content-between social-media">
              <li>
                <a className="" href="#">
                  <i class="fa-brands fb fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands dribble fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands twitter fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands insta fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="company-footer">
            <h5>Company</h5>
            <ul className="company-list">
              <li className="about">About</li>
              <li className="hosting">Hosting</li>
              <li className="domain">Domain</li>
              <li className="pricing">Pricing</li>
            </ul>
          </div>
          <div className="customer-footer">
            <h5>Customer</h5>
            <ul className="customer-list">
              <li className="about">Client support</li>
              <li className="hosting">Help Center</li>
              <li className="domain">System status</li>
              <li className="pricing">Feedback</li>
            </ul>
          </div>
          <div className="say-footer">
            <h5>Say hello</h5>
            <p className="sup-footer">Need support?</p>
            <a className="mailto" href="mailto">
              <p className="mailto-paragraph">eltac306@gmail.com</p>
            </a>
            <p className="paragraph-footer">Customer care</p>
            <a className="tel" href="tel">
              <p className="tel-paragraph">+994 051 767 37 68</p>
            </a>
          </div>
          <div className="subscribe-footer">
            <h5>Subscribe our newsletter</h5>
            <p className="subs-footer">
              Subscribe our newsletter to get the latest news and updates!
            </p>
            <div className="search-container">
              <input
                type="email"
                name="email"
                id="email"
                className="email-footer"
                placeholder="Enter your email"
              />
              <i class="fa-regular fa-lg email fa-envelope"></i>
            </div>
            <ul className="d-flex paymet-method">
              <li className="visa">
                <a href="#">
                  <img src="/demo-decor-store-payment-icon-01.png" alt="" />
                </a>
              </li>
              <li className="paypal">
                <a href="#">
                  <img src="/demo-decor-store-payment-icon-02 (1).png" alt="" />
                </a>
              </li>
              <li className="klarna">
                <a href="#">
                  <img src="/demo-decor-store-payment-icon-03.png" alt="" />
                </a>
              </li>
              <li className="eway">
                <a href="#">
                  <img src="/demo-decor-store-payment-icon-04 (1).png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-footer">
          <div className="line">
            <span className="line-footer"></span>
          </div>
          <p>
            This site is protected by reCAPTCHA and the Google
            <a href="#"> privacy policy </a>
            and <a href="#"> terms of service </a> apply. You must not use this
            website if you disagree with any of these website standard terms and
            conditions.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
