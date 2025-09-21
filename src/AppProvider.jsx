import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { theme } from "./theme";
import { AppContext } from "./context/AppContext";
import App from "./App";

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
