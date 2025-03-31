import Header from "../components/pages/Header";
import HeroSection from "../components/pages/HeroSection";
import AboutMe from "../components/pages/AboutMe";
import Skills from "../components/pages/Skills";
import Projects from "../components/pages/Projects";
import TechStack from "../components/pages/TechStack";
import Footer from "../components/pages/Footer";

import { useApp } from "./AppProvider";
import { Box } from "@mui/material";

export default function App() {
  const { isDark } = useApp();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: isDark ? "dark.background" : "light.background",
      }}
    >
      <Header />
      <Box sx={{ margin: "16px 0" }} />
      <HeroSection />
      <Box sx={{ margin: "16px 0" }} />
      <AboutMe />
      <Box sx={{ margin: "16px 0" }} />
      <TechStack />
      <Box sx={{ margin: "16px 0" }} />
      <Projects />
      <Box sx={{ margin: "16px 0" }} />
      <Skills />
      <Box sx={{ margin: "16px 0" }} />
      <Footer />
    </Box>
  );
}
