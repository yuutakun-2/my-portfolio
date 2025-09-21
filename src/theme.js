import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    dark: {
      main: "#218A4E",
      background: "#030e08",
      lighter: "#30c871",
      darker: "#030e08",
      text: "#fff",
      textBlack: "#000",
      darkShadow: "rgba(0, 80, 0, 0.5)",
    },
    light: {
      main: "#3E68A2",
      background: "#678fc5",
      lighter: "#678fc5",
      darker: "#0d1522",
      text: "#fff",
      textBlack: "#000",
      lightShadow: "rgba(0, 0, 0, 0.5)",
    },
  },
  typography: {
    fontFamily: '"Ubuntu", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          backgroundAttachment: "fixed",
          color: "#fff",
          "&.light": {
            background: "linear-gradient(135deg, #678fc5 0%, #3E68A2 100%)",
          },
        },
      },
    },
  },
});
