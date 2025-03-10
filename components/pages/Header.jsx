import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
} from "@mui/material";

import { useState } from "react";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

const navigations = [
  {
    name: "aboutme",
    desc: "About Me",
  },
  {
    name: "projects",
    desc: "Projects",
  },
  {
    name: "footer",
    desc: "Contact",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: "40vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {navigations.map((navigation, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                className="nav-button"
                color="inherit"
                onClick={() => {
                  scrollToSection(navigation.name);
                }}
                style={{
                  fontFamily: "Sintony, sans-serif",
                }}
              >
                {navigation.desc}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: "#282F37",
        marginBottom: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Sintony:wght@400;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
            .nav-button {
              text-transform: capitalize;
              position: relative;
              overflow: hidden;
            }
            .nav-button::after {
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              height: 2px;
              background-color: #218A4E;
              transform: scaleX(0);
              transition: transform 0.3s ease;
            }
            .nav-button:hover::after {
              transform: scaleX(1);
            }
            .logo {
              color: #218A4E;
              fontFamily: 'Ubuntu', sans-serif;
              fontSize: '24px';
              fontWeight: '700';
            }
          `}
        </style>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div className="logo">
              <Button
                className="nav-button"
                color="inherit"
                onClick={() => scrollToSection("herosection")}
                style={{
                  fontFamily: "Sintony, sans-serif",
                }}
              >
                <Typography
                  style={{
                    color: "#218A4E",
                    fontWeight: "bold",
                    fontSize: "18px",
                    textTransform: "lowercase",
                  }}
                >
                  &lt; yuuta &gt;
                </Typography>
              </Button>
            </div>
          </div>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
              }}
            >
              {navigations.map((navigation, index) => {
                return (
                  <Button
                    key={index}
                    className="nav-button"
                    color="inherit"
                    onClick={() => scrollToSection(navigation.name)}
                    style={{
                      fontFamily: "Sintony, sans-serif",
                    }}
                  >
                    {navigation.desc}
                  </Button>
                );
              })}
            </Box>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Button onClick={toggleDrawer(true)}>
                <MenuIcon style={{ color: "#fff" }} />
              </Button>
              <Drawer
                open={open}
                anchor="right"
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: "#282F37",
                    color: "#FFFFFF",
                  },
                }}
              >
                {DrawerList}
              </Drawer>
            </Box>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
