import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApplicationBox from "../../../Internship/Elements/Box/ApplicationBox";
import frontendImg from "../../../../assests/Internship/frontend.jpeg";
import fullstackImg from "../../../../assests/Internship/full-stack-development.gif";
import pythonImg from "../../../../assests/Internship/python.jpeg";

const Cards = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cards-container w-full min-h-screen flex flex-col items-center px-8 sm:px-32 gap-1 pt-12 md:pt-16"
      style={{ color: "#333", paddingTop: "30px" }}
    >
      <div className="w-full pt-6 sm:pt-12 border-b-[1px] border-gray-300 pb-0 sm:pb-3 flex justify-between items-center">
        <h1 className='text-4xl sm:text-5xl font-["Founders_Grotesk_Condensed"] tracking-tight text-center'>
          Our Internship Programs
        </h1>
        <Link to="/internships">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              fontWeight: "bold",
              marginLeft: "auto",
              backgroundColor: isHovered ? "orange" : "white",
              border: `1px solid ${isHovered ? "orange" : "black"}`,
              color: isHovered ? "white" : "black",
              padding: "0.5rem 1rem",
              borderRadius: "30px",
              transition: "all 0.3s ease",
            }}
          >
            View All
          </button>
        </Link>
      </div>
      <div className="application-boxes">
        <ApplicationBox
          imageSrc={frontendImg}
          heading="Frontend Web Development"
          content="Embark on a transformative journey into the world of frontend development with our immersive 4-week internship program. From the convenience of your home, dive deep into the essentials of crafting captivating user experiences using HTML, CSS, and JavaScript. Unlock the secrets of responsive design and delve into modern frameworks like React.js and Vue.js."
          domain="/internship-description/frontend-devlopment-intern"
        />
        <ApplicationBox
          imageSrc={fullstackImg}
          heading="Full Stack Web Development"
          content="Experience the best of both worlds with our intensive 4-week full-stack web development internship program. From the comfort of your home, delve into the dynamic realm of full-stack development, mastering the fusion of frontend and backend technologies. Learn to architect seamless user interfaces with HTML, CSS, and JavaScript, while also diving deep into Node.js, or other languages."
          domain="/internship-description/full-stack-devlopment-intern"
        />
        <ApplicationBox
          imageSrc={pythonImg}
          heading="Python Development"
          content="Join our 4-week comprehensive internship program and master the fundamentals of programming in Python from the comfort of your own home. Gain the skills and knowledge to apply for exciting job opportunities in the field. In this program, you will learn everything from web development to the deployment of Python-based web applications. Get certified."
          domain="/internship-description/python-devlopment-intern"
        />
      </div>
    </div>
  );
};

export default Cards;
