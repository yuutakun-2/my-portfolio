import { Box, Typography, Button, Container } from "@mui/material";

const projects = [
  {
    title: "Project Title 1",
    description:
      "This is a brief description of the project. It highlights the main features and goals.",
    imgSrc: "https://via.placeholder.com/300x175",
  },
  {
    title: "Project Title 2",
    description:
      "This is a brief description of the project. It highlights the main features and goals.",
    imgSrc: "https://via.placeholder.com/300x175",
  },
  {
    title: "Project Title 3",
    description:
      "This is a brief description of the project. It highlights the main features and goals.",
    imgSrc: "https://via.placeholder.com/300x175",
  },
  {
    title: "Project Title 4",
    description:
      "This is a brief description of the project. It highlights the main features and goals.",
    imgSrc: "https://via.placeholder.com/300x175",
  },
  {
    title: "Project Title 5",
    description:
      "This is a brief description of the project. It highlights the main features and goals.",
    imgSrc: "https://via.placeholder.com/300x175",
  },
  {
    title: "Project Title 6",
    description:
      "This is a brief description of the project. It highlights the main features and goals.",
    imgSrc: "https://via.placeholder.com/300x175",
  },
];

export default function Projects() {
  return (
    <Container
      sx={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        padding: "40px",
        textAlign: "center",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        // overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        scrollMarginTop: "80px",
      }}
      id="projects"
    >
      <Typography
        variant="h2"
        style={{
          fontFamily: "Ubuntu, sans-serif",
          fontWeight: "bold",
          color: "#218A4E",
        }}
      >
        &lt;<span style={{ color: "#FFFFFF" }}> Projects </span>&gt;
      </Typography>
      <Box
        display="flex"
        flexWrap="nowrap"
        justifyContent="flex-start" // Changed to flex-start to ensure the first card is fully visible
        sx={{
          overflowX: "auto",
          overflowY: "hidden",
          // Hide scrollbar for Chrome, Safari and Opera:
          "&::-webkit-scrollbar": {
            display: "none",
          },
          // Hide scrollbar for Firefox:
          scrollbarWidth: "none",
          // Hide scrollbar for IE, Edge:
          "-ms-overflow-style": "none",
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            style={{
              height: "480px",
              border: "2px solid #218A4E",
              borderRadius: "10px",
              padding: "15px",
              margin: "10px",
              backgroundColor: "#282F37",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src={project.imgSrc}
              alt={`Card ${index + 1}`}
              style={{ width: "300px", height: "175px", borderRadius: "10px" }}
            />
            <Box
              display="flex"
              justifyContent="flex-start"
              width="100%"
              sx={{ gap: 1 }}
            >
              <Button
                variant="outlined"
                style={{ color: "#218A4E", borderColor: "#218A4E" }}
              >
                UI
              </Button>
              <Button
                variant="outlined"
                style={{ color: "#218A4E", borderColor: "#218A4E" }}
              >
                UX
              </Button>
            </Box>
            <Typography
              variant="h5"
              style={{
                color: "#218A4E",
                fontFamily: "Ubuntu, bold", // Changed to Ubuntu bold
                textAlign: "center",
              }}
            >
              {project.title}
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "#FFFFFF",
                fontFamily: "Sintony, regular",
                textAlign: "center",
              }}
            >
              {project.description}
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "#218A4E",
                fontFamily: "Sintony, regular",
                textAlign: "right",
                width: "100%",
              }}
            >
              Read more &gt;&gt;&gt;
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
