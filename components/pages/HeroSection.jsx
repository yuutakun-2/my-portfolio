import { Box, Typography, Container, Button } from "@mui/material";
import CustomButton from "../Button";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [fadeIn, setFadeIn] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100); // Delay for animation effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      style={{ backgroundColor: "#282F37", padding: "40px" }}
      maxWidth="lg"
      id="herosection"
    >
      <style>
        {`
          .default-text {
            color: #DFDFDF; /* Default white for text */
          }
        `}
      </style>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap-reverse",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* First column */}
        <Box display="flex" flexDirection="column" gap={4}>
          <Box>
            <Typography
              variant="h3"
              style={{
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "bold",
                color: "#FFFFFF",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Hello! I am <br />
            </Typography>
            <Typography
              variant="h3"
              style={{
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "bold",
                color: "#218A4E",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Arkar Chan Myae <br /> @ Yuuta
            </Typography>
          </Box>
          <Typography
            variant="h6"
            className="default-text"
            style={{ fontWeight: "normal" }}
          >
            Aspiring Full-Stack Developer
            <br />
            Fond in Tech Gadgets
            <br />
            Passionate about Tech that Improves Quality of Life
          </Typography>
          <Box display="flex" gap={4} marginY={2}>
            <CustomButton
              color="green"
              onClick={() => scrollToSection("footer")}
            >
              Hire Me!
            </CustomButton>
            <CustomButton color="default" href="../Resume.pdf" download>
              My resume
            </CustomButton>
          </Box>
        </Box>
        {/* Second column */}
        <Box display="flex" position="relative">
          <img
            src="../Arkar Chan Myae.png"
            alt="Profile photo"
            style={{
              borderRadius: "50px",
              width: "auto",
              height: "500px",
              zIndex: 1,
              opacity: fadeIn ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          />
          <Box
            style={{
              width: "100%",
              height: "250px",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
            id="hero-background"
          >
            <Box
              style={{
                backgroundColor: "#218A4E",
                borderRadius: "30px",
                width: "100%",
                height: "100%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
