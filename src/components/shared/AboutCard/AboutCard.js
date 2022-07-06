import React from "react";
import "./AboutCard.css";

export default function AboutCard({ active, step, title, details }) {
  return(
    <>
      <div className="about-card">
        <div>
          <div className={`step ${active && "active"}`}>
            {step}
          </div>
        </div>
        <div>
          <h6>{title}</h6>
          <p>{details}</p>
        </div>
      </div>
    </>
  )
}