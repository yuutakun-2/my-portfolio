import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

const theme = createTheme({
  palette: {
    dark: {
      main: "#218A4E",
      background: "#030e08",
      lighter: "#30c871",
      darker: "#030e08",
      text: "#fff",
      textBlack: "#000",
    },
    light: {
      main: "#3E68A2",
      background: "#678fc5",
      lighter: "#678fc5",
      darker: "#0d1522",
      text: "#fff",
      textBlack: "#000",
    },
  },
});

export default function AppProvider() {
  const [isDark, setIsDark] = useState(true);

  return (
    <AppContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={theme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
