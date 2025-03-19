import React from "react";
import {
  Avatar,
  Card,
  Tooltip,
  Typography,
  Box,
  List,
  ListItem,
} from "@mui/material";
import img1 from "../assets/IMG_2444.jpg";

const EmploymentHistory = () => {
  return (
    <Card
      className="header"
      sx={{
        backgroundColor: "#FDFAF6",
        padding: "5px",
        margin: "15px",
        placeContent: "center",
        width: "70%",
      }}
    >
      <Typography variant="h3">Employment History</Typography>
      <Card sx={{ p: 1, m: 1, bgcolor: "", pr: 3 }}>
        <Typography variant="h6" align="left">
          Senior Software Engineer - John Deere (Moline)
        </Typography>
        <List sx={{ listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Spearheaded UI/UX modernization, creating ReactJS Micro-Frontends
              to dismantle monolithic AngularJS and Java applications, enhancing
              maintainability and development efficiency.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Conducted international knowledge transfer, upskilling remote and
              local teams on ReactJS and UI/UX best practices, fostering global
              collaboration.{" "}
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Created multiple Micro-Frontends (MFE) to split up our monolithic
              application Created Drone CI/CD pipelines for our MFE’s.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Replaced out-of-date SOAP API’s with REST API’s
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Conceptualized and developed a container UI to effectively house
              micro-frontends, improving overall system architecture and user
              experience.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Made use of SaaS and AWS to host and deploy JS and Java
              applications
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Reworked and automated M/A processes using SQL functionality
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Created Drone CI/CD pipelines for our MFE’s
            </Typography>{" "}
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Assisted in creating a container UI to better house our MFE’s.
            </Typography>
          </ListItem>
        </List>
      </Card>
      <Card sx={{ p: 1, m: 1, pr: 3 }}>
        <Typography variant="h6" align="left">
          Software Engineer - John Deere (Moline)
        </Typography>

        <List sx={{ listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Optimized software development lifecycle, enhancing team
              productivity and reducing timeto-market for key product features
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Fostered cross-functional collaboration, aligning software
              development with business objectives and enhancing overall product
              quality
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Assisted in migrating applications to AWS
            </Typography>
          </ListItem>
        </List>
      </Card>
      <Card sx={{ p: 1, m: 1, bgcolor: "", pr: 3 }}>
        <Typography variant="h6" align="left">
          Engineering Development Program - John Deere (Moline)
        </Typography>

        <List sx={{ listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Conducted comprehensive analysis to identify and decommission
              underutilized ColdFusion applications, optimizing system resources
              and reducing maintenance costs.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Partnered with cross-functional teams to execute smooth transition
              from legacy systems, ensuring minimal disruption to business
              operations during migration process.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", left: "20px", p: 0 }}>
            <Typography variant="body2" align="left">
              Spearheaded SiteMinder to OKTA SSO migration in ColdFusion apps,
              enhancing security protocols. Analyzed and decommissioned
              underutilized applications, optimizing resources.
            </Typography>
          </ListItem>
        </List>
      </Card>
    </Card>
  );
};

export default EmploymentHistory;
