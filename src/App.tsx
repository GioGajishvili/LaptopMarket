import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Auth from "./Pages/Auth/Auth";
import HomePage from "./Pages/HomePage/HomePage";
import Vapes from "./Pages/Vapes/Vapes";
import Liquids from "./Pages/Liquids/Liquids";
import Pods from "./Pages/Pods/Pods";
import Coils from "./Pages/Coils/Coils";
import ProductDetailes from "./Pages/ProductDetailes/ProductDetailes";
import Favorites from "./Pages/Favorites/Favorites";
import Cart from "./Pages/Cart/Cart";
import Rive, { useRive } from "@rive-app/react-canvas";

function App() {
  const [count, setCount] = useState({});

  const { rive, RiveComponent } = useRive({
    src: "public/assets/rivAnimations/5112-10287-poof-poof.riv",
    autoplay: true,
  });

  const theme = useTheme();

  const breakPoint = theme.breakpoints.down(1400);
  const isResponsive = useMediaQuery(breakPoint);

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <BrowserRouter>
      <Box className={"App"} style={{ backgroundColor: "white", position: "relative" }}>
        {isResponsive ? (
          <Box
            width={"100%"}
            height={"100vh"}
            sx={{ backgroundColor: "#3b3b4e" }}
          >
            <Rive src="public/assets/rivAnimations/5171-10382-simple-eye.riv" />
            <Typography
              bottom={30}
              position={"absolute"}
              textAlign={"center"}
              fontSize={25}
              width={"100%"}
              fontWeight={"bolder"}
              color={"white"}
              fontFamily={"Jura"}
            >
              Mobile View Not Ready Yet
            </Typography>
          </Box>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Vapes" element={<Vapes />} />
              <Route path="/Liquids" element={<Liquids />} />
              <Route
                path="/Pods"
                element={<Pods />}
              />
              <Route path="/Coils" element={<Coils />} />
              <Route path="Auth" element={<Auth />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/ProductDetailes" element={<ProductDetailes />} />
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
            <Footer />
          </>
        )}
      </Box>
    </BrowserRouter>
  );
}

export default App;
