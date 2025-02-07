import { Box, Typography, Container } from "@mui/material";
import CustomButton from "../Button";

export default function Services() {
  return (
    <Container
      sx={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        padding: "40px",
        textAlign: "center",
        minHeight: "100vh",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        scrollMarginTop: "80px",
      }}
      id="services"
    >
      <Typography
        variant="h2"
        style={{
          marginBottom: "20px",
          fontFamily: "Ubuntu, sans-serif",
          fontWeight: "bold",
          color: "#218A4E",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        &lt;<span style={{ color: "#FFFFFF" }}> Services </span>&gt;{" "}
      </Typography>
      <Typography variant="h6" style={{ marginBottom: "40px" }}>
        I'm currently available as Full-Stack Web Developer and creative UI/UX
        Designer.
      </Typography>

      <Box display="flex" flexDirection="column" gap={4}>
        {/* First Card */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box style={{ flex: 1, textAlign: "left", marginRight: "10px" }}>
            <Typography variant="h5">Front-end</Typography>
            <Typography variant="body1" style={{ margin: "10px 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <CustomButton color="green">View Project</CustomButton>
          </Box>
          <img
            src="../public/front-end-image.png" // Replace with actual image path
            alt="Front-end Project"
            style={{ width: "50%", height: "auto" }} // Adjusted to share 50% space
          />
        </Box>

        {/* Second Card */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <img
            src="../public/back-end-image.png" // Replace with actual image path
            alt="Back-end Project"
            style={{ width: "50%", height: "auto" }} // Adjusted to share 50% space
          />
          <Box style={{ flex: 1, textAlign: "left", marginLeft: "10px" }}>
            <Typography variant="h5">Back-end</Typography>
            <Typography variant="body1" style={{ margin: "10px 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <CustomButton color="green">View Project</CustomButton>
          </Box>
        </Box>

        {/* Third Card */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box style={{ flex: 1, textAlign: "left", marginRight: "10px" }}>
            <Typography variant="h5">UI/UX</Typography>
            <Typography variant="body1" style={{ margin: "10px 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <CustomButton color="green">View Project</CustomButton>
          </Box>
          <img
            src="../public/ui-ux-image.png" // Replace with actual image path
            alt="UI/UX Project"
            style={{ width: "50%", height: "auto" }} // Adjusted to share 50% space
          />
        </Box>
      </Box>
    </Container>
  );
}
