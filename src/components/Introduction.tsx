import React from "react";
import { Avatar, Card, Container, Tooltip, Typography } from "@mui/material";
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
      <Container style={{ alignContent: "center" }}>
        <Container
          sx={{ display: "flex", alignItems: "center", placeContent: "center" }}
        >
          <Typography variant={"h2"}>
            Hey! I'm <span style={{ color: "#36C0F0" }}>Nishie</span>,
          </Typography>
          <Container
            sx={{
              display: { lg: "none", md: "flex", sm: "flex", xs: "flex" },
              width: "112px",
              margin: 0,
              ml: 2,
            }}
          >
            <img
              src={img1}
              style={{
                height: "150px",
                width: "112px",
                borderRadius: "20px",
              }}
            />
          </Container>
        </Container>

        <br />
        <Typography variant="body1" sx={{ textAlign: "left" }} fontSize="20px">
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
            fontSize="20px"
          >
            Software Engineer
          </Typography>{" "}
          with a
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
            fontSize="20px"
          >
            {" bachelor's degree"}
          </Typography>{" "}
          from WIU in{" "}
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
            fontSize="20px"
          >
            Managed Information Systems
          </Typography>{" "}
          and{" "}
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
            fontSize="20px"
          >
            over 7 years of experience
          </Typography>{" "}
          at a leading Fortune 500 company, excelling in full-stack development,
          frontend development, and Agile methodologies. Demonstrates a
          visionary approach to system architecture and user experience,
          leveraging skills in{" "}
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
            fontSize="20px"
          >
            ReactJS/AngularJS, Java, microservices, and AWS
          </Typography>
          . Proven ability to lead international teams and streamline software
          lifecycles. Passionate about empowering teams and enhancing software
          lifecycles to achieve strategic business objectives.
        </Typography>
      </Container>
      <Container
        sx={{
          display: { lg: "flex", md: "none", sm: "none", xs: "none" },
          width: "30%",
          marginRight: "-15px",
          minWidth: "100px",
        }}
      >
        <img
          src={img1}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "20px",
          }}
        />
      </Container>
    </Card>
  );
};

export default Introduction;
