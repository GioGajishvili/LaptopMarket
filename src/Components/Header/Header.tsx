import "./Header.css";
import { CiUser } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { Badge, Box, IconButton, Typography, TypographyProps } from "@mui/material";
import { CSSProperties, styled } from "@mui/styles";
import { useEffect, useState } from "react";

const HeaderTypography = styled((props: any) => (
  <Typography
    variant="body1"
    {...props}
    sx={{
      fontFamily: "Jura",
      fontSize: "12px",
      marginTop: "4px",
      color: "white",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "18px",
    }}
  />
))(({ theme }) => ({}));

function Header() {
  const navigate = useNavigate();
  const [badgeCount, setBadgeCount] = useState(0);

  useEffect(() => {
    window.addEventListener("storage", () => {
      const cartItems = localStorage.getItem("cartItems");
      if (cartItems) {
        setBadgeCount((JSON.parse(cartItems) as any[]).length);
      } else {
        setBadgeCount(0);
      }
    });
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setBadgeCount((JSON.parse(cartItems) as any[]).length);
    } else {
      setBadgeCount(0);
    }
  }, [localStorage.getItem("cartItems")]);

  return (
    <Box style={{ zIndex: 100 }} className="header">
      <Box
        className="black-line"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "280px",
        }}
      >
        <HeaderTypography>
          Mon-Fri :{" "}
          <Box component={"mark"} sx={{ backgroundColor: "transparent", color: "grey" }}>
            10:00 AM - 20:00 PM
          </Box>
        </HeaderTypography>
        <HeaderTypography>Buy a vape from us and get our premium e-liquid for free 🎉🎉</HeaderTypography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeaderTypography>Call Us: (995) 551 37 07 37 </HeaderTypography>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "20px",
            }}
          >
            <Box sx={{ width: "20px", marginTop: "10px" }} component={"a"} href="https://www.facebook.com" target="_blank">
              <FaFacebookSquare color="white" className="facebook-logo" />
            </Box>

            <Box sx={{ width: "20px", marginTop: "10px" }} component={"a"} href="https://www.instagram.com" target="_blank">
              <FiInstagram color="white" className="instagram-logo" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="routing-container">
        <Box
          className="main-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "100px",
          }}
        >
          <Box>
            <Box component={"img"} className="logo-for-header" src="./assets/images/LogoForHeader.png" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex",
              alignItems: "center",
              gap: "32px",
            }}
          >
            <Link to="/" className="header-filters" style={{ marginLeft: "30px" }}>
              Home
            </Link>
            <Link to="/Vapes" className="header-filters">
              Laptops
            </Link>
            <Link to="/liquids" className="header-filters">
              Liquids
            </Link>
            <Link to="/Pods" className="header-filters">
              Pods
            </Link>
            <Link to="/Coils" className="header-filters">
              Coils
            </Link>
            <Link to="/AboutUs" className="header-filters">
              About Us
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {/* <SearchBar /> */}
            <IconButton
              size="small"
              style={{
                outline: "none",
              }}
              onClick={() => navigate("/Auth")}
            >
              <CiUser className="user-icon" />
            </IconButton>
            <IconButton
              style={{
                outline: "none",
              }}
              onClick={() => navigate("/Favorites")}
            >
              <BsHeart />
            </IconButton>
            <IconButton
              style={{
                outline: "none",
              }}
              onClick={() => navigate("/Cart")}
            >
              <Badge badgeContent={badgeCount} color="primary">
                <RiShoppingCartLine />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
