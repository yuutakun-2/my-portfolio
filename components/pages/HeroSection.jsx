import { Box, Typography, Container, Button } from "@mui/material";
import CustomButton from "../Button";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [fadeIn, setFadeIn] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

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

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000); // Delay for download effect
  };

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
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 0, md: 4 },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* First column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: { xs: "100%", md: "50%", lg: "50%" },
          }}
        >
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
            An aspiring full-stack developer passionate about technology and
            innovations that enhance quality of life through user-friendly
            digital solutions.
          </Typography>
          <Box display="flex" gap={4} marginY={2}>
            <CustomButton
              color="green"
              onClick={() => scrollToSection("footer")}
            >
              Hire Me!
            </CustomButton>
            <CustomButton
              color="default"
              href="../Resume.pdf"
              download
              onClick={handleDownload}
            >
              {isDownloading ? "Downloading..." : "Download Resume"}
            </CustomButton>
          </Box>
        </Box>
        {/* Second column */}
        <Box
          sx={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            gap: 4,
            width: { xs: "100%", md: "50%", lg: "50%" },
          }}
        >
          <img
            src="../Arkar Chan Myae.png"
            alt="Profile photo"
            style={{
              borderRadius: "50px",
              width: { xs: "100%", md: "50%", lg: "50%" },
              height: { xs: "100%", md: "50%", lg: "50%" },
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
              left: 0,
              bottom: 0,
            }}
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
