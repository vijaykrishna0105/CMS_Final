import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT CLAIMBRIDGE</h1>
              <p>Your hassle-free claims management solution.</p>
            </div>
            <p className="mid">
            Welcome to ClaimBridge, your trusted partner in navigating the complexities of claims management. Our innovative platform is designed to streamline the process, making it easier for policyholders to submit, track, and resolve claims with minimal hassle. Our dedicated team ensures that each claim is handled with the utmost care and efficiency, providing you with peace of mind and swift resolutions. 
            Join us today and experience the seamless claims management that sets ClaimBridge apart.
            </p>
            <Link to={"/services"}>
              Explore Services{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/tracking_image.jpg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
