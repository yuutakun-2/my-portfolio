import { Box, Typography, Container } from "@mui/material";
import {
  Devices,
  Sparkle,
  CirclesThree,
  LightbulbFilament,
} from "@phosphor-icons/react";

import "../Appear.css";
import { useApp } from "../../src/AppProvider";

const skills = [
  {
    icon: <Devices size={60} />,
    name: "Devices",
    title: "Responsive Design",
    desc: "Optimal user experience across various devices",
  },
  {
    icon: <Sparkle size={60} />,
    name: "Sparkle",
    title: "UX Research",
    desc: "Ability to create the best use experience for the users",
  },
  {
    icon: <CirclesThree size={60} />,
    name: "CirclesThree",
    title: "Visual Design",
    desc: "Unique & modern user interface designs",
  },
  {
    icon: <LightbulbFilament size={60} />,
    name: "LightbulbFilament",
    title: "Critical Thinking",
    desc: "Ability to create the most innovative digital products",
  },
];

export default function Skills() {
  const { isDark } = useApp();

  return (
    <Container
      sx={{
        backgroundColor: isDark ? "dark.background" : "light.background",
        padding: "40px",
        textAlign: "center",
      }}
      id="skills"
      className="block"
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "20px",
          fontFamily: "Ubuntu, sans-serif",
          fontWeight: "bold",
          color: isDark ? "dark.main" : "light.text",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        &lt; Skills &gt;
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
          my: 4,
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: isDark ? "dark.main" : "light.main",
              borderRadius: "10px",
              padding: "20px",
              height: "280px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              flex: "1 1 200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ marginBottom: "10px" }}>{skill.icon}</Box>
            <Typography
              variant="h5"
              sx={{
                marginBottom: "10px",
                fontFamily: "Ubuntu, bold",
                color: isDark ? "dark.text" : "light.text",
              }}
            >
              {skill.title}
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Sintony, sans-serif",
                  color: isDark ? "dark.text" : "light.text",
                }}
              >
                {skill.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
