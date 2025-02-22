import { useState, useEffect } from "react";
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
    category: ["React", "React Query", "MaterialUI"],
    repo: "https://github.com/yuutakun-2/react-app",
  },
  {
    title: "Social Media App - React Native",
    description:
      "Social media app that allows users to post, like, comment and delete posts, with authentication and authorization. Since it is deployed on Vercel, Websocket is not working here, but the app is fully functional.",
    imgSrc: ["../native-app.png"],
    category: ["React Native", "shadcn/ui", "TailwindCSS", "React Query"],
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
  {
    title: "Blog website",
    description:
      "A blog website with PHP and Laravel with authentication and authorization, post blogs with images and categories. Admin dashboard to manage posts and categories.",
    repo: "https://github.com/yuutakun-2/techthoughts/",
    imgSrc: "../figma.png",
    category: ["PHP", "Laravel", "TailwindCSS"],
  },
  {
    title: "Mobile payment app (ongoing)",
    description:
      "A mobile payment app built with React Native and Typescript. Currently working - real-time currency exchange calculator with live rates from api frankfurter.",
    repo: "https://github.com/yuutakun-2/ypay",
    imgSrc: "../ypay.png",
    category: [
      "Typescript",
      "React Native",
      "TailwindCSS",
      "Expo Router",
      "React Query",
    ],
  },
];

const categories = [
  {
    title: "frontend",
    value: [
      "React",
      "MaterialUI",
      "shadcn/ui",
      "TailwindCSS",
      "NextJS",
      "RadixUI",
    ],
  },
  {
    title: "backend",
    value: [
      "ExpressJS",
      "NodeJS",
      "NextJS",
      "PostgreSQL",
      "mySQL",
      "SQLite",
      "JWT",
      "Websocket",
      "PHP",
      "Laravel",
      "React Router",
      "React Query",
    ],
  },
  {
    title: "Mobile",
    value: ["React Native", "Expo Router"],
  },
  {
    title: "UI/UX Design",
    value: ["Figma"],
  },
  {
    title: "All",
    value: [
      "React",
      "ExpressJS",
      "React Native",
      "Figma",
      "PHP",
      "Laravel",
      "PostgreSQL",
      "mySQL",
      "SQLite",
      "JWT",
      "Websocket",
      "TailwindCSS",
      "MaterialUI",
      "shadcn/ui",
      "NextJS",
      "RadixUI",
      "Expo Router",
      "React Router",
      "React Query",
    ],
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [animate, setAnimate] = useState(false);

  const handleCategoryClick = (categoryValues) => {
    setSelectedCategory(categoryValues);
    const filtered = projects.filter((project) =>
      project.category.some((cat) => categoryValues.includes(cat))
    );
    setFilteredProjects(filtered);
    setAnimate(true);
  };

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

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
        display: "flex",
        flexDirection: "column",
        // gap: "40px",
        scrollMarginTop: "80px",
      }}
      id="projects"
    >
      <Typography
        variant="h3"
        style={{
          fontFamily: "Ubuntu, sans-serif",
          fontWeight: "bold",
          color: "#218A4E",
        }}
      >
        &lt;<span style={{ color: "#FFFFFF" }}> Projects </span>&gt;
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          my: 4,
          flexWrap: "wrap",
        }}
      >
        {categories.map((categoryObj, index) => {
          const categoryKey = categoryObj.title;
          const categoryValues = categoryObj.value;
          const isActive = selectedCategory === categoryValues;
          return (
            <Box>
              <Button
                key={index}
                variant="outlined"
                onClick={() => handleCategoryClick(categoryValues)}
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: isActive ? "#218A4E" : "transparent",
                  borderColor: "#218A4E",
                  fontFamily: "Sintony, regular",
                  fontSize: "0.75rem",
                  paddingX: 2,
                  paddingY: 1,
                  borderRadius: "10px",
                  ":hover": {
                    backgroundColor: "#218A4E",
                    color: "#FFFFFF",
                  },
                }}
              >
                {categoryKey}
              </Button>
            </Box>
          );
        })}
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        <style>
          {`
            .fade-in {
              animation: fadeIn 0.5s ease-in-out;
            }
            
            @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
        {filteredProjects.map((project, index) => (
          <Box
            key={index}
            sx={{
              minHeight: "540px",
              width: "360px",
              border: "2px solid #218A4E",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "#282F37",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
            }}
            className={animate ? "fade-in" : ""}
          >
            <img
              src={project.imgSrc}
              alt={`Card ${index + 1}`}
              style={{ width: "full", height: "175px", borderRadius: "8px" }}
            />
            <Box
              display="flex"
              justifyContent="flex-start"
              width="100%"
              sx={{ gap: 1 }}
              flexWrap="wrap"
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
                    cursor: "default",
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
                fontFamily: "Ubuntu, bold",
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                  See repo
                </Button>
              )}
              {project.href && (
                <Button
                  variant="contained"
                  href={project.href}
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LanguageIcon />
                  Go to website
                </Button>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
