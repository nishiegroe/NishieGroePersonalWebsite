import React, { forwardRef } from "react";
import { Avatar, Card, Tooltip, Typography } from "@mui/material";
import profilePic from "../assets/Profile Pic.jpg";
import resume from "../assets/Nishie-Groe-Software Engineer March.pdf";
import ArticleIcon from "@mui/icons-material/Article";

const Header = ({ firstRowRef, secondRowRef, thirdRowRef }) => {
  const scrollToSection = (elementRef: { current: { offsetTop: any } }) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <Card
      className="header"
      style={{
        padding: "8px",
        backgroundColor: "#FDFAF6",
        display: "flex",
        position: "fixed",
        zIndex: 999,
        top: "16px",
        justifySelf: "anchor-center",
        borderRadius: "15px",
      }}
    >
      <div id="Left" style={{ display: "flex", marginRight: "50px" }}>
        <Avatar src={profilePic} className="logo" sx={{ mr: 2 }} />
        <Typography variant="h4" className="logo">
          Nishie Groe
        </Typography>
      </div>
      <div
        id="right"
        style={{
          display: "flex",
          justifySelf: "anchor-center",
          alignItems: "center",
          paddingRight: "8px",
        }}
      >
        <Card sx={{ backgroundColor: "#E4EFE7", ml: 1 }}>
          <Typography
            variant="h6"
            sx={{
              ml: 1,
              mr: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={(e) => {
              scrollToSection(firstRowRef);
            }}
          >
            Introduction
          </Typography>
        </Card>
        <Card sx={{ backgroundColor: "#E4EFE7", ml: 1 }}>
          <Typography
            variant="h6"
            sx={{
              ml: 1,
              mr: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={(e) => {
              scrollToSection(secondRowRef);
            }}
          >
            Skills
          </Typography>
        </Card>
        <Card sx={{ backgroundColor: "#E4EFE7", ml: 1 }}>
          <Typography
            variant="h6"
            sx={{
              ml: 1,
              mr: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={(e) => {
              scrollToSection(secondRowRef);
            }}
          >
            Employment History
          </Typography>
        </Card>{" "}
        <Card sx={{ backgroundColor: "#E4EFE7", ml: 1 }}>
          <Typography
            variant="h6"
            sx={{
              ml: 1,
              mr: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={(e) => {
              scrollToSection(thirdRowRef);
            }}
          >
            Contact Info
          </Typography>
        </Card>{" "}
        <Card sx={{ backgroundColor: "#E4EFE7", ml: 50 }}>
          <Tooltip title="View my resume">
            <Typography
              variant="h6"
              sx={{
                ml: 1,
                mr: 1,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              onClick={(e) => {
                window.open(resume, "_blank");
              }}
            >
              View Resume
              <ArticleIcon sx={{ top: "5px", ml: 1 }} />
            </Typography>
          </Tooltip>
        </Card>
      </div>
    </Card>
  );
};

export default Header;
