import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./JobListing.css";
import Layout from "../../../Layout";
import backgroundImg from "../../../../assests/Internship/bk.jpeg";
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
    keywords:
      "Frontend web development internships for students, HTML, CSS, JavaScript internships, Learn React and Angular through internships, Web development internships, Frontend developer internships for college students",
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

            <Link to={`/internship-application/frontend-devlopment-intern`}>
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Frontend Development Intern
            </h3>
            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              As a Frontend Developer Intern, you will play a crucial role in
              our dynamic tech team, gaining hands-on experience in the exciting
              world of frontend development. This internship offers an excellent
              opportunity to learn and grow in a fast-paced environment. If
              you're a creative and driven individual with a passion for
              frontend development, this is the perfect opportunity to kickstart
              your career
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Design, develop, and maintain the company's web applications and
                websites.
              </li>
              <li>
                Collaborate with cross-functional teams to define, design, and
                ship new features.
              </li>
              <li>
                Write reusable, testable, and efficient code in HTML, CSS, and
                JavaScript.
              </li>
              <li>
                Optimize web applications for maximum speed and scalability
              </li>
              <li>
                Stay up-to-date with emerging trends and technologies in
                front-end development.
              </li>
              <li>Developing the latest user-facing features using ReactJs.</li>
              <li>
                Designing a modern and highly responsive web-based user
                interface
              </li>
              <li>Learning and understanding user interactions.</li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Pursuing Bachelor's degree in Computer Science, or a related
                field
              </li>
              <li>Proficiency in HTML, CSS, JavaScript, and ReactJS</li>
              <li>Experience with modern front-end frameworks such as React</li>
              <li>
                Strong understanding of responsive design and cross-browser
                compatibility issues
              </li>
              <li>
                Excellent communication, collaboration, and problem-solving
                skills
              </li>
            </ul>
            <h3 className="dur">Duration:</h3>
            <p>
              {" "}
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest.
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "full-stack-devlopment-intern": {
    title: "Full-stack Development Internship",
    keywords:
      "Full stack developer internships for college students, Backend and frontend development internships, Full stack development internships, Learn MERN stack internships, Web development internships for freshers",
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

            <Link to={`/internship-application/full-stack-devlopment-intern`}>
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Full-stack Development Internship
            </h3>
            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              As a Full-stack Developer Intern, you will play a crucial role in
              our dynamic tech team, gaining hands-on experience in both
              frontend and backend development. This internship offers an
              excellent opportunity to learn and grow in a fast-paced
              environment. If you're passionate about developing scalable web
              applications and have a solid understanding of both frontend and
              backend technologies, this is the perfect opportunity to kickstart
              your career.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Design, develop, and maintain the company's web applications and
                websites.
              </li>
              <li>
                Collaborate with cross-functional teams to define, design, and
                ship new features.
              </li>
              <li>
                Write reusable, testable, and efficient code in HTML, CSS,
                JavaScript, Node.js, or Python.
              </li>
              <li>
                Optimize web applications for maximum speed and scalability.
              </li>
              <li>
                Stay up-to-date with emerging trends and technologies in
                full-stack development.
              </li>
              <li>
                Developing the latest user-facing features using ReactJs or
                VueJs.
              </li>
              <li>
                Designing modern and highly responsive web-based user
                interfaces.
              </li>
              <li>Learning and understanding user interactions.</li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Pursuing Bachelor's degree in Computer Science, or a related
                field.
              </li>
              <li>
                Proficiency in HTML, CSS, JavaScript, Node.js, Python, ReactJs,
                or VueJs.
              </li>
              <li>
                Experience with databases (e.g., MySQL, MongoDB, PostgreSQL).
              </li>
              <li>
                Strong understanding of data structures, algorithms, and
                software design fundamentals.
              </li>
              <li>
                Excellent communication, collaboration, and problem-solving
                skills.
              </li>
            </ul>
            <h3 className="dur">Duration:</h3>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest.
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "python-devlopment-intern": {
    title: "Python Internship",
    keywords:
      "Python development internships for students, Python programming internships, Learn Python development internships, Python coding internships for freshers, Software development with Python internships",
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

            <Link to={`/internship-application/python-devlopment-intern`}>
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3>
              <strong>Job Description</strong>
            </h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Python - internship
            </h3>
            <h3 className="dur">Position Overview:</h3>
            <p>
              Unleash your Pythonic potential as a Python Development Intern on
              our dynamic tech team! This internship is your chance to gain
              hands-on experience building versatile applications using Python.
              You'll collaborate with experienced developers, learn industry
              best practices, and contribute to real-world projects in a
              fast-paced environment. If you're a creative problem-solver with a
              passion for Python, this is the perfect opportunity to jumpstart
              your career.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                {" "}
                Design, develop, and maintain Python applications for various
                use cases
              </li>
              <li>
                {" "}
                Collaborate with cross-functional teams to define, design, and
                implement new features.
              </li>
              <li>
                {" "}
                Write clean, readable, and efficient code adhering to Pythonic
                principles
              </li>
              <li>
                {" "}
                Utilize relevant Python libraries and frameworks for specific
                functionalities
              </li>
              <li> Automate tasks and workflows using Python scripting.</li>
              <li>
                Stay up-to-date with emerging trends and libraries in the Python
                world.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Pursuing Bachelor's degree in Computer Science, or a related
                field.
              </li>
              <li>
                {" "}
                Strong proficiency in Python programming concepts (data
                structures, algorithms)
              </li>
              <li>
                {" "}
                Experience with popular Python libraries (e.g., NumPy, Pandas,
                Django) a plus
              </li>
              <li>Familiarity with version control systems (e.g., Git)</li>
              <li>Excellent problem-solving and analytical skills</li>
              <li> Strong work ethic and a passion for learning</li>
              <h4 className="dur">Duration:</h4>
              <p>
                This internship position is typically for a duration of 3
                months, with the possibility of extension based on performance
                and mutual interest. We are eagerly looking forward to having
                you as a part of our young and dynamic team working towards
                collaborative success. .
              </p>
            </ul>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "java-developer-intern": {
    title: "Java Internship",
    keyword:
      "Java development internships for students, Learn Java programming internships, Software development internships in Java, Java coding internships for engineering students, Java internships for college student",
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

            <Link to={`/internship-application/java-developer-intern`}>
              <button>I'm interested</button>
            </Link>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Java Development Intern
            </h3>
            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              Join our dynamic tech team as a Java Development Intern and gain
              hands-on experience building robust and scalable applications!
              This internship offers an excellent opportunity to learn the
              intricacies of Java development and contribute to real-world
              projects in a fast-paced environment. If you're passionate about
              coding and eager to dive into the world of Java, this is the
              perfect chance to start your career.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Design, develop, and maintain enterprise-grade Java
                applications.
              </li>
              <li>
                Collaborate with cross-functional teams to define, design, and
                implement new features.
              </li>
              <li>
                Write clean, maintainable, and efficient code adhering to best
                practices.
              </li>
              <li>
                Participate in code reviews and unit testing to ensure code
                quality.
              </li>
              <li>
                Stay up-to-date with emerging trends and libraries in the Java
                ecosystem.
              </li>
              <li>
                Deepen your understanding of object-oriented programming
                principles.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Pursuing Bachelor's degree in Computer Science, or a related
                field.
              </li>
              <li>
                Strong foundation in Java programming concepts like OOP, data
                structures, and algorithms.
              </li>
              <li>
                Experience with popular Java frameworks (e.g., Spring,
                Hibernate) a plus.
              </li>
              <li>Familiarity with unit testing frameworks (e.g., JUnit).</li>
              <li>Excellent problem-solving and analytical skills.</li>
              <li>Strong work ethic and a passion for learning.</li>
            </ul>
            <h3 className="dur">Duration:</h3>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest.
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "machine-learning-intern": {
    title: "Machine Learning Internship",
    keyword:
      "Machine learning internships for students, Learn machine learning internships, Data science and machine learning internships, Applied machine learning internships for freshers, AI and ML internships",
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

            <Link to={`/internship-application/machine-learning-intern`}>
              <button>I'm interested</button>
            </Link>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Machine Learning Intern
            </h3>
            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              Join our cutting-edge team as a Machine Learning Intern and delve
              into the exciting world of AI! This internship offers an excellent
              opportunity to learn the fundamentals of Machine Learning, explore
              various algorithms, and contribute to real-world projects. You'll
              work alongside experienced data scientists, gain hands-on
              experience with data analysis and model development, and be at the
              forefront of technological innovation.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Assist data scientists in collecting, cleaning, and preparing
                data for Machine Learning projects.
              </li>
              <li>
                Explore various Machine Learning algorithms (supervised,
                unsupervised, reinforcement learning)
              </li>
              <li>
                Implement and test Machine Learning models using Python
                libraries (e.g., Scikit-learn, TensorFlow)
              </li>
              <li>
                Visualize and analyze Machine Learning results to understand
                model performance.
              </li>
              <li>Automate tasks and workflows using Python scripting.</li>
              <li>
                Stay up-to-date with emerging trends and advancements in the
                field of Machine Learning.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Pursuing Bachelor's degree in Computer Science, or a related
                field.
              </li>
              <li>Strong foundation in programming (Python preferred)</li>
              <li>Familiarity with basic Machine Learning concepts.</li>
              <li>Familiarity with version control systems (e.g., Git)</li>
              <li>
                Experience with data analysis tools (e.g., Pandas) is a plus.
              </li>
              <li>Excellent problem-solving and analytical skills</li>
              <li>Strong work ethic and a passion for learning</li>
            </ul>
            <h4 className="dur">Duration:</h4>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest. We are eagerly looking forward to having you as a part
              of our young and dynamic team working towards collaborative
              success.
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "android-developer-intern": {
    title: "Android Development Internship",
    keyword:
      "Android development internships for students, Learn Android app development internships, Android programming internships for college students, Kotlin development internships for students, Mobile app development internships",
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

            <Link to={`/internship-application/android-developer-intern`}>
              <button>I'm interested</button>
            </Link>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Android Development Intern
            </h3>
            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              Join our mobile development team as an Android Developer Intern,
              where you'll gain hands-on experience building innovative Android
              applications. This role offers the perfect opportunity to work
              with the latest tools and contribute to exciting real-world
              projects. If you have a passion for creating great user
              experiences, we'd love to have you!
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>Design and maintain user-friendly Android applications.</li>
              <li>Collaborate with designers to implement features.</li>
              <li>
                Write clean, efficient code using Java/Kotlin and Android SDK.
              </li>
              <li>
                Optimize applications for performance and device compatibility.
              </li>
              <li>Stay updated on Android development trends.</li>
              <li>Implement seamless UI for a great user experience.</li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Currently pursuing a degree in Computer Science or related
                field.
              </li>
              <li>
                Strong understanding of Android development and the Android SDK.
              </li>
              <li>Proficiency in Java/Kotlin.</li>
              <li>Experience with XML layouts and UI components.</li>
              <li>Excellent problem-solving skills.</li>
            </ul>
            <h3 className="dur">Duration:</h3>
            <p>
              The internship typically lasts for 3 months, with a potential
              extension based on performance and mutual interest.
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>
                <strong>Remote Job</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "ui-ux-design-intern": {
    title: "UI UX Design Internship",
    keyword:
      "UI/UX design internships for students, Learn UI/UX design internships, User experience design internships, Figma and Sketch internships for freshers, UX design internships for college students",
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

            <Link to={`/internship-application/ui-ux-design-intern`}>
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h4 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> UI UX Design - Internship
            </h4>
            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              Unleash your creativity and help us craft exceptional user
              experiences as a UI/UX Design Intern! In this internship, you'll
              collaborate with a talented design team to bring innovative ideas
              to life, shaping the look and feel of our digital products. This
              is a fantastic opportunity to gain exposure to the entire design
              process, from user research to prototyping and testing.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Conduct user research to understand user needs and pain points.
              </li>
              <li>
                Collaborate with product managers and developers to translate
                product requirements into visual design concepts.
              </li>
              <li>
                Design user interfaces (UI) that are aesthetically pleasing,
                intuitive, and user-friendly.
              </li>
              <li>
                Create high-fidelity mock-ups and prototypes for usability
                testing.
              </li>
              <li>
                Participate in user testing sessions and iterate on designs
                based on feedback.
              </li>
              <li>
                Stay updated on design trends and best practices in UI/UX
                design.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Pursuing a Bachelor's degree in Graphic Design, User Experience
                (UX) Design, or a related field.
              </li>
              <li>
                Strong portfolio showcasing UI/UX design skills and
                problem-solving abilities.
              </li>
              <li>
                Proficiency in design software like Adobe XD, Figma, or Sketch.
              </li>
              <li>
                Understanding of user-centered design principles and best
                practices.
              </li>
              <li>
                Excellent communication, collaboration, and presentation skills.
              </li>
              <li>
                A keen eye for detail and a passion for creating visually
                appealing and user-friendly experiences.
              </li>
              <h4 className="dur">Duration:</h4>
              <p>
                This internship position is typically for a duration of 3
                months, with the possibility of extension based on performance
                and mutual interest. We are eagerly looking forward to having
                you as a part of our young and dynamic team working towards
                collaborative success.
              </p>
            </ul>
          </div>
          <div className="job-info">
            <h3>Job Information</h3>
            <p>
              <strong>Industry:</strong> IT Services
            </p>
            <p>
              <strong>Work Experience:</strong> 4-5 years
            </p>
            <p>
              <strong>Remote Job</strong>
            </p>
          </div>
        </div>
      </div>
    ),
  },

  "artificial-intelligence-intern": {
    title: "Artificial Intelligence Internship",
    keyword:
      "Artificial Intelligence internships for students, Learn AI and machine learning internships, AI programming internships for freshers, AI research internships for college students, AI development internships",
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

            <Link to={`/internship-application/artificial-intelligence-intern`}>
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Artificial Intelligence Intern
            </h3>

            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              Join our cutting-edge AI team as an Artificial Intelligence Intern
              and explore the exciting world of machine learning and intelligent
              systems. This internship offers a unique opportunity to learn from
              experienced professionals and contribute to real-world AI
              projects. If you're fascinated by AI and have a strong foundation
              in computer science, we encourage you to apply!
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                {" "}
                Assist in developing and implementing AI algorithms using
                machine learning frameworks like TensorFlow or PyTorch.
              </li>
              <li>
                {" "}
                Work on tasks related to data collection, pre-processing, and
                analysis for AI models.
              </li>
              <li>
                {" "}
                Participate in research projects exploring new applications of
                AI technology.
              </li>
              <li>
                {" "}
                Stay updated on the latest advancements and trends in the field
                of Artificial Intelligence.
              </li>
              <li>
                {" "}
                Communicate complex technical concepts clearly and concisely.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                {" "}
                Pursuing a Bachelor's degree in Computer Science, Artificial
                Intelligence, or a related field.
              </li>
              <li>
                {" "}
                Strong foundation in programming languages like Python and
                familiarity with machine learning libraries.
              </li>
              <li>
                {" "}
                Understanding of mathematical concepts like linear algebra,
                calculus, and probability.
              </li>
              <li>Experience with data analysis tools and techniques.</li>
              <li>Excellent problem-solving and analytical skills</li>
              <li>
                {" "}
                A curious mind with a passion for exploring the potential of
                Artificial Intelligence.
              </li>
            </ul>
            <h4 className="dur">Duration:</h4>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest. We are eagerly looking forward to having you as a part
              of our young and dynamic team working towards collaborative
              success. .
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "data-science-intern": {
    title: "Data Science Internship",
    keyword:
      "Data science and machine learning internships, Data visualization internships for freshers, Learn data science internships, Data science internships for students, Data analysis internships",
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

            <Link to={`/internship-application/data-science-intern`}>
              <button>I'm interested</button>
            </Link>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Data Science Intern
            </h3>
            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              As a Data Science Intern, you'll join our innovative team at the
              forefront of data exploration and discovery. You'll gain valuable
              hands-on experience in wrangling, analyzing, and visualizing data
              to solve real-world problems. This internship is a fantastic
              opportunity to learn and grow in a fast-paced environment, working
              alongside experienced data scientists. If you're a curious and
              analytical individual with a passion for uncovering insights from
              data, this is the perfect chance to launch your data science
              career.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Assist with data collection, cleaning, and preparation for
                analysis.
              </li>
              <li>
                Develop and implement machine learning models to solve specific
                business problems.
              </li>
              <li>
                Perform data visualization to effectively communicate findings
                to technical and non-technical audiences.
              </li>
              <li>
                Stay up-to-date on emerging trends and techniques in data
                science.
              </li>
              <li>
                Collaborate with cross-functional teams (engineering, product)
                to understand data needs and translate results into actionable
                insights.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Pursuing Bachelor's degree in Computer Science, or a related
                field.
              </li>
              <li>
                Strong foundation in statistics, probability, and linear
                algebra.
              </li>
              <li>
                Proficiency in Python programming languages, with libraries like
                NumPy, Pandas, and scikit-learn.
              </li>
              <li>
                Experience with data visualization tools (Tableau, Power BI).
              </li>
              <li>
                Excellent communication, collaboration, and problem-solving
                skills.
              </li>
            </ul>
            <h3 className="dur">Duration:</h3>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest.
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "c++programming-intern": {
    title: "C++ Programming Internship",
    keyword:
      "C++ programming internships for students, Learn C++ development internships, Software development internships in C++, C++ coding internships for freshers, C++ programming internships for college students",
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

            <Link to={`/internship-application/c++programming-intern`}>
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3>
              <strong>Job Description</strong>
            </h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> C++ Programming - internship
            </h3>
            <h3 className="dur">Position Overview:</h3>
            <p>
              As a C++ Programming Intern, you'll join our team of developers
              building high-performance applications. You'll gain valuable
              experience working with C++, a powerful and versatile programming
              language used in various software systems. This internship offers
              an excellent opportunity to learn best practices, coding
              techniques, and contribute to real-world projects in a
              collaborative environment. If you're a passionate and
              detail-oriented programmer with a knack for efficiency, this is
              the perfect chance to solidify your C++ skills and gain industry
              experience.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li> Write clean, efficient, and maintainable C++ code.</li>
              <li>
                {" "}
                Develop and test new features for existing software
                applications.
              </li>
              <li> Debug and troubleshoot complex coding problems.</li>
              <li> Optimize code for performance and resource usage.</li>
              <li>
                Stay up-to-date on best practices and trends in C++ development.
              </li>
              <li>
                Collaborate with fellow developers to ensure code quality and
                adherence to coding standards.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                {" "}
                Pursuing a Bachelor's degree in Computer Science, Artificial
                Intelligence, or a related field.
              </li>
              <li>
                Strong understanding of object-oriented programming (OOP)
                concepts.
              </li>
              <li>
                {" "}
                Proficiency in C++ syntax, data structures, and algorithms.
              </li>
              <li>
                {" "}
                Experience with debugging tools and version control systems
                (Git).
              </li>
              <li>
                {" "}
                Excellent problem-solving, analytical, and critical thinking
                skills
              </li>
              <h4 className="dur">Duration:</h4>
              <p>
                This internship position is typically for a duration of 3
                months, with the possibility of extension based on performance
                and mutual interest. We are eagerly looking forward to having
                you as a part of our young and dynamic team working towards
                collaborative success. .
              </p>
            </ul>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "data-analytics-intern": {
    title: "Data Analytics Internship",
    keyword:
      "Data analytics internships for college students, Data visualization internships for freshers, Python data analytics internships, Data analytics internships for students, Learn data analysis internships",
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
            <Link to={`/internship-application/data-analytics-intern`}>
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3>
              <strong>Job Description</strong>
            </h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Data Analytics - internship
            </h3>
            <h3 className="dur">Position Overview:</h3>
            <p>
              As a Data Analytics Intern, you'll play a vital role in our
              data-driven organization. You'll gain hands-on experience with
              collecting, analysing, and interpreting data to inform business
              decisions. This internship offers an excellent opportunity to
              learn data analysis techniques, explore various data tools, and
              contribute to real-world projects in a fast-paced environment. If
              you're a detail-oriented and curious individual with a passion for
              extracting insights from data, this is the perfect chance to
              launch your data analytics career
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                {" "}
                Assist with data collection, cleaning, and preparation for
                analysis.
              </li>
              <li>
                {" "}
                Perform data analysis using SQL and data manipulation tools.
              </li>
              <li>
                {" "}
                Create data visualizations (charts, graphs) to effectively
                communicate findings.
              </li>
              <li>
                {" "}
                Generate data-driven reports and recommendations for
                stakeholders.
              </li>
              <li>
                {" "}
                Stay up-to-date on emerging trends and tools in data analytics.
              </li>
              <li>
                {" "}
                Collaborate with cross-functional teams (marketing, sales) to
                understand data needs and translate results into actionable
                insights
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                {" "}
                Pursuing a Bachelor's degree in Data Analytics, Business
                Analytics, Statistics, or a related field.
              </li>
              <li>
                {" "}
                Strong understanding of data analysis concepts and
                methodologies.
              </li>
              <li>
                {" "}
                Proficiency in SQL queries and data manipulation tools (Excel,
                Google Sheets).
              </li>
              <li>
                {" "}
                Experience with data visualization tools (Tableau, Power BI) a
                plus.
              </li>
              <li>
                Excellent communication, collaboration, and problem-solving
                skills.
              </li>
              <h4 className="dur">Duration:</h4>
              <p>
                This internship position is typically for a duration of 3
                months, with the possibility of extension based on performance
                and mutual interest. We are eagerly looking forward to having
                you as a part of our young and dynamic team working towards
                collaborative success. .
              </p>
            </ul>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "cyber-security-intern": {
    title: "Cyber Security Internship",
    keyword:
      "Cyber security internships for students, Learn cyber security internships, Ethical hacking internships for freshers, Cyber security internships for college students, Information security internships",
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

            <Link to={`/internship-application/cyber-security-intern`}>
              <button>I'm interested</button>
            </Link>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Cyber Security - internship
            </h3>
            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              As a Cyber Security Intern, you'll join our passionate team on the
              frontlines of defense, safeguarding our systems and data from
              ever-evolving cyber threats. This internship is a thrilling
              opportunity to gain practical experience in the dynamic world of
              cyber security. You'll learn from seasoned professionals and
              contribute to building robust security measures. If you're a
              detail-oriented and analytical individual with a keen interest in
              cyber security, this is the perfect chance to launch your career
              in this critical field.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Assist in vulnerability assessments and penetration testing to
                identify and mitigate security risks.
              </li>
              <li>
                Participate in security incident response procedures to
                effectively analyze, contain, and remediate security breaches.
              </li>
              <li>
                Learn and implement security best practices for network,
                application, and data security.
              </li>
              <li>
                Stay updated on the latest cyber threats and trends, keeping
                yourself and the team informed.
              </li>
              <li>
                Contribute to the development and maintenance of security
                policies and procedures.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Pursuing a Bachelor's degree in Computer Science, Information
                Security, or a related field.
              </li>
              <li>
                Strong understanding of networking concepts, operating systems,
                and security principles.
              </li>
              <li>
                Experience with security tools and methodologies (a plus).
              </li>
              <li>
                Excellent analytical, problem-solving, and critical thinking
                skills.
              </li>
              <li>
                Meticulous attention to detail and a passion for staying ahead
                of cyber threats.
              </li>
            </ul>
            <h4 className="dur">Duration:</h4>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest. We are eagerly looking forward to having you as a part
              of our young and dynamic team working towards collaborative
              success.
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "cloud-computing-intern": {
    title: "Cloud Computing Internship",
    keyword:
      "Cloud computing internships for students, AWS and Azure cloud internships, Learn cloud computing for freshers, Cloud security internships for college students, Cloud infrastructure internships",
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

            <Link to={`/internship-application/cloud-computing-intern`}>
              <button>I'm interested</button>
            </Link>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h3 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Cloud Computing Intern
            </h3>
            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              As a Cloud Computing Intern, you'll dive into the world of
              scalable and on-demand IT resources. You'll be part of a team that
              leverages the power of cloud platforms to optimize our
              infrastructure and applications. This internship provides a unique
              chance to learn and contribute to real-world cloud computing
              projects. If you're a curious and technically apt individual who
              enjoys innovation, this is the perfect opportunity to jumpstart
              your career in the booming cloud computing industry.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Assist in architecting, deploying, and managing cloud-based
                solutions on platforms like AWS, Azure, or GCP.
              </li>
              <li>
                Learn and implement cloud security best practices to ensure data
                privacy and protection in the cloud environment.
              </li>
              <li>
                Gain experience with cloud-native technologies like serverless
                computing, containers, and infrastructure as code (IaC).
              </li>
              <li>
                Participate in automation tasks using scripting languages for
                cloud resource management.
              </li>
              <li>
                Assist in cost optimization strategies for cloud resources.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Pursuing a bachelor’s degree in Computer Science, Information
                Technology, or a related field.
              </li>
              <li>
                Strong understanding of networking concepts, operating systems,
                and virtualization technologies.
              </li>
              <li>
                Familiarity with cloud computing concepts and services (a plus).
              </li>
              <li>
                Experience with scripting languages like Python or Bash (a
                plus).
              </li>
              <li>
                Excellent problem-solving, analytical, and critical thinking
                skills.
              </li>
              <li>
                Eagerness to learn and adapt to the ever-evolving cloud
                landscape.
              </li>
            </ul>
            <h3 className="dur">Duration:</h3>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest. We are eagerly looking forward to having you as a part
              of our young and dynamic team working towards collaborative
              success.
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "transfer-learning-intern": {
    title: "Transfer Learning Internship",
    keyword:
      "Research internships in transfer learning, Machine learning and transfer learning internships, Learn transfer learning in AI, Transfer learning internships for students, AI transfer learning internships",
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

            <Link to={`/internship-application/transfer-learning-intern`}>
              <button>I'm interested</button>
            </Link>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h4 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Transfer Learning Intern
            </h4>
            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              As a Transfer Learning Intern, you'll join our team at the
              forefront of artificial intelligence research, exploring the power
              of transfer learning to accelerate innovation. This internship
              offers an exceptional opportunity to gain hands-on experience in
              this cutting-edge field. You'll learn from experienced researchers
              and contribute to developing AI models that leverage pre-trained
              knowledge. If you're a passionate and research-oriented individual
              fascinated by AI, this is the perfect chance to embark on a
              rewarding career path in transfer learning.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Participate in the development and training of AI models using
                pre-trained networks.
              </li>
              <li>
                Apply transfer learning concepts to solve specific problems in
                our domain (e.g., computer vision, natural language processing).
              </li>
              <li>
                Evaluate and analyze the performance of transfer learning
                models.
              </li>
              <li>
                Stay up to date on the latest advancements and research in
                transfer learning.
              </li>
              <li>
                Prepare documentation and presentations to communicate findings
                effectively.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Pursuing a bachelor’s degree or Master's degree in Artificial
                Intelligence, Computer Science, or a related field (preferred).
              </li>
              <li>
                Strong understanding of machine learning concepts, deep learning
                architectures, and neural networks.
              </li>
              <li>
                Experience with programming languages like Python and deep
                learning frameworks (TensorFlow, PyTorch) (a plus).
              </li>
              <li>
                Excellent analytical, research, and problem-solving skills.
              </li>
            </ul>
            <h3 className="dur">Duration:</h3>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest. We are eagerly looking forward to having you as a part
              of our young and dynamic team working towards collaborative
              success.
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "digital-marketing-intern": {
    title: "Digital Marketing Internship",
    keyword:
      "Digital marketing internships for students, SEO and social media internships, Digital marketing for college students, Content marketing internships for freshers, Learn digital marketing",
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

            <Link to={`/internship-application/digital-marketing-intern`}>
              <button>I'm interested</button>
            </Link>
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
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 className="dur1">Job Description</h3>
            <p>This is a remote position.</p>
            <h4 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Digital Marketing Intern
            </h4>
            <h3 className="dur">Position Overview:</h3>
            <p style={{ textAlign: "justify" }}>
              As a Digital Marketing Intern, you will play a crucial role in our
              dynamic marketing team, gaining hands-on experience in the
              exciting world of digital marketing. This internship offers an
              excellent opportunity to learn and grow in a fast-paced
              environment while contributing to real marketing campaigns. If
              you're a creative and driven individual with a passion for digital
              marketing, this is the perfect opportunity to kickstart your
              career.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Assist in developing engaging and creative content for various
                digital platforms, including social media, email campaigns, etc.
              </li>
              <li>
                Help manage and grow our social media presence by scheduling
                posts, monitoring engagement, and analyzing performance metrics.
              </li>
              <li>
                Help create, manage, and optimize online advertising campaigns
                on platforms like Google Ads and social media advertising.
              </li>
              <li>
                Basic graphic design skills for creating visually appealing
                content, including social media graphics and email templates.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Currently enrolled in a bachelor's or master's degree program
              </li>
              <li>
                Strong passion for digital marketing and a desire to learn and
                grow in the field.
              </li>
              <li>
                Familiarity with social media platforms and digital marketing
                tools.
              </li>
              <li>
                Basic graphic design skills (Adobe Creative Suite, Canva, etc.)
                is a plus.
              </li>
              <li>Self-motivated, creative, and a team player.</li>
            </ul>
            <h4 className="dur">Duration:</h4>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest. We are eagerly looking forward to having you as a part
              of our young and dynamic team working towards collaborative
              success.
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "graphic-design-intern": {
    title: "Graphic Design Internship",
    keyword:
      "Graphic design internships for students, Learn Photoshop and Illustrator internships, Graphic design internships for freshers, Visual design internships for college students, Creative design internships",
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

            <Link to={`/internship-application/graphic-design-intern`}>
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3>
              <strong>Job Description</strong>
            </h3>
            <p>This is a remote position.</p>
            <h4 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Graphic Design - internship
            </h4>
            <h3 className="dur">Position Overview:</h3>
            <p>
              Unleash your creativity and join our passionate design team as a
              Graphic Designer Intern! You'll play a vital role in crafting
              visually compelling graphics that elevate our brand and engage our
              audience. This internship offers an exceptional opportunity to
              gain hands-on experience in a fast-paced environment, working
              alongside experienced designers. If you're a creative individual
              with a knack for visual storytelling, this is the perfect chance
              to launch your design career
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                {" "}
                Create visually compelling graphics, illustrations, and other
                design assets for various mediums (print, web, social media).
              </li>
              <li>
                {" "}
                Collaborate with marketing and development teams to understand
                project goals and user needs.
              </li>
              <li>
                {" "}
                Design user interfaces (UI) that are user-friendly,
                aesthetically pleasing, and consistent with brand guidelines.
              </li>
              <li>
                {" "}
                Develop and maintain the company's brand identity through
                consistent visual design.
              </li>
              <li>
                {" "}
                Stay up-to-date on design trends and software (e.g., Adobe
                Creative Suite).
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                {" "}
                Currently enrolled in a Bachelor's program in Graphic Design,
                Visual Communication, or a related field (or equivalent
                portfolio experience).
              </li>
              <li>
                {" "}
                Strong portfolio showcasing your design skills and creativity.
              </li>
              <li>
                Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
                InDesign).
              </li>
              <li>
                Excellent communication, collaboration, and problem-solving
                skills.
              </li>
              <li>
                {" "}
                A keen eye for detail and a passion for creating high-quality
                design work.
              </li>
              <h4 className="dur">Duration:</h4>
              <p>
                This internship position is typically for a duration of 3
                months, with the possibility of extension based on performance
                and mutual interest. We are eagerly looking forward to having
                you as a part of our young and dynamic team working towards
                collaborative success. .
              </p>
            </ul>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "human-resources-intern": {
    title: "Human Resources Internship",
    keyword:
      "HR internships for college students, People management internships for college students, HR management internships for freshers, HR internships for students, Learn recruitment internships",
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

            <Link to={`/internship-application/human-resources-intern`}>
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3>
              <strong>Job Description</strong>
            </h3>
            <p>This is a remote position.</p>
            <h4 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Human Resources - internship
            </h4>
            <h3 className="dur">Position Overview:</h3>
            <p>
              Join our dynamic HR team as an HR Intern and gain valuable
              experience in the exciting world of human resources! You'll assist
              with various HR functions, learn about recruitment practices, and
              contribute to fostering a positive company culture.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                {" "}
                Assist with the recruitment process (sourcing candidates,
                scheduling interviews, etc.)
              </li>
              <li>
                {" "}
                Onboard new hires and help them get acclimated to the company
                culture.
              </li>
              <li>
                {" "}
                Assist with employee relations and engagement initiatives.
              </li>
              <li> Maintain HR databases and paperwork.</li>
              <li> Stay up-to-date on HR laws and regulations.</li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                {" "}
                Currently enrolled in a Bachelor's program in Human Resources
                Management or a related field.
              </li>
              <li> Strong organizational and time management skills.</li>
              <li> Excellent communication and interpersonal skills.</li>
              <li> Proficient in Microsoft Office Suite</li>
              <li>
                {" "}
                A passion for building relationships and fostering a positive
                work environment.
              </li>
              <h4 className="dur">Duration:</h4>
              <p>
                This internship position is typically for a duration of 3
                months, with the possibility of extension based on performance
                and mutual interest. We are eagerly looking forward to having
                you as a part of our young and dynamic team working towards
                collaborative success. .
              </p>
            </ul>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "web-content-writer-intern": {
    title: "Web Content Writer Internship",
    keyword: "",
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

            <Link to={`/internship-application/web-content-writer-intern`}>
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3>
              <strong>Job Description</strong>
            </h3>
            <p>This is a remote position.</p>
            <h4 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Web Content Writer - internship
            </h4>
            <h3 className="dur">Position Overview:</h3>
            <p>
              We are seeking enthusiastic and dedicated individuals to join our
              team as Content Writer Interns. As an intern, you will have the
              opportunity to collaborate with experienced educators and
              contribute to the development of high-quality educational content
              for our website.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                {" "}
                Research and gather relevant information on various topics and
                entrance exam patterns.
              </li>
              <li>
                {" "}
                Create engaging and informative content for online platforms,
                including blog posts, articles, and social media posts.
              </li>
              <li>
                {" "}
                Collaborate with the curriculum development team to ensure
                alignment with educational objectives and standards.
              </li>
              <li>
                {" "}
                Proofread and edit content to ensure accuracy, clarity, and
                adherence to guidelines.
              </li>
            </ul>
            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Currently pursuing a degree in engineering, science, education,
                or related field.
              </li>
              <li>
                Excellent writing skills with a strong command of grammar,
                punctuation, and style.
              </li>
              <li>
                Ability to conduct thorough research and synthesize complex
                information into clear and concise content.
              </li>
              <li>
                Attention to detail and commitment to producing high-quality
                work.
              </li>
              <li>
                Basic understanding of educational concepts and examination
                patterns preferred.
              </li>
            </ul>

            <h4 className="dur">Duration:</h4>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest. We are eagerly looking forward to having you as a part
              of our young and dynamic team working towards collaborative
              success. .
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "social-media-coordinator-intern": {
    title: "Social Media Co-ordinator Internship",
    keyword: "",
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

            <Link
              to={`/internship-application/social-media-coordinator-intern`}
            >
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3>
              <strong>Job Description</strong>
            </h3>
            <p>This is a remote position.</p>
            <h4 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong>Social Media Co-ordinator - internship
            </h4>
            <h3 className="dur">Position Overview:</h3>
            <p>
              As a Social Media Coordinator Intern, you will be an integral part
              of our marketing team, helping to shape our brand's online
              presence. This role offers a unique opportunity to gain hands-on
              experience in social media management, content creation, and
              digital marketing strategies. If you’re a creative, tech-savvy
              individual with a passion for social media and storytelling, this
              internship will provide the perfect platform to kickstart your
              career in the dynamic field of digital marketing.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Develop, implement, and manage our social media strategy to
                align with business goals.
              </li>
              <li>
                Create, curate, and schedule engaging content across various
                social media platforms (e.g., Facebook, Instagram, LinkedIn,
                Twitter).
              </li>
              <li>
                Monitor and respond to social media interactions, comments, and
                messages in a timely manner.
              </li>
              <li>
                Collaborate with the marketing and design teams to create
                visually appealing and brand-aligned graphics and videos.
              </li>
              <li>
                Analyze social media metrics and generate reports to track
                performance, trends, and user engagement.
              </li>
              <li>
                Stay updated with the latest social media trends, tools, and
                best practices.
              </li>
              <li>
                Assist in planning and executing social media campaigns to drive
                brand awareness and audience engagement.
              </li>
              <li>
                Engage with the online community to foster relationships, build
                the brand’s reputation, and enhance customer loyalty.
              </li>
              <li>
                Conduct competitive analysis to identify areas for improvement
                and growth.
              </li>
              <li>
                Work closely with the team to brainstorm and develop innovative
                ideas for content and campaigns.
              </li>
            </ul>

            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Pursuing a Bachelor's degree in Marketing, Communications, or a
                related field.
              </li>
              <li>
                Strong understanding of major social media platforms (Facebook,
                Instagram, Twitter, LinkedIn, etc.) and their respective best
                practices.
              </li>
              <li>
                Excellent written and verbal communication skills, with a
                creative flair for content creation.
              </li>
              <li>
                Basic graphic design skills and experience with tools like
                Canva, Adobe Photoshop, or similar.
              </li>
              <li>
                Ability to analyze data and draw actionable insights to optimize
                social media strategies.
              </li>
              <li>
                Experience with social media management tools (e.g., Hootsuite,
                Buffer) is a plus.
              </li>
              <li>
                Highly organized with the ability to manage multiple projects
                simultaneously.
              </li>
              <li>
                Strong attention to detail and a proactive, can-do attitude.
              </li>
              <li>
                Passionate about staying updated with social media trends and
                digital marketing practices.
              </li>
              <li>
                Ability to work both independently and as part of a
                collaborative team.
              </li>
            </ul>

            <h4 className="dur">Duration:</h4>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest. We are eagerly looking forward to having you as a part
              of our young and dynamic team working towards collaborative
              success. .
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "seo-analyst-intern": {
    title: "SEO Analyst Internship",
    keyword:
      "HR internships for college students, People management internships for college students, HR management internships for freshers, HR internships for students, Learn recruitment internships",
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

            <Link to={`/internship-application/seo-analyst-intern`}>
              <button>I'm interested</button>
            </Link>
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
        <div className="job-info-description">
          <div className="job-description">
            <h3>
              <strong>Job Description</strong>
            </h3>
            <p>This is a remote position.</p>
            <h4 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> SEO Analyst - Internship
            </h4>
            <h3 className="dur">Position Overview:</h3>
            <p>
              As a Search Engine Optimization (SEO) Analyst Intern, you will be
              a key part of our dynamic marketing team, gaining hands-on
              experience in the fascinating world of SEO. This internship
              provides an excellent opportunity to learn and grow in a
              fast-paced environment while contributing to real SEO strategies
              and campaigns. If you’re an analytical and detail-oriented
              individual with a passion for SEO, this is the perfect opportunity
              to kickstart your career.
            </p>
            <h4 className="dur">Responsibilities:</h4>
            <ul>
              <li>
                Conduct keyword research to identify opportunities for website
                optimization.
              </li>
              <li>
                Manage and optimize website content to improve organic search
                rankings and drive traffic.
              </li>
              <li>
                Perform on-page and off-page SEO activities, including link
                building and content optimization.
              </li>
              <li>
                Analyze website performance metrics using tools like Google
                Analytics and provide actionable insights.
              </li>
              <li>
                Stay up-to-date with the latest SEO trends and best practices to
                ensure our strategies are current and effective.
              </li>
            </ul>

            <h3 className="dur">Qualifications:</h3>
            <ul>
              <li>
                Currently enrolled in a bachelor's or master's degree program.
              </li>
              <li>
                Strong passion for SEO and a desire to learn and grow in the
                field.
              </li>
              <li>
                Familiarity with SEO tools and techniques (Google Analytics,
                Google Search Console, etc.).
              </li>
              <li>
                Basic understanding of HTML and web development is a plus.
              </li>
              <li>Self-motivated, analytical, and a team player.</li>
            </ul>

            <h4 className="dur">Duration:</h4>
            <p>
              This internship position is typically for a duration of 3 months,
              with the possibility of extension based on performance and mutual
              interest. We are eagerly looking forward to having you as a part
              of our young and dynamic team working towards collaborative
              success. .
            </p>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul>
              <li>
                <strong>Industry:</strong> IT Services
              </li>
              <li>
                <strong>Eligibility:</strong> College Students or Freshers
              </li>
              <li>Remote Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
};

const JobListing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { domain } = useParams();
  const job = jobDetails[domain];

  if (!job) {
    return <div>Job listing not found</div>;
  }

  return (
    <Layout
      title={`${job.title} - IIT Academy`}
      keyword={job.keywords}
      // description={job.description}
    >
      <div className="job-listing">
        {/* <h1>{job.title}</h1> */}
        <div>{job.description}</div>
        <Link to={`/internship-application/${domain}`}>
          <button className="apply-button22">I'm interested</button>
        </Link>
      </div>
    </Layout>
  );
};

export default JobListing;
