import { Container, Box, Typography } from "@mui/material";
import { useApp } from "../../src/context/AppContext";
import StackIcon from "tech-stack-icons";
import PropTypes from "prop-types";
import "../Appear.css";
import { CUSTOM_ICONS, TECH_STACKS } from "../../constants/techStack.jsx";

const CustomIcon = ({ icon, isDark }) => {
  // Get custom icons with current theme
  const customIcons = CUSTOM_ICONS(isDark);

  // Return custom icon if it exists, otherwise use StackIcon
  if (customIcons[icon]) {
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {customIcons[icon]}
        <Typography sx={{ color: isDark ? "dark.text" : "#000" }}>
          {icon}
        </Typography>
      </Box>
    );
  }

  // Default to StackIcon for all other icons
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <StackIcon
        style={{ width: "40px", height: "auto" }}
        name={icon}
        alt={icon}
      />
      <Typography sx={{ color: isDark ? "dark.text" : "#000" }}>
        {icon}
      </Typography>
    </Box>
  );
};

CustomIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  isDark: PropTypes.bool.isRequired,
};

export default function TechStack() {
  const { isDark } = useApp();

  return (
    <Container
      sx={{
        color: isDark ? "dark.main" : "light.main",
        padding: "40px",
        textAlign: "center",
        borderRadius: "50px",
        scrollMarginTop: "80px",
      }}
      id="techstack"
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
        &lt; Tech Stack &gt;
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          my: 4,
        }}
      >
        {TECH_STACKS.map((techstack) => (
          <Box
            key={techstack.title}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              borderRadius: 2,
              padding: 3,
              width: { xs: "100%", md: "fit-content" },
              backgroundColor: isDark
                ? "dark.main" // Dark green background in dark mode
                : "light.main", // Lighter opacity for light mode
              backdropFilter: "blur(8px)",
              boxShadow: isDark ? "dark.shadow" : "light.shadow",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: isDark ? "dark.shadow" : "light.shadow", // Brighter green shadow on hover
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "bold",
                color: isDark ? "dark.text" : "#000",
              }}
            >
              {techstack.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
              }}
            >
              {techstack.icon.map((icon) => (
                <CustomIcon key={icon} icon={icon} isDark={isDark} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
