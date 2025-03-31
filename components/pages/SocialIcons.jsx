import { IconButton } from "@mui/material";
import {
  GithubLogo,
  FacebookLogo,
  TelegramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

import { useApp } from "../../src/AppProvider";

export default function SocialIcons() {
  const { isDark } = useApp();

  return (
    <>
      <IconButton href="https://github.com/yuutakun-2">
        <GithubLogo size={48} color={isDark ? "dark.main" : "light.main"} />
      </IconButton>
      <IconButton href="https://www.facebook.com/yuutakun2">
        <FacebookLogo size={48} color={isDark ? "dark.main" : "light.main"} />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/arkarchanmyae/">
        <LinkedinLogo size={48} color={isDark ? "dark.main" : "light.main"} />
      </IconButton>
      <IconButton href="https://t.me/yuuta_kun2">
        <TelegramLogo size={48} color={isDark ? "dark.main" : "light.main"} />
      </IconButton>
    </>
  );
}
