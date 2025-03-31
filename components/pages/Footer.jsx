import {
  Box,
  Typography,
  Divider,
  Container,
  IconButton,
  Button,
} from "@mui/material";
import {
  Envelope,
  Phone,
  MapPin,
  ArrowUp,
  GithubLogo,
  LinkedinLogo,
  TelegramLogo,
  FacebookLogo,
  Dot,
} from "@phosphor-icons/react";

import { useApp } from "../../src/AppProvider";
import { getYear } from "date-fns";

const currentYear = getYear(new Date());

const socialLink = [
  {
    name: "yuutakun-2",
    href: "https://www.github.com/yuutakun-2",
    icon: <GithubLogo size={20} />,
  },
  {
    name: "Arkar Chan Myae",
    href: "https://www.facebook.com/yuutakun2",
    icon: <FacebookLogo size={20} />,
  },
  {
    name: "Arkar Chan Myae",
    href: "https://www.linkedin.com/in/arkarchanmyae",
    icon: <LinkedinLogo size={20} />,
  },
  {
    name: "yuuta_kun2",
    href: "https://t.me/yuuta_kun2",
    icon: <TelegramLogo size={20} />,
  },
  {
    name: "arkarchanmyae2@gmail.com",
    href: "mailto:arkarchanmyae2@gmail.com",
    icon: <Envelope size={20} />,
  },
  {
    name: "+959254064519",
    href: "tel:+959254064519",
    icon: <Phone size={20} />,
  },
  {
    name: "Myanmar",
    href: "https://www.google.com/maps/place/Myanmar",
    icon: <MapPin size={20} />,
  },
];
export default function Footer() {
  const { isDark } = useApp();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      sx={{
        backgroundColor: isDark ? "dark.main" : "light.main",
        color: "#FFFFFF",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        scrollMarginTop: "80px",
      }}
      id="footer"
    >
      <Container maxWidth="lg">
        {/* First row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "40px",
          }}
        >
          {/* First row: Left column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                className="logo"
                sx={{
                  fontFamily: "Ubuntu, sans-serif",
                  fontWeight: "700",
                  color: isDark ? "dark.text" : "light.text",
                }}
              >
                &lt; yuuta &gt;
              </Typography>
              <Typography
                variant="body1"
                style={{ marginTop: "10px", fontFamily: "Sintony, sans-serif" }}
              >
                Building, coding, & growing one commit at a time.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignSelf: "start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid",
                  borderColor: isDark ? "dark.text" : "light.text",
                  width: "fit-content",
                  height: "fit-content",
                  padding: "10px",
                  gap: 1,
                  borderRadius: "10px",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={scrollToTop}
              >
                <ArrowUp size={24} color="white" />
                Back to top
              </Box>
            </Box>
          </Box>
          {/* First row: Right column */}
          <Box
            sx={{
              // flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "700",
                color: isDark ? "dark.text" : "light.text",
              }}
            >
              Contact
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {socialLink.map((link, index) => (
                <Button
                  key={index}
                  href={link.href}
                  target="_blank"
                  sx={{
                    color: isDark ? "dark.text" : "light.text",
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Sintony, sans-serif",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    textAlign: "left",
                    maxWidth: "100%",
                    border: "1px solid",
                  }}
                >
                  <Typography
                    sx={{
                      color: isDark ? "dark.text" : "light.text",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {link.icon}
                  </Typography>{" "}
                  <Typography sx={{ flexGrow: 1, textTransform: "none" }}>
                    {link.name}
                  </Typography>{" "}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
        {/* Second row */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          gap={2}
          style={{ marginTop: "20px" }}
        >
          <Divider
            sx={{
              flex: 1,
              backgroundColor: isDark ? "dark.darker" : "light.darker",
              height: 1,
            }}
          />
          <Typography
            variant="body1"
            style={{
              fontFamily: "Sintony, sans-serif",
            }}
          >
            Arkar Chan Myae @ Yuuta
          </Typography>
          <Dot size={40} color={isDark ? "dark.darker" : "light.darker"} />
          <Typography
            variant="body1"
            style={{
              fontFamily: "Sintony, sans-serif",
            }}
          >
            © {currentYear} | All rights reserved
          </Typography>
          <Divider
            sx={{
              flex: 1,
              backgroundColor: isDark ? "dark.darker" : "light.darker",
              height: 1,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
