import { Box, Typography, Divider, IconButton, Container } from "@mui/material";
import { User, Envelope, Phone, MapPin } from "@phosphor-icons/react";
import {
  GithubLogo,
  FacebookLogo,
  LinkedinLogo,
  TelegramLogo,
} from "@phosphor-icons/react";

export default function Footer() {
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
    >
      <Container>
        <Box
          style={{
            display: "flex",
            width: "100%", // Ensure it takes full width
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
              Handcrafted by Arkar Chan Myae @ Yuuta
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
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          style={{ marginTop: "20px" }}
        >
          <Divider style={{ flex: 1, backgroundColor: "#218A4E", height: 1 }} />
          <IconButton>
            <GithubLogo size={48} color="#218A4E" />
          </IconButton>
          <IconButton>
            <FacebookLogo size={48} color="#218A4E" />
          </IconButton>
          <IconButton>
            <LinkedinLogo size={48} color="#218A4E" />
          </IconButton>
          <IconButton>
            <TelegramLogo size={48} color="#218A4E" />
          </IconButton>
          <Divider style={{ flex: 1, backgroundColor: "#218A4E", height: 1 }} />
        </Box>
      </Container>
    </Box>
  );
}
