import { Typography } from "@mui/material";
import Header from "./components/Header.tsx";
import React, { useRef } from "react";

import "./App.css";
import Introduction from "./components/Introduction.tsx";
import Skills from "./components/Skills.tsx";
import EmploymentHistory from "./components/EmploymentHistory.tsx";

function App() {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  return (
    <div className="app">
      <Header firstRowRef={firstRowRef} secondRowRef={secondRowRef} />
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
        <Typography sx={{ padding: "2em" }} color="black" variant="h3">
          More to come!
        </Typography>
      </div>
    </div>
  );
}

export default App;
