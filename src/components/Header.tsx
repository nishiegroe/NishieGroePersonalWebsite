import React from "react";
import profilePic from "../assets/Profile Pic.jpg";
import { Avatar, Card, Typography } from "@mui/material";

const Header = () => {
  return (
    <Card
      className="header"
      style={{
        padding: "5px",
        backgroundColor: "#FDFAF6",
        display: "flex",
        position: "absolute",
        top: "15px",
        justifySelf: "anchor-center",
        borderRadius: "15px",
      }}
    >
      <Avatar src={profilePic} className="logo" sx={{ mr: 2 }} />
      <Typography variant="h4" className="logo">
        Nishie Groe
      </Typography>
    </Card>
  );
};

export default Header;
