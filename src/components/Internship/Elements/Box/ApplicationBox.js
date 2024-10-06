import './ApplicationBox.css'; 
import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationBox = ({ imageSrc, content,heading, domain }) => {
  return (
    <div className="application-box">
      <img src={imageSrc} alt="Domain" />
      <h2 className="box-heading">{heading}</h2>
      <div className="content">{content}</div>
      <Link to={domain}>
        <button className="apply-button">Apply</button>
      </Link>
    </div>
  );
};

export default ApplicationBox;


