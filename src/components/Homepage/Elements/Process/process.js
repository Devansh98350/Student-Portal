import React from "react";
import wd from "../../../../assests/home_page/sc.png";
import ad from "../../../../assests/home_page/si.png";
import ds from "../../../../assests/home_page/cg.png";
import "./process.css";

const Process = () => {
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

  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1073px)");

  return (
    <div>
      {isMobile && (
        <div className="process w-full h-full flex flex-col items-center px-4 sm:px-8 lg:px-32 py-10">
          <div className="w-full pt-0 border-b-[1px] border-zinc-300 pb-5 sm:pb-10">
            <h1 className='text-5xl sm:text-6xl font-["Neue_Montreal"] tracking-tight text-center animate-text'>
              Our Process
            </h1>
          </div>

          {/* Card 1 */}
          <div className="cardcontainer w-full flex flex-col mt-10 justify-center">
            <div className="card rounded-xl w-[90%] mx-auto bg-white flex flex-col justify-between p-0 animate-card border border-gray-200">
              <img src={wd} alt="Connect with us" className="rounded-t-xl" />
              <h2 className="text-xl font-bold text-gray-900 text-center mt-4">
                Apply on our Portal
              </h2>
              <div className="overflow-auto h-26">
                <p className="text-sm text-gray-700 text-center mt-2 pt-2 p-4">
                  Apply for the internship program through our internship
                  portal. If your skills align, someone will connect with you
                  within a week.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cardcontainer w-full flex flex-col mt-10 justify-center">
            <div className="card rounded-xl w-[90%] mx-auto bg-white flex flex-col justify-between p-0 animate-card border border-gray-200">
              <img src={ad} alt="Start Internship" className="rounded-t-xl" />
              <h2 className="text-xl font-bold text-gray-900 text-center mt-4">
                2-3 Interview Rounds:
              </h2>
              <div className="overflow-auto h-26">
                <p className="text-sm text-gray-700 text-center mt-2 pt-2 p-4">
                  Shortlisted candidates will be invited for interviews, which
                  consist of 2-3 rounds. Here, you'll have the opportunity to
                  meet with our team.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cardcontainer w-full flex flex-col mt-10 justify-center ">
            <div className="card rounded-xl w-[90%] mx-auto bg-white flex flex-col justify-between p-0 animate-card border border-gray-200">
              <img
                src={ds}
                alt="Certificates and Goodies"
                className="rounded-t-xl"
              />
              <h2 className="text-2xl font-bold text-gray-900 text-center mt-4">
                Start Internship:
              </h2>
              <div className="overflow-auto h-26">
                <p className="text-sm text-gray-700 text-center mt-2 pt-2 p-4">
                  Once you've successfully completed the interview rounds,
                  you'll be offered the internship position.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="cardcontainer w-full flex flex-col mt-10 justify-center">
            <div className="card rounded-xl w-[90%] mx-auto bg-white flex flex-col justify-between p-0 animate-card border border-gray-200">
              <img
                src={ad}
                alt="Certificate & Goodies"
                className="rounded-t-xl"
              />
              <h2 className="text-xl font-bold text-black-700 text-center mt-4">
                Certificate & Goodies
              </h2>
              <div className="overflow-auto h-26">
                <p className="text-sm text-gray-700 text-center mt-2 pt-2 p-4">
                  Upon successful completion, you'll receive certificates and
                  goodies as a token of appreciation for your hard work.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isTablet && (
        <div className="process w-full h-full flex flex-col items-center px-4 py-10">
          <div className="w-full pt-0 border-b-[1px] border-zinc-300 pb-5">
            <h1 className='text-4xl font-["Neue_Montreal"] tracking-tight text-center animate-text'>
              Our Process
            </h1>
          </div>
          <div className="cardcontainer w-full flex mt-10 flex-wrap justify-center gap-10">
            {/* Card 1 */}
            <div className="card rounded-xl w-[45%] bg-white flex flex-col justify-between p-4 animate-card border border-gray-200">
              <img src={wd} alt="Connect with us" className="rounded-t-xl" />
              <h2 className="text-xl font-bold text-gray-900 text-center mt-4">
                Apply on our Portal
              </h2>
              <div className="overflow-auto h-24">
                <p className="text-sm text-gray-700 text-center mt-2">
                  Apply for the internship program through our internship
                  portal. If your skills align, someone will connect with you
                  within a week.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card rounded-xl w-[45%] bg-white flex flex-col justify-between p-4 animate-card border border-gray-200">
              <img src={ad} alt="Start Internship" className="rounded-t-xl" />
              <h2 className="text-xl font-bold text-gray-900 text-center mt-4">
                2-3 Interview Rounds:
              </h2>
              <div className="overflow-auto h-24">
                <p className="text-sm text-gray-500 text-center mt-2">
                  Shortlisted candidates will be invited for interviews, which
                  consists of 2-3 rounds. Here, you'll have the opportunity to
                  meet with our team.
                </p>
              </div>
            </div>
          </div>
          <div className="cardcontainer w-full flex mt-5 flex-wrap justify-center gap-10">
            {/* Card 3 */}
            <div className="card rounded-xl w-[45%] bg-white flex flex-col justify-between p-4 animate-card border border-gray-200">
              {" "}
              {/* Set width to 50% */}
              <img
                src={ds}
                alt="Certificates and Goodies"
                className="rounded-t-xl"
              />
              <h2 className="text-xl font-bold text-gray-900 text-center mt-4">
                Start Internship:
              </h2>
              <div className="overflow-auto h-24">
                <p className="text-sm text-gray-700 text-center mt-2">
                  Once you've successfully completed the interview rounds,
                  you'll be offered the internship position.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="card rounded-xl w-[45%] bg-white flex flex-col justify-between p-4 animate-card border border-gray-200">
              {" "}
              {/* Set width to 50% */}
              <img src={ad} alt="Start Internship" className="rounded-t-xl" />
              <h2 className="text-xl font-bold text-gray-900 text-center mt-4">
                Certificate & Goodies
              </h2>
              <div className="overflow-auto h-24">
                <p className="text-sm text-gray-700 text-center mt-2">
                  Upon successful completion, you'll receive certificates and
                  goodies as a token of appreciation for your hard work.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isMobile && !isTablet && (
        <div className="process w-full h-full flex flex-col items-center px-4 pt-5 pb-2">
          <div className="w-full pt-0 sm:pt-5 border-b-[1px] border-zinc-300 pb-2">
            <h1 className='text-4xl sm:text-6xl font-["Neue_Montreal"] tracking-tight text-center animate-text'>
              Our Process
            </h1>
          </div>
          <div className="cardcontainer w-full flex mt-5 flex-wrap justify-center lg:justify-between gap-0">
            {/* Card 1 */}
            <div className="card rounded-xl w-[23%] bg-white flex flex-col justify-between p-4 animate-card">
              <img src={wd} alt="Connect with us" className="rounded-t-xl" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mt-4">
                Apply on our Portal
              </h2>
              <div className="overflow-auto h-32">
                <p className="text-sm sm:text-base text-gray-700 text-center mt-2">
                  Apply for the internship program through our internship
                  portal. If your skills align, someone will connect with you
                  within a week.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card rounded-xl w-[23%] bg-white flex flex-col justify-between p-4 animate-card">
              <img src={ad} alt="Start Internship" className="rounded-t-xl" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mt-4">
                2-3 Interview Rounds:
              </h2>
              <div className="overflow-auto h-32">
                <p className="text-sm sm:text-base text-gray-500 text-center mt-2">
                  Shortlisted candidates will be invited for interviews, which
                  consists of 2-3 rounds. Here, you'll have the opportunity to
                  meet with our team.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card rounded-xl w-[23%] bg-white flex flex-col justify-between p-4 animate-card">
              <img
                src={ds}
                alt="Certificates and Goodies"
                className="rounded-t-xl"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mt-4">
                Start Internship:
              </h2>
              <div className="overflow-auto h-32">
                <p className="text-sm sm:text-base text-gray-700 text-center mt-2">
                  Once you've successfully completed the interview rounds,
                  you'll be offered the internship position.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="card rounded-xl w-[23%] bg-white flex flex-col justify-between p-4 animate-card">
              <img src={ad} alt="Start Internship" className="rounded-t-xl" />
              <h2 className="text-xl sm:text-2xl font-bold text-black-700 text-center mt-4">
                Certificate & Goodies
              </h2>
              <div className="overflow-auto h-32">
                <p className="text-sm sm:text-base text-gray-700 text-center mt-2">
                  Upon successful completion, you'll receive certificates and
                  goodies as a token of appreciation for your hard work.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Process;
