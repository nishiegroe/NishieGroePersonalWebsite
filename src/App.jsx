import { Container, Typography } from "@mui/material";
import Header from "./components/Header.tsx";
import React, { useRef } from "react";

import "./App.css";
import Introduction from "./components/Introduction.tsx";
import Skills from "./components/Skills.tsx";
import EmploymentHistory from "./components/EmploymentHistory.tsx";
import Contact from "./components/Contact.tsx";

function App() {
  const IntroRef = useRef(null);
  const SkillsRef = useRef(null);
  const EmploymentHistoryRef = useRef(null);
  const ContactRef = useRef(null);

  return (
    <div className="app">
      <Header
        IntroRef={IntroRef}
        SkillsRef={SkillsRef}
        EmploymentHistoryRef={EmploymentHistoryRef}
        ContactRef={ContactRef}
      />
      <div className="body" style={{ marginTop: "50px" }}>
        <div ref={IntroRef}>
          <Introduction />
        </div>
        <Container
          sx={{
            paddingLeft: "-15px",
            marginLeft: "-15px",
            padding: "0px",
            display: { lg: "none", md: "flex", sm: "flex", xs: "flex" },
          }}
          ref={SkillsRef}
          className="skillsContainer"
        >
          <Skills />
        </Container>
        <div id="secondRow" style={{ display: "flex", flexDirection: "row" }}>
          <Container
            sx={{
              display: { lg: "flex", md: "none", sm: "none", xs: "none" },
              width: "40%",
            }}
            ref={SkillsRef}
            className="skillsContainer"
          >
            <Skills />
          </Container>
          <Container
            sx={{
              pl: "0px",
              mr: "15px",
              width: { lg: "70%", md: "100%", sm: "100%", xs: "100%" },
            }}
            ref={EmploymentHistoryRef}
          >
            <EmploymentHistory />
          </Container>
        </div>

        <div id="thirdrow" ref={ContactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
