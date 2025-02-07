import { Box, Typography, Container } from "@mui/material";
import {
  Devices,
  Sparkle,
  CirclesThree,
  LightbulbFilament,
} from "@phosphor-icons/react";

export default function Skills() {
  return (
    <Container
      style={{
        backgroundColor: "#282F37",
        color: "#FFFFFF",
        padding: "40px",
        textAlign: "center",
      }}
      id="skills"
    >
      <Typography
        variant="h2"
        style={{
          marginBottom: "40px",
          fontFamily: "Ubuntu, sans-serif",
          fontWeight: "bold",
          color: "#218A4E",
        }}
      >
        &lt;<span style={{ color: "#FFFFFF" }}> Skills </span>&gt;
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={4}
      >
        {/* Card 1 */}
        <Box
          style={{
            backgroundColor: "#218A4E",
            borderRadius: "10px",
            padding: "20px",
            height: "280px", // Set height to 280px
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Added shadow
            flex: "1 1 200px", // Flex-grow, flex-shrink, and base width
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <Devices size={60} />
          </div>
          <Typography
            variant="h5"
            style={{ marginBottom: "10px", fontFamily: "Ubuntu, bold" }}
          >
            Responsive Design
          </Typography>
          <Box style={{ textAlign: "center" }}>
            <Typography
              variant="body1"
              style={{ fontFamily: "Sintony, sans-serif" }}
            >
              Optimal user experience across various devices
            </Typography>
          </Box>
        </Box>

        {/* Card 2 */}
        <Box
          style={{
            backgroundColor: "#218A4E",
            borderRadius: "10px",
            padding: "20px",
            height: "280px", // Set height to 280px
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Added shadow
            flex: "1 1 200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <Sparkle size={60} />
          </div>
          <Typography
            variant="h5"
            style={{ marginBottom: "10px", fontFamily: "Ubuntu, bold" }}
          >
            UX Research
          </Typography>
          <Typography
            variant="body1"
            style={{ textAlign: "center", fontFamily: "Sintony, sans-serif" }}
          >
            Ability to create the best use experience for the users
          </Typography>
        </Box>

        {/* Card 3 */}
        <Box
          style={{
            backgroundColor: "#218A4E",
            borderRadius: "10px",
            padding: "20px",
            height: "280px", // Set height to 280px
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Added shadow
            flex: "1 1 200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <CirclesThree size={60} />
          </div>
          <Typography
            variant="h5"
            style={{ marginBottom: "10px", fontFamily: "Ubuntu, bold" }}
          >
            Visual Design
          </Typography>
          <Typography
            variant="body1"
            style={{ textAlign: "center", fontFamily: "Sintony, sans-serif" }}
          >
            Unique & modern user interface designs
          </Typography>
        </Box>

        {/* Card 4 */}
        <Box
          style={{
            backgroundColor: "#218A4E",
            borderRadius: "10px",
            padding: "20px",
            height: "280px", // Set height to 280px
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Added shadow
            flex: "1 1 200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <LightbulbFilament size={60} />
          </div>
          <Typography
            variant="h5"
            style={{ marginBottom: "10px", fontFamily: "Ubuntu, bold" }}
          >
            Critical Thinking
          </Typography>
          <Typography
            variant="body1"
            style={{ textAlign: "center", fontFamily: "Sintony, sans-serif" }}
          >
            Ability to create the most innovative digital products.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
