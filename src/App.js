import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import PagenotFound from "./components/PagenotFound";
import Sign from "./components/Login/Sign";
import Apply from "./components/ApplyNow/Apply";
import Internship from "./components/Internship/Internship";
import JobListing from "./components/Internship/Elements/Listing/JobListing";
import JobApplication from "./components/Internship/Elements/Apply/JobApplication";
import Roadmap from "./components/Developer/Roadmap/roadmap";
import OptionPage from "./components/Developer/Roadmap/OptionPage";
import mainOptions from "./components/Developer/Roadmap/mainOptions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path=" " element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PagenotFound />} />
        <Route path="/apply-online" element={<Apply />} />
        <Route path="/login" element={<Sign />} />
        <Route path="/internships" element={<Internship />} />
        <Route
          path="/internship-description/:domain"
          element={<JobListing />}
        />
        <Route
          path="/internship-application/:domain"
          element={<JobApplication />}
        />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route
          path="/roadmap/:optionId"
          element={<OptionPage options={mainOptions} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
