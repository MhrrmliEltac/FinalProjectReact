import React from "react";
import "../../CSS/youtube2.css";

const YoutubeSection = () => {
  return (
    <section className="cover-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 text-center appear anime-complete">
            <div className="d-inline-block mb-45px video-container sm-mb-25px">
              <a
                href="https://www.youtube.com/watch?v=cfXHhfNy7tU"
                class="position-relative bg-white d-inline-block text-center rounded-circle video-icon-box video-icon-large popup-youtube"
              >
                <span>
                  <span class="video-icon">
                    <i class="fa-solid fa-play text-base-color"></i>
                    <span class="video-icon-sonar">
                      <span class="video-icon-sonar-bfr bg-white"></span>
                    </span>
                  </span>
                </span>
              </a>
            </div>
            <h2 class="text-white fw-700 ls-minus-1px mb-0">
              Are you ready for better productive business?
            </h2>
            <span class="d-block text-white opacity-5 text-uppercase mt-20px">
              We're a trusted sources of web hosting
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
