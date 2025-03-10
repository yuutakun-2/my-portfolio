import { IconButton } from "@mui/material";
import {
  GithubLogo,
  FacebookLogo,
  TelegramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

export default function SocialIcons() {
  return (
    <>
      <IconButton href="https://github.com/yuutakun-2">
        <GithubLogo size={48} color="#218A4E" />
      </IconButton>
      <IconButton href="https://www.facebook.com/yuutakun2">
        <FacebookLogo size={48} color="#218A4E" />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/arkarchanmyae/">
        <LinkedinLogo size={48} color="#218A4E" />
      </IconButton>
      <IconButton href="https://t.me/yuuta_kun2">
        <TelegramLogo size={48} color="#218A4E" />
      </IconButton>
    </>
  );
}
