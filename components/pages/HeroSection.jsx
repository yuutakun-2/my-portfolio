import { Box, Typography, Container, Button } from "@mui/material";
import { useEffect, useState } from "react";

import "../Appear.css";
import { useApp } from "../../src/context/AppContext";

export default function HeroSection() {
  const [fadeIn, setFadeIn] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { isDark } = useApp();

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
      sx={{
        backgroundColor: isDark ? "dark.background" : "light.background",
        padding: "40px",
        scrollMarginTop: "80px",
      }}
      maxWidth="lg"
      id="herosection"
    >
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
              sx={{
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "bold",
                color: isDark ? "dark.text" : "light.text",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Hello! I am <br />
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "bold",
                color: isDark ? "dark.main" : "light.main",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              Arkar Chan Myae <br /> @ Yuuta
            </Typography>
          </Box>
          <Typography
            variant="h6"
            className="default-text"
            sx={{
              fontWeight: "normal",
              color: isDark ? "dark.text" : "light.text",
            }}
          >
            Full-stack developer passionate about technology and 
            <br />
            innovations that revive old and dead technology, 
            <br />
            and enhance quality of life through user-friendly solutions.
          </Typography>
          <Box display="flex" gap={4} marginY={2}>
            <Button
              onClick={() => scrollToSection("footer")}
              sx={{
                borderRadius: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                fontFamily: "Ubuntu, bold",
                textTransform: "capitalize",
                padding: "10px 30px",
                backgroundColor: isDark ? "dark.main" : "light.main",
                color: isDark ? "dark.text" : "light.text",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Hire Me!
            </Button>
            <Button
              href="../Resume.pdf"
              download
              onClick={handleDownload}
              sx={{
                borderRadius: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                fontFamily: "Ubuntu, bold",
                textTransform: "capitalize",
                padding: "10px 30px",
                backgroundColor: isDark ? "dark.text" : "light.text",
                color: isDark ? "dark.textBlack" : "light.textBlack",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {isDownloading ? "Downloading..." : "Download Resume"}
            </Button>
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
            src="../arkar-chan-myae.svg"
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
            sx={{
              width: "100%",
              height: "250px",
              position: "absolute",
              left: 0,
              bottom: 0,
            }}
          >
            <Box
              sx={{
                backgroundColor: isDark ? "dark.main" : "light.main",
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
