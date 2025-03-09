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

import { getYear } from "date-fns";

const currentYear = getYear(new Date());

const socialLink = [
  {
    name: "yuutakun-2",
    href: "https://www.github.com/yuutakun-2",
    icon: <GithubLogo size={20} style={{ color: "#218A4E" }} />,
  },
  {
    name: "Arkar Chan Myae",
    href: "https://www.facebook.com/yuutakun2",
    icon: <FacebookLogo size={20} style={{ color: "#218A4E" }} />,
  },
  {
    name: "Arkar Chan Myae",
    href: "https://www.linkedin.com/in/arkarchanmyae",
    icon: <LinkedinLogo size={20} style={{ color: "#218A4E" }} />,
  },
  {
    name: "yuuta_kun2",
    href: "https://t.me/yuuta_kun2",
    icon: <TelegramLogo size={20} style={{ color: "#218A4E" }} />,
  },
  {
    name: "arkarchanmyae2@gmail.com",
    href: "mailto:arkarchanmyae2@gmail.com",
    icon: <Envelope size={20} style={{ color: "#218A4E" }} />,
  },
  {
    name: "+959254064519",
    href: "tel:+959254064519",
    icon: <Phone size={20} style={{ color: "#218A4E" }} />,
  },
  {
    name: "Myanmar",
    href: "https://www.google.com/maps/place/Myanmar",
    icon: <MapPin size={20} style={{ color: "#218A4E" }} />,
  },
];
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
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
                style={{
                  fontFamily: "Ubuntu, sans-serif",
                  fontWeight: "700",
                  color: "#218A4E",
                }}
              >
                &lt;yuuta&gt;
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
                  border: "1px solid #218A4E",
                  width: "fit-content",
                  height: "fit-content",
                  paddingX: "10px",
                  borderRadius: "10px",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={scrollToTop}
              >
                <IconButton>
                  <ArrowUp size={24} style={{ color: "#FFFFFF" }} />
                </IconButton>
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
              style={{
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "700",
                color: "#218A4E",
              }}
            >
              Contact
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "4px",
              }}
            >
              {socialLink.map((link, index) => (
                <Button
                  key={index}
                  href={link.href}
                  target="_blank"
                  style={{
                    color: "#FFFFFF",
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Sintony, sans-serif",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    textAlign: "left",
                    maxWidth: "100%",
                  }}
                >
                  <Typography sx={{ flexShrink: 0 }}>{link.icon}</Typography>{" "}
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
          <Divider style={{ flex: 1, backgroundColor: "#218A4E", height: 1 }} />
          <Typography
            variant="body1"
            style={{
              fontFamily: "Sintony, sans-serif",
            }}
          >
            Arkar Chan Myae @ Yuuta
          </Typography>
          <Dot size={40} style={{ color: "#218A4E" }} />
          <Typography
            variant="body1"
            style={{
              fontFamily: "Sintony, sans-serif",
            }}
          >
            © {currentYear} | All rights reserved
          </Typography>
          <Divider style={{ flex: 1, backgroundColor: "#218A4E", height: 1 }} />
        </Box>
      </Container>
    </Box>
  );
}
