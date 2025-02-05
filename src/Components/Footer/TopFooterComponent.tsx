import { Box } from "@mui/material";
import "./TopFooterComponent.css";

export default function TopFooterComponent(props: any) {
  const { icon, title, text } = props;
  return (
    <Box className="bubbles-container">
      <Box className="bubbles" id="first-bubble">
        {icon}
      </Box>
      <Box className="title-container">
        <Box component={"h4"} className="footer-title">
          {title}
        </Box>
      </Box>
      <Box className="text-container">
        <Box component={"p"} className="footer-text">
          {text}
        </Box>
      </Box>
    </Box>
  );
}
