import React from "react";
import "./NewsLetterComponent.css";
import FooterLinksComponent from "./FooterLinksComponent";
import { Box } from "@mui/material";

export default function NewsLetterComponent(props: any) {
  const { title, slogan, button, input } = props;
  return (
    <Box className="footer-bot">
      <Box className="bot-footer-main">
        <Box className="footer-title-container">
          <Box component={"h1"} className="signup-title">
            {title}
          </Box>
          <Box component={"p"} className="signup-text">
            {slogan}
          </Box>
        </Box>
        <Box className="footer-email-container">
          <Box
            component={"input"}
            placeholder="Your E-mail"
            className="footer-input"
          >
            {input}
          </Box>
          <Box component={"button"} className="footer-button">
            {button}
          </Box>
        </Box>
      </Box>
      <Box className="short-links-container">
        <FooterLinksComponent />
      </Box>
    </Box>
  );
}
