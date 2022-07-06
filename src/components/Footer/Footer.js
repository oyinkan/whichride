import React from "react";
import "./Footer.css";

export default function Footer() {
  return(
    <footer className="footer">
      <div className="container-fluid flex justify-between">
        <div>
          <p>© 2020 Whichride - All rights reserved.</p>
        </div>
        <div>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  )
}