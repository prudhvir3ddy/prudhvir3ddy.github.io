import React from "react";
import "./Header.css";
import people from "../../assets/icons/people.svg";
import Fade from "react-reveal";

export default function Header() {
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <a href="/" className="logo">
            <span className="logo-icon">
              <img src={people} alt="logo" />
            </span>
            <span className="logo-name">Prudhvi Reddy</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#opensource">Open Source</a>
            </li>
            <li>
              <a
                href="https://medium.com/@prudhvir3ddy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blogs
              </a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
