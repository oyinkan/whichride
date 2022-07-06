import React from "react";
import "./WhyUsCard.css";

export default function WhyUsCard({key, src, title, details}) {
  return(
    <>
      <div className="whyus-card">
        <img src={src} alt="an icon" />
        <h6>{title}</h6>
        <p>{details}</p>
      </div>
    </>
  )
}