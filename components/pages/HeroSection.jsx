import { Box, Typography, Container } from "@mui/material";
import CustomButton from "../Button"; // Importing the CustomButton
import {
  GithubLogo,
  FacebookLogo,
  Envelope,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [fadeIn, setFadeIn] = useState(false);

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
    >
      <style>
        {`
          .default-text {
            color: #DFDFDF; /* Default white for text */
          }
        `}
      </style>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Box display="flex" flexDirection="column" gap={4}>
            <Box>
              <Typography
                variant="h2"
                style={{
                  fontFamily: "Ubuntu, sans-serif",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Shadow stroke for "Hello! I am"
                }}
              >
                Hello! I am <br />
              </Typography>
              <Typography
                variant="h2"
                style={{
                  fontFamily: "Ubuntu, sans-serif",
                  fontWeight: "bold",
                  color: "#218A4E", // Green color for Arkar
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Shadow stroke for "Arkar Chan Myae"
                }}
              >
                Arkar Chan Myae <br /> @ Yuuta
              </Typography>
            </Box>
            <Typography
              variant="h6"
              className="default-text" // Use the internal CSS class for default text color
              style={{ fontWeight: "normal" }} // Set font weight to normal
            >
              Aspiring Full-Stack Developer
              <br />
              Fond in Tech Gadgets
              <br />
              Passionate about Tech that Improves Quality of Life
            </Typography>
            <Box display="flex" gap={4} marginY={2}>
              <CustomButton color="green">Hire Me!</CustomButton>
              <CustomButton color="default">Projects</CustomButton>
            </Box>
          </Box>
          {/* Button component will be created later */}
        </Box>
        <Box display="flex" position="relative">
          <Box
            style={{
              backgroundColor: "#218A4E",
              borderRadius: "50px",
              width: "500px",
              height: "250px",
              position: "absolute",
              bottom: 0,
              left: 0,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Added shadow to the box
            }}
          />
          <img
            src="../public/Arkar Chan Myae.png"
            alt="Profile photo"
            style={{
              borderRadius: "50px",
              width: "500px",
              height: "500px",
              position: "relative",
              zIndex: 1,
              opacity: fadeIn ? 1 : 0, // Fade in effect
              transition: "opacity 0.5s ease", // Transition for fade effect
            }}
          />
          <Box
            display="flex"
            flexDirection="column" // Changed to row for horizontal alignment
            alignItems="flex-end" // Align icons vertically centered
            marginTop="20px"
            position="absolute"
            right="-80px"
            bottom="0px"
            gap={4} // Adjusted gap between social icons
          >
            <GithubLogo size={48} color="#218A4E" />
            <FacebookLogo size={48} color="#218A4E" />
            <LinkedinLogo size={48} color="#218A4E" />
            <Envelope size={48} color="#218A4E" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
