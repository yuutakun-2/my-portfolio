import { Button as MuiButton } from "@mui/material";

const CustomButton = ({ color, children, onClick }) => {
  const styles = {
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "Ubuntu, bold",
    textTransform: "capitalize",
    padding: "15px 45px",
    backgroundColor: color === "green" ? "#218A4E" : "#DFDFDF",
    color: color === "green" ? "#FFFFFF" : "#282F37", // Changed to #282F37 for the other button
    fontSize: "20px", // Increased font size to 30 for bolder appearance
    fontWeight: "bold", // Added font weight for bolder text
  };

  return (
    <MuiButton style={styles} onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default CustomButton;
