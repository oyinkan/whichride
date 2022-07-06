import React from "react";
import "./About.css";
import iphone from "../../images/iPhone.svg";
import AboutCard from "../shared/AboutCard/AboutCard";

const steps = [
  {
    step: "Step 1",
    active: true,
    title: "Enter location",
    details: "Enter your destination to see a list of taxi providers near you."
  },
  {
    step: "Step 2",
    active: false,
    title: "Find the perfect ride",
    details: "Filter results by driver rating, driver sex, waiting times, price or speed. Reduce carbon footprint by only showing hybrid or electric cars."
  },
  {
    step: "Step 3",
    active: false,
    title: "Pay and Save",
    details: "Once you select a ride, we search the web for coupons to get you an even better deal, then book seemlessly within our app and earn points while you ride."
  }
]

export default function About() {
  return(
    <>
      <section className="about-us">
        <div className="header-title">
          <h4>Whichride brings together multiple ride hailing providers and local taxi firms in one app</h4>
          <p>Allowing riders to select the provider that offers the best price, service or travel time, then seamlessly book within the app</p>
        </div>
        <div className="steps-wrapper">
          <div className="text-center" data-aos="fade-right">
            <img src={iphone} className="img-fluid" alt="an iphone" />
          </div>
          <div>
            {steps.map((item, index) => (
              <div key={index}>
                <AboutCard
                  step={item.step}
                  active={item.active}
                  title={item.title}
                  details={item.details}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}