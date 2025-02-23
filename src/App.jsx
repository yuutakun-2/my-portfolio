import Header from "../components/pages/Header";
import HeroSection from "../components/pages/HeroSection";
import AboutMe from "../components/pages/AboutMe";
import Skills from "../components/pages/Skills";
import Projects from "../components/pages/Projects";
import TechStack from "../components/pages/TechStack";
import Footer from "../components/pages/Footer";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#282F37",
      }}
      maxWidth="lg"
    >
      <Header />
      <div style={{ margin: "16px 0" }} />
      <HeroSection />
      <div style={{ margin: "16px 0" }} />
      <AboutMe />
      <div style={{ margin: "16px 0" }} />
      <TechStack />
      <div style={{ margin: "16px 0" }} />
      <Projects />
      <div style={{ margin: "16px 0" }} />
      <Skills />
      <div style={{ margin: "16px 0" }} />
      <Footer />
    </div>
  );
}
