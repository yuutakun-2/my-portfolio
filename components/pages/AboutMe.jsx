import { Box, Typography, Container, Button } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { useState } from "react";

import "../Appear.css";

const educations = [
  {
    title: "University of the People, Bachelor of Computer Science",
    duration: "Feb 2025 - Ongoing",
    description:
      "Focusing on fundamental programming, algorithms, and software development. Building a Strong Technical Foundation through coursework in data structures, web development, and database management, and problem-solving skills with a curriculum that emphasizes computational thinking, coding, and real- world applications.",
  },
  {
    title: "University of Medicine (1) Yangon, M.B.,B.S.",
    duration: "Dec 2015 - Mar 2020",
    description:
      "Specialized in Medicine, Surgery, Obstetrics & Gynecology, Pediatrics. Left university at Final Year Part (2) due to country instability.",
  },
  {
    title: "SEAMEO CHAT, Diploma in English Communication Skills",
    duration: "Nov 2017",
    description:
      "Focusing on language proficiency, literature, and academic writing. Building Strong Communication Skills through coursework in grammar, composition, and critical analysis.",
  },
];

export default function AboutMe() {
  const [collapsedStates, setCollapsedStates] = useState(
    Array(educations.length).fill(false)
  );

  const handleCollapseButton = (index) => {
    const newCollapsedStates = [...collapsedStates];
    newCollapsedStates[index] = !newCollapsedStates[index];
    setCollapsedStates(newCollapsedStates);

    const text = document.getElementById(index);
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  };

  return (
    <Container
      sx={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        textAlign: "center",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        scrollMarginTop: "80px",
        padding: "40px",
      }}
      maxWidth="lg"
      id="aboutme"
      className="block"
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "20px",
          fontFamily: "Ubuntu, sans-serif",
          fontWeight: "bold",
          color: "#218A4E",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        &lt;<span style={{ color: "#FFFFFF" }}> About me </span>&gt;{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "normal",
              px: 4,
              pt: 2,
              textAlign: "start",
            }}
          >
            Aspiring full-stack developer & UI/UX Designer with a strong
            foundation in Web Development, UI/UX, SEO, Sales & Marketing, and
            Communication Skills. Passionate about problem-solving, which led me
            to this career and has made me enjoy every step of the journey.
            <br />
            Driven to create intuitive and visually appealing digital
            experiences, with a strong passion for effectively explaining and
            communicating my ideas to customers through front-end development
            and UI/UX design.
            <br />
            My previous roles were to support my educational goals for web
            development. Now, eager to apply my skills and knowledge to a
            challenging role in the web development field.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 6,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Ubuntu, sans-serif",
              fontWeight: "bold",
              color: "#218A4E",
              textAlign: "right",
              pt: 2,
            }}
          >
            Education
          </Typography>
          <style>
            {`
              .education-text {
                animation: fade-in 0.5s ease-in-out;
              } 

              @keyframes fade-in {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
            `}
          </style>
          {educations.map((item, index) => (
            <Box key={index}>
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "#218A4E",
                  paddingX: 2,
                  paddingY: 1,
                  borderRadius: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Button
                    onClick={() => handleCollapseButton(index)}
                    color="#FFFFFF"
                  >
                    {collapsedStates[index] ? (
                      <ArrowDropUpIcon fontSize="large" />
                    ) : (
                      <ArrowDropDownIcon fontSize="large" />
                    )}
                  </Button>
                  <Typography
                    variant="h5"
                    textAlign={"right"}
                    sx={{
                      fontFamily: "Ubuntu, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Box
                  id={index}
                  className={"education-text"}
                  style={{ display: "none" }}
                >
                  <Typography
                    variant="h6"
                    textAlign={"right"}
                    sx={{
                      fontFamily: "Ubuntu, sans-serif",
                      fontWeight: "bold",
                      color: "#AAAAAA",
                    }}
                  >
                    {item.duration}
                  </Typography>
                  <Typography sx={{ textAlign: "right" }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
