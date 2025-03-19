import React from "react";
import { Avatar, Card, Tooltip, Typography } from "@mui/material";
import img1 from "../assets/IMG_2444.jpg";

const Introduction = () => {
  return (
    <Card
      className="Introduction"
      sx={{
        backgroundColor: "#FDFAF6",
        padding: "5px",
        margin: "15px",
        display: "flex",
        placeContent: "center",
      }}
    >
      <div
        style={{ width: "50%", alignContent: "center", marginRight: "80px" }}
      >
        <Typography variant="h2">
          Hey! I'm <span style={{ color: "#36C0F0" }}>Nishie</span>,
        </Typography>
        <br />
        <br />
        <Typography variant="body1" sx={{ textAlign: "left" }} fontSize="20px">
          Software Engineer with a bachelor's degree from WIU in MIS and over 7
          years of experience at a leading Fortune 500 company, excelling in
          full-stack development, frontend development, and Agile methodologies.
          Demonstrates a visionary approach to system architecture and user
          experience, leveraging skills in ReactJS/AngularJS, microservices, and
          AWS. Proven ability to lead international teams and streamline
          software lifecycles. Passionate about empowering teams and enhancing
          software lifecycles to achieve strategic business objectives.
        </Typography>
      </div>
      <div style={{ width: "30%", marginRight: "-15px" }}>
        <img
          src={img1}
          style={{ maxWidth: "100%", height: "auto", borderRadius: "20px" }}
        />
      </div>
    </Card>
  );
};

export default Introduction;
