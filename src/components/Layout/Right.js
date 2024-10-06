import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCircleQuestion,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import "./Right.css";

const RightSide = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  if (windowWidth >= 768) {
    return (
      <div className="rightsidehoverbar">
        <a href="https://www.iitacademy.in/" className="article1">
          Main Page
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="rightside-icon"
            style={{ width: "23px", height: "23px" }}
          />
        </a>

        <a
          href="https://www.iitacademy.in/#/Admission-form"
          className="Interview1"
        >
          Apply Online
          <FontAwesomeIcon icon={faGraduationCap} className="rightside-icon" />
        </a>

        <a
          href="https://www.iitacademy.in/#/fees-structure"
          className="Scripter1"
        >
          Fee Details
          <FontAwesomeIcon icon={faCircleQuestion} className="rightside-icon" />
        </a>

        <a href="tel:7366831500" className="Suggested1">
          Call Us
          <FontAwesomeIcon icon={faPhone} className="rightside-icon" />
        </a>

        <a href="mailto:info@iitacademy.in" className="Practice1">
          Enquire Us
          <FontAwesomeIcon icon={faEnvelope} className="rightside-icon" />
        </a>
      </div>
    );
  }
};

export default RightSide;
