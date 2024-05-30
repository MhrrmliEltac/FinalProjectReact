import React from "react";
import "../CSS/header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div className="wrapper d-flex">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row d-flex justify-content-between">
            <div className="price col-4 d-flex">
              <p className="opacity-6 me-5px price-paragraph">
                Get a hosting plans, as low as starting at only
              </p>
              <p className="price-amount fw-600">$2.78/mo*</p>
            </div>
            <div className="service col-4 d-flex">
              <div className="customer-service d-flex ">
                <i className="text-white text-white-hover fa-solid phone fa-phone"></i>
                <p className="cus-paragraph text-white text-white-hover">
                  Customer service
                </p>
              </div>
              <div className="support-service d-flex">
                <i className="fa-regular envelope fa-envelope text-white text-white-hover"></i>
                <p className="text-white text-white-hover fs-13 opacity-8 support-email">
                  support@domain.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
