import React from "react";
import a1 from "../../../../assests/home_page/a1.png";
import a2 from "../../../../assests/home_page/a2.png";
import a3 from "../../../../assests/home_page/a3.png";
import a4 from "../../../../assests/home_page/a4.png";
import "./landing.css";

const LandingPage = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const slideData = [
    {
      image: a1,
      title: "The Right Advice",
      description: "Quality guidance or support.",
    },
    {
      image: a2,
      title: "Recognised for Excellence",
      description: "An award or high achievement.",
    },
    {
      image: a3,
      title: "Compare the Best",
      description: "Comparing top contenders in a field.",
    },
    {
      image: a4,
      title: "Premium Services",
      description: "High-quality services offered.",
    },
  ];

  return (
    <div className="landing-page w-full min-h-screen text-black pt-2">
      {/* Text structure */}
      <div className="text-structure mt-20 md:mt-40 px-5 md:px-20">
        {[
          "Take Your Career to the Next Level with",
          "IIT Academy Internship Program",
          "Join Our Exciting Internship Journey",
        ].map((item, index) => (
          <div key={index} className="masker flex justify-center animate-text">
            <h1 className="uppercase leading-[9vw] text-[7vw] md:leading-[4vw] md:text-[3vw] font-['Founders_Grotesk_Condensed'] font-medium text-center">
              {item}
            </h1>
          </div>
        ))}
      </div>

      {/* Apply button */}
      <div className="flex content-center justify-center mb-7">
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contacts");
          }}
          className="apply-button flex gap-10 items-center px-5 py-3 mt-10 md:px-10 md:py-6 rounded-full font-bold"
        >
          Apply
        </button>
      </div>

      {/* Slide cards */}
      <div className="slide-cards border-t-[1px] border-zinc-800 mt-10 h-auto overflow-hidden flex flex-col md:flex-row content-center items-center justify-center">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className="card w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center items-center mt-10 mx-5 md:mx-2 animate-card"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-1/2 md:w-3/4 lg:w-1/2 h-auto object-cover rounded-full"
            />
            <h2 className="text-lg md:text-xl font-bold mt-4 text-center">
              {slide.title}
            </h2>
            <p className="text-center text-sm md:text-base mt-2">
              {slide.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
