import React, { useState } from "react";
import "../../CSS/offersection.css";
import { useNavigate } from "react-router-dom";

const OfferSection = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handlePaymentSystem = (packageDetails) => {
    navigate("/payment", { state: { packageDetails } });
  };

  const [state, setState] = useState({});
  console.log(state);

  const handlePackageSelect = (packageDetails) => {
    setState(packageDetails);
    handlePaymentSystem(packageDetails);
  };

  return (
    <section className="offer-section">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-lg-8 text-center">
            <span className="fw-600 mb-5px text-uppercase d-block card-span">
              Pricing Plans
            </span>
            <h2 className="card-h2 text-dark-gray fw-700 ls-minus-2px">
              Hosting plans
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-evenly">
            <div className="card w-25">
              <div className="paragraph">
                <p className="col-paragraph">Standard</p>
              </div>
              <div className="money-paragraph">
                <p>
                  <span>$</span>250
                </p>
              </div>
              <div className="text-paragraph">
                <p>
                  All the basics for businesses that are just getting started.
                </p>
              </div>
              <div className="button-box">
                <button
                  onClick={() =>
                    handlePackageSelect({ package: "Standard", price: 250 })
                  }
                  className="chs-package"
                >
                  Choose package
                </button>
              </div>
              <ul className="offer-list">
                <li className="active">Unlimited bandwidth</li>
                <span className="line"></span>
                <li className="disable">Full backup systems</li>
                <span className="line"></span>
                <li className="disable">Unlimited database</li>
                <span className="line"></span>
              </ul>
              <div className="link-paragraph">
                <a href="#">Get your 30 day free trial</a>
                <span className="line"></span>
              </div>
            </div>
            <div className="card w-25">
              <div className="paragraph">
                <p className="col-paragraph text-uppercase">BUSINESS</p>
              </div>
              <div className="money-paragraph">
                <p>
                  <span>$</span>350
                </p>
              </div>
              <div className="text-paragraph">
                <p>
                  All the basics for businesses that are just getting started.
                </p>
              </div>
              <div className="button-box">
                <button
                  onClick={() =>
                    handlePackageSelect({ package: "Business", price: 350 })
                  }
                  className="btn btn-warning active-button"
                >
                  Choose package
                </button>
              </div>
              <ul className="offer-list">
                <li className="active">Unlimited bandwidth</li>
                <span className="line"></span>
                <li className="active">Full backup systems</li>
                <span className="line"></span>
                <li className="disable active">Unlimited database</li>
                <span className="line"></span>
              </ul>
              <div className="link-paragraph">
                <a href="#">Get your 30 day free trial</a>
                <span className="line"></span>
              </div>
            </div>
            <div className="card w-25">
              <div className="paragraph">
                <p className="col-paragraph text-uppercase">ultimate</p>
              </div>
              <div className="money-paragraph">
                <p>
                  <span>$</span>450
                </p>
              </div>
              <div className="text-paragraph">
                <p>
                  All the basics for businesses that are just getting started.
                </p>
              </div>
              <div className="button-box">
                <button
                  onClick={() =>
                    handlePackageSelect({ package: "Ultimate", price: 450 })
                  }
                  className="chs-package"
                >
                  Choose package
                </button>
              </div>
              <ul className="offer-list">
                <li className="active">Unlimited bandwidth</li>
                <span className="line"></span>
                <li className="active">Full backup systems</li>
                <span className="line"></span>
                <li className="active">Unlimited database</li>
                <span className="line"></span>
              </ul>
              <div className="link-paragraph">
                <a href="#">Get your 30 day free trial</a>
                <span className="line"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-container">
          <button className="text-uppercase">Limited Offer</button>
          <p className="footer-paragraph">Save 20% on annual plans.</p>
          <div className="link-paragraph">
            <a href="#">Explore pricing plans</a>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="container banner-container">
        <div className="row banner-row">
          <div className="col-lg-6 footer-box d-flex">
            <div className="logo">
              <img
                src="https://craftohtml.themezaa.com/images/demo-hosting-home-icon.svg"
                alt=""
              />
            </div>
            <p className="offer-paragraph">
              Are you ready for a better productive business?
            </p>
          </div>
          <div className="col-lg-6 banner-box">
            <div className="banner-paraagraph d-flex">
              <div className="start-paragraph d-flex">
                <p className="text-white">Starting at only</p>
                <div className="link-paragraph">
                  <a className="ps-2" href="#">
                    $2.78 per month
                  </a>
                  <span className="line"></span>
                </div>
              </div>
              <div className="banner-btn">
                <button onClick={handleSignUp} className="banner-button">
                  Sign up free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
