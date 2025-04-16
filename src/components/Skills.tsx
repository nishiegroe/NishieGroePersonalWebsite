import React from "react";
import {
  Avatar,
  Card,
  Tooltip,
  Typography,
  Rating,
  Container,
} from "@mui/material";

const Skills = () => {
  var skillSet: [string, number][] = [
    ["ReactJS", 5],
    ["Javascript", 5],
    ["SQL", 5],
    ["Redux", 5],
    ["Micro-Frontends (MFE)", 5],
    ["Git", 5],
    ["Support Management", 5],
    ["Communication", 5],
    ["Agile Methodology", 4],
    ["React Testing Library", 4],
    ["AngularJS", 4],
    ["CSS", 4],
    ["Amazon Web Services (AWS)", 4],
    ["Node.js ", 4],
    ["HTML", 4],
    ["Jira", 4],
    ["RESTful APIs", 4],
    ["CI/CD", 4],
    ["REST API's", 4],
    ["IaaS", 4],
    ["SaaS", 4],
    ["Single Sign-On (SSO)", 4],
    ["Cross-Team Collaboration", 4],
    ["System Architecture", 4],
    ["Microservices", 3],
    ["Jest", 3],
    ["Java", 3],
    ["Drone", 3],
    ["Spring/Springboot", 2],
    ["Python", 2],
  ];
  var addSkill = function (skill: string, rating: number, index: number) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
        key={index}
      >
        <Typography
          variant="body1"
          sx={{ textAlign: "right", pr: 2, textWrap: "nowrap" }}
        >
          {skill}
        </Typography>
        <Rating value={rating} readOnly />
      </div>
    );
  };

  return (
    <Card
      className="header"
      sx={{
        backgroundColor: "#FDFAF6",
        padding: "5px",
        margin: "15px",
        width: "100%",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Skills
      </Typography>
      <Container
        sx={{
          justifyItems: {
            lg: "initial",
            md: "right",
            sm: "right",
            xs: "right",
          },
          paddingRight: { md: "25%", sm: "25%", xs: "25%" },
        }}
      >
        {skillSet.map((skill, index) => {
          return addSkill(skill[0], skill[1], index);
        })}
      </Container>
    </Card>
  );
};

export default Skills;
