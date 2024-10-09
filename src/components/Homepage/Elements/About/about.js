import React, { useState, useEffect } from "react";
import b0 from "../../../../assests/home_page/b0.png";
import b1 from "../../../../assests/home_page/b1.png";
import b2 from "../../../../assests/home_page/b2.png";
import b3 from "../../../../assests/home_page/b3.png";
import b4 from "../../../../assests/home_page/b4.png";
import b6 from "../../../../assests/home_page/b7.jpeg";
import "./about.css";

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="about-page w-full min-h-screen p-8 sm:p-16 lg:p-15 rounded-tl-3xl rounded-tr-2xl text-black">
      <h1 className="font-bold text-2xl sm:text-xs lg:text-2xl text-black">
        OFFICIAL RECOGNITION SECURED
      </h1>
      <div className="w-full flex flex-col lg:flex-row gap-5 border-t-[2px] border-[#738146] mt-1 lg:mt-2">
        <div className="w-full lg:w-1/2 h-auto lg:h-[40vh] bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl p-6 sm:p-10 lg:p-20 animate-card flex items-center justify-center">
          <div className="text-center">
            <p className="font-normal sm:text-justify text-xl sm:text-xl lg:text-2xl text-black mt-0">
              Garnering trust and validation from leading educational,
              governmental, and professional bodies.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-auto lg:h-[40vh] bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl p-6 sm:p-10 lg:p-20 animate-card flex items-center justify-center">
          <h1 className="font-normal text-lg sm:text-xl lg:text-xl mt-2 lg:mt-5 animate-text text-justify text-black">
            Our programs boast an array of prestigious certifications, including
            MCA and MSME certifications, attesting to our commitment to quality
            and excellence in the tech sector. We are also ISO Certified,
            ensuring international standards in our operations and training
            methodologies. Further solidifying our reputation, we're AICTE
            Approved and recognized by Startup India, highlighting our alignment
            with educational excellence and innovative entrepreneurial spirit.
          </h1>
        </div>
      </div>

      {/* Grid layout for images */}
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 w-full h-full p-0 pt-10">
        <div className="col-span-2 sm:col-span-1 flex justify-center">
          <img
            className="object-cover rounded-lg w-full h-auto"
            src={windowWidth < 640 ? b0 : b1} // Use b0 if width is less than 640px, else use b1
            alt="Responsive Image"
          />
        </div>
        {[b2, b3, b4, b6].map((src, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              windowWidth < 640 ? "w-[80%]" : "w-full"
            }`}
          >
            <img
              className="object-cover rounded-lg w-full h-auto"
              src={src}
              alt={`Image ${index + 2}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
