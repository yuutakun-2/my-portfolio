import { Box, Typography, Button, Container, Link } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "Movie World",
    description:
      "Movie database with tmdb api that shows the latest movies and other genres. User can also search by the movie name. Built with next js.",
    imgSrc: "../next-moviedb.png",
    href: "https://next-moviedb-yuuta.vercel.app/",
    category: ["Next.js", "Typescript", "TailwindCSS", "RadixUI"],
    repo: "https://github.com/yuutakun-2/next-moviedb",
  },
  {
    title: "Social Media App",
    description:
      "React app that allows users to post, like, comment and delete posts, with authentication and authorization. Since it is deployed on Vercel, Websocket is not working here, but the app is fully functional.",
    imgSrc: "../react-app-iota-rose.vercel.app.png",
    href: "https://react-app-iota-rose.vercel.app/",
    category: ["React", "React Query", "React Router", "MaterialUI"],
    repo: "https://github.com/yuutakun-2/react-app",
  },
  {
    title: "Social Media App - React Native",
    description:
      "Social media app that allows users to post, like, comment and delete posts, with authentication and authorization. Since it is deployed on Vercel, Websocket is not working here, but the app is fully functional.",
    imgSrc: ["../native-app.png"],
    category: [
      "React Native",
      "shadcn/ui",
      "TailwindCSS",
      "React Query",
      "Expo Router",
    ],
    repo: "https://github.com/yuutakun-2/native-app",
  },
  {
    title: "Express social media API",
    description:
      "Express backend API for the social media app. It is built with Express and JWT for authentication and authorization. The database is PostgreSQL from Neon.",
    imgSrc: "../express-api-ivory-seven.vercel.app.png",
    href: "https://express-api-ivory-seven.vercel.app/",
    category: ["ExpressJS", "PostgreSQL", "JWT", "Websocket"],
    repo: "https://github.com/yuutakun-2/express-api",
  },
  {
    title: "UI/UX Design",
    description:
      "User-friendly Figma designs for e-commerce website and mobile apps, and Online Class website, each with essential pages for navigation and functionality.",
    href: "https://www.figma.com/community/file/1413901689757292844/",
    imgSrc: "../figma.png",
    category: ["Figma"],
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
              textDecoration: "none",
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
              {project.category?.map((category, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  style={{
                    color: "#FFFFFF",
                    borderColor: "#218A4E",
                    fontFamily: "Sintony, regular",
                    fontSize: "0.75rem",
                    padding: 4,
                    borderRadius: "10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {category}
                </Button>
              ))}
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
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {project.href && (
                <Button
                  variant="contained"
                  href={project.repo}
                  style={{
                    backgroundColor: "#218A4E",
                    color: "#FFFFFF",
                    fontFamily: "Sintony, regular",
                    fontSize: "0.75rem",
                    padding: "5px",
                    borderRadius: "10px",
                    display: "flex",
                    gap: "5px",
                  }}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LanguageIcon />
                  Go to website
                </Button>
              )}
              {project.repo && (
                <Button
                  variant="contained"
                  href={project.repo}
                  style={{
                    backgroundColor: "#218A4E",
                    color: "#FFFFFF",
                    fontFamily: "Sintony, regular",
                    fontSize: "0.75rem",
                    padding: "5px",
                    borderRadius: "10px",
                    display: "flex",
                    gap: "5px",
                  }}
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                  See repo
                </Button>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
