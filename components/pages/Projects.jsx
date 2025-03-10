import { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Link } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../Appear.css";

const projects = [
  {
    title: "TechSuggest",
    description:
      "TechSuggest is a collaborative work of FutureMindsDev team on Google Gemini AI-powered Messaging bot for quick, personalized gadget recommendations, together with Facebook API for Messenger integration.",
    href: "https://www.messenger.com/t/569761872883181/",
    repo: "https://github.com/FutureMindsDev/TechSuggest.git",
    imgSrc: "../Facebook - Gemini.png",
    category: ["ExpressJS"],
  },
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
    title: "Tech Thoughts",
    description:
      "A blog website with PHP and Laravel with authentication and authorization, post blogs with images and categories. Admin dashboard to manage posts and categories.",
    repo: "https://github.com/yuutakun-2/techthoughts/",
    imgSrc: "../Tech Thoughts.png",
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [animate, setAnimate] = useState(false);

  const handleCategoryClick = (categoryKey, categoryValues) => {
    setSelectedCategory(categoryKey);
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
        textAlign: "center",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        display: "flex",
        padding: "40px",
        flexDirection: "column",
        scrollMarginTop: "80px",
      }}
      maxWidth="lg"
      id="projects"
      className="block"
    >
      <Typography
        variant="h4"
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
          const isActive = selectedCategory === categoryKey;
          return (
            <Button
              key={index}
              variant="outlined"
              onClick={() => handleCategoryClick(categoryKey, categoryValues)}
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
          );
        })}
      </Box>
      {/* Projects section */}
      <Box display="flex" justifyContent="center">
        <style>
          {`
            .swiper-button-prev,
            .swiper-button-next {
              color: #218A4E;
            }
          `}
        </style>
        <div style={{ maxWidth: "100%" }}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // spaceBetween={50}
            slidesPerView={1}
            // autoHeight={true}
            navigation
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 4,
                    flexDirection: { xs: "column", md: "row" },
                    paddingX: "12%",
                  }}
                >
                  {/* Left column */}
                  <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}>
                    <img
                      src={project.imgSrc}
                      alt={`Card ${index + 1}`}
                      style={{
                        borderRadius: "8px",
                        objectFit: "contain",
                        width: "100%",
                      }}
                    />
                  </Box>
                  {/* Right column */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 2,
                      flex: 1,
                      width: { xs: "100%", md: "50%" },
                    }}
                  >
                    <Typography
                      variant="h5"
                      style={{
                        color: "#218A4E",
                        fontFamily: "Ubuntu, bold",
                        textAlign: "start",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      {project.category?.map((category, index) => (
                        <Button
                          key={index}
                          variant="outlined"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#FFFFFF",
                            borderColor: "#218A4E",
                            fontFamily: "Sintony, regular",
                            fontSize: "0.75rem",
                            padding: 4,
                            marginX: 4,
                            borderRadius: "10px",
                            cursor: "default",
                          }}
                        >
                          {category}
                        </Button>
                      ))}
                    </Box>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#FFFFFF",
                        fontFamily: "Sintony, regular",
                        textAlign: "start",
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
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Box>
    </Container>
  );
}
