import React from "react";
import b1 from "../../../../assests/home_page/b1.png";
import b2 from "../../../../assests/home_page/b2.png";
import b3 from "../../../../assests/home_page/b3.png";
import b4 from "../../../../assests/home_page/b4.png";
import b5 from "../../../../assests/home_page/b5.png";
import "./about.css";

const About = () => {
  return (
    <div className="about-page w-full min-h-screen p-8 sm:p-16 lg:p-20 rounded-tl-3xl rounded-tr-2xl text-black">
      <h1 className="font-bold text-3xl sm:text-xl lg:text-2xl text-black">
        OFFICIAL RECOGNITION SECURED
      </h1>
      <div className="w-full flex flex-col lg:flex-row gap-5 border-t-[1px] border-[#738146] mt-10 lg:mt-20">
        <div className="w-full lg:w-1/2 h-auto lg:h-[40vh] bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl p-6 sm:p-10 lg:p-20 animate-card flex items-center justify-center">
          <div className="text-center">
            <p className="font-normal text-lg sm:text-xl lg:text-2xl text-black mt-2">
              Garnering trust and validation from leading educational,
              governmental, and professional bodies.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-auto lg:h-[40vh] bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl p-6 sm:p-10 lg:p-20 animate-card flex items-center justify-center">
          <h1 className="font-normal text-lg sm:text-xl lg:text-xl mt-5 lg:mt-5 animate-text text-center text-black">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-auto h-full rounded-0 p-2 overflow-hidden pt-10">
        {[b1, b2, b3, b4, b5].map((src, index) => (
          <div
            key={index}
            className="border-0 border-white flex justify-center rounded-lg w-[70%] mx-auto h-auto lg:w-full lg:h-auto"
          >
            <img
              className="object-cover rounded-lg w-full h-auto"
              src={src}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
