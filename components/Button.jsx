import { Button as MuiButton } from "@mui/material";

const CustomButton = ({ color, children, onClick, href, target, download }) => {
  const styles = {
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "Ubuntu, bold",
    textTransform: "capitalize",
    padding: "10px 30px",
    backgroundColor: color === "green" ? "#218A4E" : "#DFDFDF",
    color: color === "green" ? "#FFFFFF" : "#282F37",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <MuiButton
      style={styles}
      onClick={onClick}
      href={href}
      target={target}
      download={download}
    >
      {children}
    </MuiButton>
  );
};

export default CustomButton;
