import { Typography } from "@mui/material";
import Header from "./components/Header.tsx";
import React, { useRef } from "react";

import "./App.css";
import Introduction from "./components/Introduction.tsx";
import Skills from "./components/Skills.tsx";
import EmploymentHistory from "./components/EmploymentHistory.tsx";
import Contact from "./components/Contact.tsx";
import JobSearch from "./components/JobSearch.tsx";

function App() {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const thirdRowRef = useRef(null);

  return (
    <div className="app">
      <Header
        firstRowRef={firstRowRef}
        secondRowRef={secondRowRef}
        thirdRowRef={thirdRowRef}
      />
      <div className="body" style={{ marginTop: "50px" }}>
        <div ref={firstRowRef}>
          <Introduction />
        </div>
        <div
          ref={secondRowRef}
          id="secondRow"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Skills />
          <EmploymentHistory />
        </div>
        <div id="thirdrow" ref={thirdRowRef}>
          <Contact />
        </div>
        <JobSearch />
      </div>
    </div>
  );
}

export default App;
