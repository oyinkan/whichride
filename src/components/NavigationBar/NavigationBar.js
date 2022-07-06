import React, { useState } from "react";
import logo from "../../images/logo.svg";
import hamburgerIcon from "../../images/bars.svg";
import closeIcon from "../../images/close.svg";
import "./NavigationBar.css";

const navItems = ['The App', 'About Us', 'Get in Touch']

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  return(
    <>
      <nav className="navigation">
        <div>
          <img src={logo} alt="company's logo" />
        </div>
        <div className="hidden-md">
          <button
            className="menu-button"
            onClick={() => setOpen(true)}
          >
            <img
              src={hamburgerIcon} 
              alt="hamburger icon"
            />
          </button>
        </div>
        <div className="navitems-wrapper">
          {navItems.map((item, index) => (
            <a href="/" key={index}>{item}</a>
          ))}
        </div>
      </nav>
      {open && (
        <div className="mobile-menu hidden-md">
          <div className="text-right">
            <img
              src={closeIcon} 
              className="close" 
              alt="close icon"
              onClick={() => setOpen(false)}
            />
          </div>
          <div>
            {navItems.map((item, index) => (
              <a href="/" key={index}>{item}</a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}