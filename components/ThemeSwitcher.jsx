import { Box, IconButton } from "@mui/material";
import { useApp } from "../src/AppProvider";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

export default function ThemeSwitcher() {
  const { isDark, setIsDark } = useApp();
  return (
    <Box>
      {isDark ? (
        <IconButton onClick={() => setIsDark(false)}>
          <LightbulbIcon sx={{ color: isDark ? "dark.text" : "light.text" }} />
        </IconButton>
      ) : (
        <IconButton onClick={() => setIsDark(true)}>
          <LightbulbOutlinedIcon
            sx={{ color: isDark ? "dark.text" : "light.text" }}
          />
        </IconButton>
      )}
    </Box>
  );
}
