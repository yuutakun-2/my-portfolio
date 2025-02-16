import { Box, Typography, Divider, Container, IconButton } from "@mui/material";
import { User, Envelope, Phone, MapPin, ArrowUp } from "@phosphor-icons/react";
import SocialIcons from "./SocialIcons";

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
      }}
      id="footer"
    >
      <Container maxWidth="lg">
        <Box
          style={{
            display: "flex",
            // width: "100%",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
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
            <Typography
              variant="body1"
              style={{ marginTop: "10px", fontFamily: "Sintony, sans-serif" }}
            >
              Arkar Chan Myae @ Yuuta
            </Typography>
          </Box>
          <Box style={{ flex: 1 }}>
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
            <Box style={{ marginTop: "10px" }}>
              <Box display="flex" alignItems="center" marginBottom="10px">
                <User
                  size={20}
                  style={{ marginRight: "10px", color: "#218A4E" }}
                />
                <Typography
                  variant="body1"
                  style={{ fontFamily: "Sintony, sans-serif" }}
                >
                  Arkar Chan Myae
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" marginBottom="10px">
                <Envelope
                  size={20}
                  style={{ marginRight: "10px", color: "#218A4E" }}
                />
                <Typography
                  variant="body1"
                  style={{ fontFamily: "Sintony, sans-serif" }}
                >
                  arkarchanmyae2@gmail.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" marginBottom="10px">
                <Phone
                  size={20}
                  style={{ marginRight: "10px", color: "#218A4E" }}
                />
                <Typography
                  variant="body1"
                  style={{ fontFamily: "Sintony, sans-serif" }}
                >
                  +959-2540-64519
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" marginBottom="10px">
                <MapPin
                  size={20}
                  style={{ marginRight: "10px", color: "#218A4E" }}
                />
                <Typography
                  variant="body1"
                  style={{ fontFamily: "Sintony, sans-serif" }}
                >
                  Myanmar
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignSelf: "end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #218A4E",
                width: "fit-content",
                height: "fit-content",
                padding: "5px",
                paddingX: "20px",
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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          style={{ marginTop: "20px" }}
        >
          <Divider style={{ flex: 1, backgroundColor: "#218A4E", height: 1 }} />
          <SocialIcons />
          <Divider style={{ flex: 1, backgroundColor: "#218A4E", height: 1 }} />
        </Box>
      </Container>
    </Box>
  );
}
