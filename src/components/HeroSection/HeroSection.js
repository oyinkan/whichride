import React from "react";
import "./HeroSection.css";
import heroImage from "../../images/hero-image.svg";

export default function HeroSection() {
  return(
    <>
      <section className="hero-section">
        <div className="wrapper">
          <h1>Compare & book ride-hailing providers </h1>
          <p>Save money and time with WhichrRide. Think Compare the market but for taxis.</p>
        </div>
        <div className="text-right" data-aos="fade-up">
          <img src={heroImage} className="img-fluid" alt="a group of phones showing location" />
        </div>
      </section>
    </>
  )
}
