import React, { forwardRef } from "react";
import { Avatar, Card, Tooltip, Typography, Link } from "@mui/material";
import image from "../assets/IMG_2521.jpg";
import { Email, Phone } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <Card
      className="header"
      style={{
        padding: "16px",
        backgroundColor: "#FDFAF6",
        zIndex: 999,
        top: "16px",
        justifySelf: "anchor-center",
        borderRadius: "15px",
      }}
    >
      <Typography variant="h4">Contact Info:</Typography>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            paddingRight: "15px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography variant="body1" width="400px" sx={{ mt: 8 }}>
              Want to get in contact? I'm available most times/days every week.
              Give me a call or shoot me an email!
            </Typography>
          </div>
          <br />
          <div
            style={{ display: "flex", alignSelf: "center", marginTop: "8px" }}
          >
            <Email />
            <Typography variant="body3">
              E-mail:{" "}
              <Link href="mailto: NishieGroe@gmail.com">
                NishieGroe@gmail.com
              </Link>
            </Typography>
          </div>
          <div
            style={{ display: "flex", alignSelf: "center", marginTop: "8px" }}
          >
            <Phone />
            <Typography variant="body3">
              Phone: <Link href="tel: 815-219-9863">(815) 219-9863</Link>
            </Typography>
          </div>
          <div
            style={{ display: "flex", alignSelf: "center", marginTop: "8px" }}
          >
            <LinkedInIcon />
            <Typography variant="body3">
              LinkedIn:{" "}
              <Link
                href="https://www.linkedin.com/in/nishie-groe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nishie Groe
              </Link>
            </Typography>
          </div>
        </div>
        <div>
          <img src={image} width="200vw" style={{ borderRadius: "15px" }}></img>
        </div>
      </div>
    </Card>
  );
};

export default Contact;
