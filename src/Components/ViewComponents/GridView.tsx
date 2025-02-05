import "./GridView.css";
import { testProductArray } from "./TestProductArray";
import ProductModel from "./ProductModel";
import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import FilterCompononet from "../FilterComponent/Filter";
import Banner from "../Banner/Banner";

const GridViewComponent = () => {
  const [product, setProduct] = useState(testProductArray);
  const [favItems, setFavItems] = useState<any[]>(JSON.parse(localStorage.getItem("favItems")!) || []);
  const [cartItems, setCartItems] = useState<any[]>(JSON.parse(localStorage.getItem("cartItems")!) || []);

  useEffect(() => {
    localStorage.setItem("favItems", JSON.stringify(favItems));
  }, [favItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("storage"));
  }, [cartItems]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", margin: "150px" }}>
      <Box>
        {/* <FilterCompononet /> */}
      </Box>
      <Box component={"div"} className="container-grid-view">
        <Grid padding={"30px 0px"} container justifyContent={"center"}>
          <Banner />
        </Grid>
        {product.map((item) => (
          <ProductModel
            key={item.id}
            id={item.id}
            inStock={item.inStock}
            stockColor={item.stockColor}
            stockIndicator={item.stockIndicator}
            photos={item.photos}
            colorfulStarsCount={item.colorfulStarsCount}
            reviewCount={item.reviewCount}
            description={item.description}
            specialPrice={item.specialPrice}
            discountedPrice={item.discountedPrice}
            item={item}
            setFavItems={setFavItems}
            setCartItems={setCartItems}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GridViewComponent;
