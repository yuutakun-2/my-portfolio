import {
  AppBar,
  Toolbar,
  Button,
  TextField,
  InputAdornment,
  Box,
  Typography,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: "#282F37",
        marginBottom: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Sintony:wght@400;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
            .nav-button {
              text-transform: capitalize;
              position: relative;
              overflow: hidden;
            }
            .nav-button::after {
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              height: 2px;
              background-color: #218A4E;
              transform: scaleX(0);
              transition: transform 0.3s ease;
            }
            .nav-button:hover::after {
              transform: scaleX(1);
            }
            .logo {
              color: #218A4E;
              fontFamily: 'Ubuntu', sans-serif;
              fontSize: '24px';
              fontWeight: '700';
            }
          `}
        </style>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div className="logo">
              <Typography variant="h6" className="logo">
                <span>&lt;yuuta&gt;</span>
              </Typography>
            </div>
            <nav style={{ display: "flex", gap: "20px" }}>
              <Button
                className="nav-button"
                color="inherit"
                href="#services"
                style={{ fontFamily: "Sintony, sans-serif" }}
              >
                Services
              </Button>
              <Button
                className="nav-button"
                color="inherit"
                href="#projects"
                style={{ fontFamily: "Sintony, sans-serif" }}
              >
                Projects
              </Button>
              <Button
                className="nav-button"
                color="inherit"
                href="#contact"
                style={{ fontFamily: "Sintony, sans-serif" }}
              >
                Contact
              </Button>
            </nav>
          </div>
          <Box>
            <TextField
              variant="outlined"
              placeholder=""
              size="small"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#D9D9D9",
                borderRadius: "15px",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="center">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
