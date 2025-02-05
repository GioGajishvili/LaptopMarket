import { Box } from "@mui/material";
import ProductDetailesSlider from "../../Components/ProductSlider/ProductDetailesSlider";
import { useEffect, useRef } from "react";

const ProductDetailes = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return <Box ref={ref} sx={{ maxWidth: "1400px", height: "800px", paddingTop: "200px", display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "0 auto" }}>
    <Box sx={{ width: "600px", height: "600px", display: "flex", flexDirection: "column", justifyContent: "flex-start", borderRadius: "50px" }}>
      <Box component="h2" sx={{ color: "black", fontFamily: "Jura", fontSize: "40px", fontWeight: "bold", margin: "0px 10px 10px 10px"}}>MSI MPG Trident 3</Box>
      <Box component="ul" sx={{ color: "black", fontFamily: "Jura", fontSize: "20px", fontWeight: "bold", margin: "40px 10px 10px 10px"}}></Box>
      <Box component="li" sx={{ color: "black", fontFamily: "Jura", fontSize: "20px", fontWeight: "bold", margin: "10px 10px 10px 10px"}}>Intel Core i7-10700F</Box>
      <Box component="li" sx={{ color: "black", fontFamily: "Jura", fontSize: "20px", fontWeight: "bold", margin: "10px 10px 10px 10px"}}>Intel H410</Box>
      <Box component="li" sx={{ color: "black", fontFamily: "Jura", fontSize: "20px", fontWeight: "bold", margin: "10px 10px 10px 10px"}}>Black</Box>
      <Box component="li" sx={{ color: "black", fontFamily: "Jura", fontSize: "20px", fontWeight: "bold", margin: "10px 10px 10px 10px"}}>NVIDIA MSI GeForce RTX 2060 SUPER 8GB</Box>
      <Box component="li" sx={{ color: "black", fontFamily: "Jura", fontSize: "20px", fontWeight: "bold", margin: "10px 10px 10px 10px"}}>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB </Box>
      <Box component="li" sx={{ color: "black", fontFamily: "Jura", fontSize: "20px", fontWeight: "bold", margin: "10px 10px 10px 10px"}}>Gaming Keyboard GK30 + Gaming Mouse GM11</Box>
      <Box component="li" sx={{ color: "black", fontFamily: "Jura", fontSize: "20px", fontWeight: "bold", margin: "10px 10px 10px 10px"}}>3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)</Box>
      <Box component="li" sx={{ color: "black", fontFamily: "Jura", fontSize: "20px", fontWeight: "bold", margin: "10px 10px 10px 10px"}}>Intel WGI219Vethernet (10/100/1000M)</Box>
      <Box component="li" sx={{ color: "black", fontFamily: "Jura", fontSize: "20px", fontWeight: "bold", margin: "10px 10px 10px 10px"}}>SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</Box>
    </Box>
    <Box sx={{ width: "600px", height: "600px", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <ProductDetailesSlider />
    </Box>
  </Box>;
};

export default ProductDetailes;
