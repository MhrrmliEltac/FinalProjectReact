import React from "react";
import "../../CSS/mainheading2.css";

const MainHeading = () => {
  return (
    <section className="main-title">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="img-about"
              src="https://craftohtml.themezaa.com/images/demo-hosting-hosting-01.jpg"
              alt=""
            />
          </div>
          <div className="col">
            <p className="text-uppercase col-paragraph">Simple and intuitive</p>
            <h2 className="hosting-company">
              Secure & reliable hosting company
            </h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              fuga eligendi amet unde, facere harum?
            </span>
            <div className="box">
              <div className="box-1">
                <i class="fa-solid fa-circle-check"></i>
                <p className="box-paragraph">
                  Easy way to broadcast the content on website.
                </p>
              </div>
              <div className="box-1">
                <i class="fa-solid fa-circle-check"></i>
                <p className="box-paragraph">
                  Secure way to keep your data under a account.
                </p>
              </div>
            </div>
            <button className="service-btn">
              Hosting services <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeading;
