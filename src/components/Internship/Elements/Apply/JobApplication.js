import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./JobApplication.css";
import Layout from "../../../Layout";
import backgroundImg from "../../../../assests/Internship/bk.jpeg";
import Papa from "papaparse";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faXTwitter,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLink, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const jobDetails = {
  "frontend-devlopment-intern": {
    title: "Frontend Development Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Frontend Development Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>

            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "full-stack-devlopment-intern": {
    title: "Full-stack Development Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Full-stack Development Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "python-devlopment-intern": {
    title: "Python Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Python Development Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "java-developer-intern": {
    title: "Java Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Java Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="mailto:?subject=Check out this job&body=Check this job: YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "machine-learning-intern": {
    title: "Machine Learning Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Machine Learning Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="mailto:?subject=Check%20this%20Job&body=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "android-developer-intern": {
    title: "Android Development Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Android Development Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>

              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "ui-ux-design-intern": {
    title: "UI UX Design Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>UI UX Design Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "artificial-intelligence-intern": {
    title: "Artificial Intelligence Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Artificial Intelligence Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "data-science-intern": {
    title: "Data Science Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Data Science Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "c++programming-intern": {
    title: "C++ Programming Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>C++ Programming Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "data-analytics-intern": {
    title: "Data Analytics Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Data Analytics Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "cyber-security-intern": {
    title: "Cyber Security Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Cyber Security Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "cloud-computing-intern": {
    title: "Cloud Computing Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Cloud Computing Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "transfer-learning-intern": {
    title: "Transfer Learning Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Transfer Learning Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "digital-marketing-intern": {
    title: "Digital Marketing Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Digital Marketing Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="mailto:?subject=Digital Marketing Internship&body=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "graphic-design-intern": {
    title: "Graphic Design Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Graphic Design Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "human-resources-intern": {
    title: "Human Resources Internship",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Human Resources Internship</h2>
            <p>Remote Job</p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "transparent",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              I'm interested
            </button>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} className="linkedin-icon23" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // Add other domains as needed
};

const JobApplication = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { domain } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    domain: "",
    firstName: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
    linkedIn: "",
    resume: null,
    photo: null,
    college: "",
    degree: "",
    branch: "",
    semester: "",

    captcha: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      domain: domain,
    }));
  }, [domain]);

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      navigate("/");
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.oasis.opendocument.text",
          "application/rtf",
        ].includes(file.type)
      ) {
        const reader = new FileReader();
        reader.onload = (event) => {
          Papa.parse(event.target.result, {
            complete: (results) => {
              const data = results.data[0];
              setFormData({
                ...formData,
                ...data,
                resume: file,
              });
            },
          });
        };
        reader.readAsText(file);
      } else {
        alert("Please upload a valid file type: .doc, .docx, .pdf, .odt, .rtf");
      }
    }
  };
  const handlephotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setFormData({
            ...formData,
            image: file,
            imagePreview: event.target.result,
          });
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file: .jpg, .png, .gif");
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object to handle the form data
    const formEle = document.querySelector(".application-form");
    const formDataObj = new FormData(formEle);

    // Append fields that might not be directly captured in the form
    formDataObj.append("domain", formData.domain);
    formDataObj.append("firstName", formData.firstName);
    formDataObj.append("email", formData.email);
    formDataObj.append("mobile", formData.mobile);
    formDataObj.append("address", formData.address);
    formDataObj.append("gender", formData.gender);
    formDataObj.append("linkedIn", formData.linkedIn);
    formDataObj.append("college", formData.college);
    formDataObj.append("degree", formData.degree);
    formDataObj.append("branch", formData.branch);
    formDataObj.append("semester", formData.semester);

    // The formDataObj automatically captures the 'resume' and 'photo' files from the form inputs
    formDataObj.append("resume", formData.resume);
    formDataObj.append("photo", formData.photo);

    // Make a POST request to your Google Apps Script URL
    fetch("https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec", {
      method: "POST",
      body: formDataObj, // Send the formData object directly
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);
        setIsSubmitted(true);
        handleSuccessClick(formData.email); // Handle success notification
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const handleSuccessClick = (email) => {
    Swal.fire({
      title: "Thank you!",
      html: `<p>Your application has been submitted successfully.</p>
            <p>A copy of your application will be sent to <strong>${email}</strong> for your records.</p>`,
      icon: "success",
    }).then(() => {
      navigate(`/internship-application/${domain}`);
    });
  };

  const job = jobDetails[domain];
  return (
    <Layout title={`${job.title} Application`}>
      <div className="job-application">
        <div
          className="job-listing-header"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <div>{job.description}</div>
        </div>

        <form onSubmit={handleSubmit} className="application-form">
          <div className="form-section">
            <label style={{ display: "none" }}>
              Domain *
              <input
                type="text"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                required
              />
            </label>
            <h1
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "20px",
                color: "black",
              }}
            >
              Part-1: Personal Information
            </h1>
            <label>
              Full Name *
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email Id *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Mobile No (WhatsApp) *
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Permanent Address *
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Gender *
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div className="form-section">
            <label>
              LinkedIn Profile *
              <input
                type="url"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Upload Resume *
              <input
                type="file"
                name="resume"
                accept=".doc,.docx,.pdf,.odt,.rtf"
                onChange={handleFileUpload}
                required
              />
            </label>
            <label>
              Upload Your Photo *
              <input
                type="file"
                name="photo"
                accept="image/jpeg, image/png, image/gif"
                onChange={handlephotoUpload}
                required
              />
            </label>
          </div>

          <div className="form-section">
            <h1
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "20px",
                color: "black",
              }}
            >
              Part-2: Academic Information
            </h1>
            <label>
              College Name *
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Degree (Currently Pursuing / Last Pursued) *
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Branch *
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Current Semester *
              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="1">1 (First)</option>
                <option value="2">2 (Second)</option>
                <option value="3">3 (Third)</option>
                <option value="4">4 (Fourth)</option>
                <option value="5">5 (Fifth)</option>
                <option value="6">6 (Sixth)</option>
                <option value="7">7 (Seventh)</option>
                <option value="8">8 (Eighth)</option>
              </select>
            </label>
          </div>

          <button
            onClick={() => handleSuccessClick(formData.email)}
            type="button"
          >
            Submit Application
          </button>
        </form>
        {isSubmitted && (
          <div className="success-message">
            <p>Your application has been submitted successfully!</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default JobApplication;
