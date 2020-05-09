import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import programming from "../../assets/icons/programming.svg";
import { Fade } from "react-reveal";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {" "}
                {greeting.title} <span>{"🧔🏻"}</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <p className="greeting-text-p experience">
                {greeting.experience}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img src={programming} alt="me sitting on table"></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
