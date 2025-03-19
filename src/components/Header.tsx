import React from "react";
import { Avatar, Card, Tooltip, Typography } from "@mui/material";
import profilePic from "../assets/Profile Pic.jpg";
import resume from "../assets/Nishie-Groe-Software Engineer March.pdf";
import ArticleIcon from "@mui/icons-material/Article";

const Header = () => {
  return (
    <Card
      className="header"
      style={{
        padding: "8px",
        backgroundColor: "#FDFAF6",
        display: "flex",
        position: "absolute",
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
        <Card sx={{ backgroundColor: "#E4EFE7" }}>
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
              Resume
              <ArticleIcon sx={{ top: "5px" }} />
            </Typography>
          </Tooltip>
        </Card>
      </div>
    </Card>
  );
};

export default Header;
