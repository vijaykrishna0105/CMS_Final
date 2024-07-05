import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Claims</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/sample_hero_image.jpg" alt="claims" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                {/* <h1 className="title">Manage</h1>
                <h1 className="title">Claims</h1> */}
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="/logo_final_2.png" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/sample_hero_image2.jpg" alt="hero" />
          </div>
          <h1 className="title dishes_title">Policy</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
