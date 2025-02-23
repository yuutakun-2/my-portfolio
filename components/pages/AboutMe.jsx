import { Box, Typography, Container } from "@mui/material";
import CustomButton from "../Button";

export default function AboutMe() {
  return (
    <Container
      sx={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        padding: "40px",
        textAlign: "center",
        // minHeight: "100vh",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        scrollMarginTop: "80px",
      }}
      id="aboutme"
    >
      <Typography
        variant="h3"
        style={{
          marginBottom: "20px",
          fontFamily: "Ubuntu, sans-serif",
          fontWeight: "bold",
          color: "#218A4E",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        &lt;<span style={{ color: "#FFFFFF" }}> About me </span>&gt;{" "}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h6"
          style={{ marginBottom: "40px", fontWeight: "normal" }}
        >
          Aspiring full-stack developer with a strong foundation in Web
          Development, UI/UX, SEO, Sales & Marketing, and Communication Skills.
          Passionate about problem-solving, which led me to this career and has
          made me enjoy every step of the journey. Driven to create intuitive
          and visually appealing digital experiences, with a strong passion for
          effectively explaining and communicating my ideas to customers through
          front-end development and UI/UX design. My previous roles were to
          support my educational goals for web development. Now, eager to apply
          my skills and knowledge to a challenging role in the web development
          field.
        </Typography>
        <Box></Box>
      </Box>
    </Container>
  );
}
