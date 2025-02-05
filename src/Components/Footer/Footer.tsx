import "./Footer.css";
import { TbHeadset, TbUser, TbDiscount } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import TopFooterComponent from "./TopFooterComponent";
import NewsLetterCommponent from "./NewsLetterComponent";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box className="footer">
      <Box className="footer-top">
        <TopFooterComponent
          icon={<TbHeadset className="headset-icon" size="2rem" />}
          title={"Product Support"}
          text={
            "Up to 3 years on-site warranty available for your peace of mind."
          }
        />
        <TopFooterComponent
          icon={<TbUser className="userfooter-icon" size="2rem" />}
          title={"Personal Account"}
          text={
            "With big discounts, free delivery and a dedicated support specialist."
          }
        />
        <TopFooterComponent
          icon={<TbDiscount className="discount-icon" size="2rem" />}
          title={"Amazing Savings"}
          text={
            "Up to 70% off new Products, you can be sure of the best price."
          }
        />
      </Box>
      <NewsLetterCommponent
        title={"Sign Up To Our Newsletter"}
        slogan={"Be the first to hear about the latest offers"}
        button={"Subscribe"}
        linktitle={""}
      />
      <Box className="footer-botter-component">
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <Box component={"a"} href="https://www.facebook.com" target="_blank">
            <FaFacebookSquare color="white" className="facebook-logo-footer" />
          </Box>
          <Box component={"a"} href="https://www.instagram.com" target="_blank">
            <FiInstagram color="white" className="instagram-logo-footer" />
          </Box>
        </Box>
        <Box
          style={{
            marginLeft: "72%",
            marginTop: "10px",
          }}
        >
          <p className="copyright-text">Copyright © 2023 Gajexa Production</p>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
