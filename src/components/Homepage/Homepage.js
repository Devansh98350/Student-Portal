import React, { useEffect } from "react";
import Layout from "./../Layout";
import "./Homepage.css";
import LandingPage from "./Elements/Landing_Page/landing";
// import Different from "./Elements/Different/different";
import Process from "./Elements/Process/process";
import About from "./Elements/About/about";
import Domainns from "./Elements/Domains/domainns";
import Testimonials from "./Elements/Testimonials/testimonial";
import Faq from "./Elements/Faq";
import Subscribe from "./Elements/Testimonials/Subscribe";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Internships - IIT Academy">
      <LandingPage />
      {/*<Different />*/}
      <Process />
      <About />
      <Domainns />
      <Testimonials />
      <Subscribe />
      <Faq />
    </Layout>
  );
};

export default Homepage;
