import React from "react";
import { Link } from "react-router-dom";
import a1 from "../../../../assests/home_page/a1.png";
import a2 from "../../../../assests/home_page/a2.png";
import a3 from "../../../../assests/home_page/a3.png";
import a4 from "../../../../assests/home_page/a4.png";
import bg from "../../../../assests/home_page/bg.jpg";
import "./landing.css";

const LandingPage = () => {
  const useMediaQuery = (query) => {
    const [matches, setMatches] = React.useState(
      window.matchMedia(query).matches
    );
    React.useEffect(() => {
      const media = window.matchMedia(query);
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [query]);
    return matches;
  };

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isTablet = useMediaQuery("(min-width: 501px) and (max-width: 900px)");

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
    <div>
      <div
        className="landing-page w-full h-auto text-black pt-2"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Text structure */}
        <div className="text-structure mt-20 md:mt-40 px-5 md:px-20">
          {[
            "Take Your Career to the Next Level with",
            "IIT Academy Internship Program",
            "Join Our Exciting Internship Journey",
          ].map((item, index) => (
            <div
              key={index}
              className="masker flex justify-center animate-text"
            >
              <h1 className="uppercase leading-[9vw] text-[7vw] md:leading-[4vw] md:text-[3vw] font-['Founders_Grotesk_Condensed'] font-medium text-center">
                {item}
              </h1>
            </div>
          ))}
        </div>
        {/* Apply button */}
        <div className="flex justify-center w-full mb-0 pb-7">
          <Link to="/internships">
            <a className="apply-button flex gap-10 items-center px-5 py-3 mt-10 md:px-10 md:py-6 rounded-full font-bold bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              Apply
            </a>
          </Link>
        </div>
      </div>
      {/* Style Image */}
      <div>
        {isMobile && (
          <div className="slide-cards-mobile border-t-[1px] border-zinc-800 mt-0 h-auto overflow-hidden flex flex-col items-center justify-center">
            {slideData.map((slide, index) => (
              <div
                key={index}
                className="card w-[49%] flex flex-col justify-center items-center mt-10 mx-5 animate-card"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-1/2 h-auto object-cover rounded-full"
                />
                <h2 className="text-lg font-bold mt-4 text-center">
                  {slide.title}
                </h2>
                <p className="text-center text-sm mt-2">{slide.description}</p>
              </div>
            ))}
          </div>
        )}
        {isTablet && (
          <div className="slide-cards-tablet border-t-[1px] border-zinc-800 mt-0 h-auto overflow-hidden flex flex-wrap justify-between">
            {slideData.map((slide, index) => (
              <div
                key={index}
                className="w-[48%] flex justify-center items-center" // Each column takes 48% of the row
              >
                <div
                  className="card w-[75%] flex flex-col justify-center items-center mt-10 animate-card" // Card inside column takes 50% width
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-3/4 h-auto object-cover rounded-full"
                  />
                  <h2 className="text-xl font-bold mt-4 text-center">
                    {slide.title}
                  </h2>
                  <p className="text-center text-base mt-2">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {!isMobile && !isTablet && (
          <div className="slide-cards border-t-[1px] border-zinc-800 mt-0 h-auto overflow-hidden flex flex-col md:flex-row content-center items-center justify-center">
            {slideData.map((slide, index) => (
              <div
                key={index}
                className="card w-full flex flex-col justify-center items-center mt-10 mx-5  animate-card"
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
        )}
      </div>
    </div>
  );
};

export default LandingPage;
