import React from "react";
import "./WhyUs.css";
import iconOne from "../../images/icon-one.svg";
import iconTwo from "../../images/icon-two.svg";
import iconThree from "../../images/icon-three.svg";
import iconFour from "../../images/icon-four.svg";
import WhyUsCard from "../shared/WhyUsCard/WhyUsCard";

const benefitsData = [
  {
    src: iconOne,
    title: "More choices",
    details: "WhichRide lets you compare pricing across the major rideshares so you can save money on every ride."
  },
  {
    src: iconTwo,
    title: "More choices",
    details: "WhichRide lets you compare pricing across the major rideshares so you can save money on every ride."
  },
  { 
    src: iconThree,
    title: "More choices",
    details: "WhichRide lets you compare pricing across the major rideshares so you can save money on every ride."
  },
  {
    src: iconFour,
    title: "Safety first",
    details: "WhichRide lets you compare pricing across the major rideshares so you can save money on every ride."
  }
]

export default function WhyUs() {
  return(
    <>
      <section className="whyus">
        <h4>Why Whichride</h4>
        <div className="benefits">
          {benefitsData.map((item, index) => (
            <div key={index}>
              <WhyUsCard
                src={item.src}
                title={item.title}
                details={item.details}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}