import React, { forwardRef } from "react";
import {
  Avatar,
  Card,
  Tooltip,
  Typography,
  Container,
  Menu,
  IconButton,
} from "@mui/material";
import profilePic from "../assets/Profile Pic.jpg";
import resume from "../assets/Nishie Groe- Resume (April).pdf";
import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Divider from "@mui/material/Divider";

const Header = ({ IntroRef, SkillsRef, EmploymentHistoryRef, ContactRef }) => {
  const scrollToSection = (elementRef: { current: { offsetTop: any } }) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80,
      behavior: "smooth",
    });
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div id="Left" style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={profilePic} className="logo" sx={{ mr: 2 }} />
        <Typography variant="h4" className="logo" sx={{ textWrap: "nowrap" }}>
          Nishie Groe
        </Typography>
      </div>

      <Container
        sx={{ display: { lg: "none", md: "flex", sm: "flex", xs: "flex" } }}
      >
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{ ml: 1 }}
        >
          <Typography variant="h6" sx={{ pr: 1 }}>
            Menu
          </Typography>
          {!open ? <MenuIcon /> : <MenuOpenIcon />}
        </IconButton>
      </Container>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: "30ch",
            },
          },
        }}
      >
        <MenuItem>
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
              scrollToSection(IntroRef);
            }}
          >
            Introduction
          </Typography>
        </MenuItem>
        <MenuItem>
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
              scrollToSection(SkillsRef);
            }}
          >
            Skills
          </Typography>
        </MenuItem>
        <MenuItem>
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
              scrollToSection(EmploymentHistoryRef);
            }}
          >
            Employment History
          </Typography>
        </MenuItem>
        <MenuItem>
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
              scrollToSection(ContactRef);
            }}
          >
            Contact Info
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
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
        </MenuItem>
      </Menu>

      <Container
        id="right"
        sx={{
          display: { lg: "flex", md: "none", sm: "none", xs: "none" },
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
              scrollToSection(IntroRef);
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
              scrollToSection(SkillsRef);
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
              scrollToSection(EmploymentHistoryRef);
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
              scrollToSection(ContactRef);
            }}
          >
            Contact Info
          </Typography>
        </Card>{" "}
        <Card sx={{ backgroundColor: "#E4EFE7", ml: 10 }}>
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
      </Container>
    </Card>
  );
};

export default Header;
