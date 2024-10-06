import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import "./Left.css";
import SharePopup from "./ShareOptions";

const LeftSide = () => {
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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setIsModalVisible(true);
  };
  if (windowWidth >= 768) {
    return (
      <div className="leftsidehoverbar">
        <a href="/" className="article" onClick={openModal}>
          Share
          <FontAwesomeIcon icon={faShareAlt} className="leftside-icon" />
        </a>
        {isModalVisible && (
          <SharePopup onClose={() => setIsModalVisible(false)} />
        )}

        <a
          href="https://www.instagram.com/iit_academy2.0/"
          className="Interview"
        >
          Instagram
          <FontAwesomeIcon icon={faInstagram} className="leftside-icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/iit-aacademy/"
          className="Scripter"
        >
          LinkedIn
          <FontAwesomeIcon icon={faLinkedin} className="leftside-icon" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100095357977617"
          className="Suggested"
        >
          Facebook
          <FontAwesomeIcon icon={faFacebook} className="leftside-icon" />
        </a>
        <a
          href="https://wa.me/918453307045?text=Chat With IIT Academy&utm_medium=&utm_campaign=&utm_term=&utm_content=&lang=en"
          className="Practice"
        >
          Whatsapp
          <FontAwesomeIcon icon={faWhatsapp} className="leftside-icon" />
        </a>
      </div>
    );
  }
};

export default LeftSide;
