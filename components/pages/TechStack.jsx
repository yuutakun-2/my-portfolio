import { Container, Box, Typography } from "@mui/material";
import StackIcon from "tech-stack-icons";

export default function TechStack() {
  return (
    <Container
      style={{
        color: "#FFFFFF",
        padding: "40px",
        textAlign: "center",
        borderRadius: "50px",
        scrollMarginTop: "80px",
      }}
      id="techstack"
    >
      <Typography
        variant="h3"
        style={{
          fontFamily: "Ubuntu, sans-serif",
          fontWeight: "bold",
          color: "#218A4E",
          paddingBottom: "40px",
        }}
      >
        &lt;<span style={{ color: "#FFFFFF" }}> My tech-stack </span>&gt;
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: 4, marginTop: "20px" }}
      >
        <StackIcon style={{ width: "80px", height: "auto" }} name="html5" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="css3" />
        <StackIcon
          style={{ width: "80px", height: "auto" }}
          name="tailwindcss"
        />
        <StackIcon style={{ width: "80px", height: "auto" }} name="js" />
        <StackIcon
          style={{ width: "80px", height: "auto" }}
          name="typescript"
        />
        <StackIcon style={{ width: "80px", height: "auto" }} name="php" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="laravel" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="mysql" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="figma" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="eslint" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 120"
          width="80"
          height="80"
        >
          <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
        </svg>
        <svg
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
        >
          <defs>
            <linearGradient
              id="sqlite-original-a"
              x1="-15.615"
              x2="-6.741"
              y1="-9.108"
              y2="-9.108"
              gradientTransform="rotate(90 -90.486 64.634) scale(9.2712)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#95d7f4" offset="0" />
              <stop stop-color="#0f7fcc" offset=".92" />
              <stop stop-color="#0f7fcc" offset="1" />
            </linearGradient>
          </defs>
          <path
            d="M69.5 99.176c-.059-.73-.094-1.2-.094-1.2S67.2 83.087 64.57 78.642c-.414-.707.043-3.594 1.207-7.88.68 1.169 3.54 6.192 4.118 7.81.648 1.824.78 2.347.78 2.347s-1.57-8.082-4.144-12.797a162.286 162.286 0 012.004-6.265c.973 1.71 3.313 5.859 3.828 7.3.102.293.192.543.27.774.023-.137.05-.274.074-.414-.59-2.504-1.75-6.86-3.336-10.082 3.52-18.328 15.531-42.824 27.84-53.754H16.9c-5.387 0-9.789 4.406-9.789 9.789v88.57c0 5.383 4.406 9.789 9.79 9.789h52.897a118.657 118.657 0 01-.297-14.652"
            fill="#0b7fcc"
          />
          <path
            d="M65.777 70.762c.68 1.168 3.54 6.188 4.117 7.809.649 1.824.781 2.347.781 2.347s-1.57-8.082-4.144-12.797a164.535 164.535 0 012.004-6.27c.887 1.567 2.922 5.169 3.652 6.872l.082-.961c-.648-2.496-1.633-5.766-2.898-8.328 3.242-16.871 13.68-38.97 24.926-50.898H16.899a6.94 6.94 0 00-6.934 6.933v82.11c17.527-6.731 38.664-12.88 56.855-12.614-.672-2.605-1.441-4.96-2.25-6.324-.414-.707.043-3.597 1.207-7.879"
            fill="url(#sqlite-original-a)"
          />
          <path
            d="M115.95 2.781c-5.5-4.906-12.164-2.933-18.734 2.899a44.347 44.347 0 00-2.914 2.859c-11.25 11.926-21.684 34.023-24.926 50.895 1.262 2.563 2.25 5.832 2.894 8.328.168.64.32 1.242.442 1.754.285 1.207.437 1.996.437 1.996s-.101-.383-.515-1.582c-.078-.23-.168-.484-.27-.773-.043-.125-.105-.274-.172-.434-.734-1.703-2.765-5.305-3.656-6.867-.762 2.25-1.437 4.36-2.004 6.265 2.578 4.715 4.149 12.797 4.149 12.797s-.137-.523-.782-2.347c-.578-1.621-3.441-6.64-4.117-7.809-1.164 4.281-1.625 7.172-1.207 7.88.809 1.362 1.574 3.722 2.25 6.323 1.524 5.867 2.586 13.012 2.586 13.012s.031.469.094 1.2a118.653 118.653 0 00.297 14.651c.504 6.11 1.453 11.363 2.664 14.172l.828-.449c-1.781-5.535-2.504-12.793-2.188-21.156.48-12.793 3.422-28.215 8.856-44.289 9.191-24.27 21.938-43.738 33.602-53.035-10.633 9.602-25.023 40.684-29.332 52.195-4.82 12.891-8.238 24.984-10.301 36.574 3.55-10.863 15.047-15.53 15.047-15.53s5.637-6.958 12.227-16.888c-3.95.903-10.43 2.442-12.598 3.352-3.2 1.344-4.067 1.8-4.067 1.8s10.371-6.312 19.27-9.171c12.234-19.27 25.562-46.648 12.141-58.621"
            fill="#003956"
          />
        </svg>
        <StackIcon style={{ width: "80px", height: "auto" }} name="prisma" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="reactjs" />
        <StackIcon
          style={{ width: "80px", height: "auto" }}
          name="reactquery"
        />
        <StackIcon
          style={{ width: "80px", height: "auto" }}
          name="reactrouter"
        />
        <StackIcon style={{ width: "80px", height: "auto" }} name="redux" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="nextjs" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="postman" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="docker" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="github" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            width="76"
            height="65"
            viewBox="0 0 76 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
          </svg>
        </Box>
        <StackIcon style={{ width: "80px", height: "auto" }} name="netlify" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="linux" />
        <StackIcon style={{ width: "80px", height: "auto" }} name="wordpress" />
      </Box>
    </Container>
  );
}
