import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./JobApplication.css";
import Layout from "../../../Layout";
import backgroundImg from "../../../../assests/Internship/bk.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  "react-native-developer-intern": {
    title: "React Native Development Internship",
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
            <h2>React Native Development Internship</h2>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "backend-development-intern": {
    title: "Backend Development Internship",
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
            <h2>Backend Development Internship</h2>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
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

  "web-content-writer-intern": {
    title: "Web Content Writer Internship",
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
            <h2>Web Content Writer Internship</h2>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "social-media-coordinator-intern": {
    title: "Social Media Co-ordinator Internship",
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
            <h2>Social Media Co-ordinator Internship</h2>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "seo-analyst-intern": {
    title: "SEO Analyst Internship",
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
            <h2>SEO Analyst Internship</h2>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      domain: domain,
    }));
  }, [domain]);

  useEffect(() => {
    console.log("Form submission state:", isSubmitted);
  }, [isSubmitted]);

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
      const validTypes = ["application/pdf"];
      if (validTypes.includes(file.type)) {
        setFormData({
          ...formData,
          resume: file,
        });
        toast.success("Resume uploaded successfully!");
      } else {
        e.target.value = null;
        toast.error("Please upload a valid pdf only.");
      }
    }
  };

  const handlephotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png"];
      if (validTypes.includes(file.type)) {
        setFormData({
          ...formData,
          photo: file,
        });
        toast.success("Photo uploaded successfully!");
      } else {
        e.target.value = null;
        toast.error("Please upload a valid image file: .jpeg, .png");
      }
    }
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]); // Get base64 without data URL header
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Show loading message
    const loadingSwal = Swal.fire({
      title: "Submitting your details",
      text: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading(); // Show loading spinner
      },
    });

    // Create a new FormData object to handle the form data
    const formDataObj = new FormData();

    // Append form fields
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

    // Convert resume and photo files to base64 and append to formDataObj
    if (formData.resume) {
      const base64Resume = await getBase64(formData.resume);
      formDataObj.append("resume", base64Resume);
    }

    if (formData.photo) {
      const base64Photo = await getBase64(formData.photo);
      formDataObj.append("photo", base64Photo);
    }

    // Make a POST request to your Google Apps Script URL
    fetch(
      "https://script.google.com/macros/s/AKfycbwG7MGZjtG8g0kVmccdwTqzZrRJagisLosy8UTqsdQPeh_3fPKFewzCqUX18Iidz8HZCw/exec",
      {
        method: "POST",
        body: formDataObj,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);
        setIsSubmitted(true);
        setFormData({
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
        // Update the loading popup to show success message
        loadingSwal.then(() => {
          Swal.fire({
            title: "Thank you!",
            html: `
    <p>Your application has been submitted successfully.</p>
    <p>A copy of your application will be sent to <strong>${formData.email}</strong> for your records.</p>`,
            icon: "success",
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            didRender: () => {
              setTimeout(() => {
                Swal.close();
                navigate(`/internship-description/${formData.domain}`);
              }, 1500);
            },
          });
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Optionally, show an error message here
      })
      .finally(() => {
        // Close the loading message after the process is complete
        Swal.close();
      });
  };

  const job = jobDetails[domain];
  return (
    <Layout title={`${job.title} Application`}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
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
                accept=".pdf"
                onChange={handleFileUpload}
                required
              />
            </label>
            <label>
              Upload Your Photo *
              <input
                type="file"
                name="photo"
                accept="image/jpeg, image/png"
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

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting details..." : "Submit Application"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default JobApplication;
