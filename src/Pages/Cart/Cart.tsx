import "./Cart.css";
import { useEffect, useRef, useState } from "react";
import {
  Grid,
  Button,
  Typography,
  Box,
} from "@mui/material";
import CartModel from "./CartModel";

const GridViewComponent = () => {
  const [product, setProduct] = useState<any[]>([]);

  const removeFromCartClickHandler = (id: string) => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(product.filter((itm) => itm?.id !== id))
    );
    setProduct(product.filter((itm) => itm?.id !== id));
    window.dispatchEvent(new Event("storage"));
  };
  const ref = useRef<any>();
  useEffect(() => {
    ref.current?.scrollIntoView(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("storage", () => {
      if (itemList) {
        setProduct(JSON.parse(itemList));
      }
    })
    const itemList = localStorage.getItem("cartItems");
    if (itemList) {
      setProduct(JSON.parse(itemList));
    }
  }, [localStorage.getItem("cartItems")]);

  return (
    <Grid
      spacing={10}
      container
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "150px",
        flexWrap: "wrap",
      }}
    >
      <Grid item container>
        {product.length ? (
          product.map((item) => (
            <CartModel
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
              removeFromCartClickHandler={removeFromCartClickHandler}
            />
          ))
        ) : (
          <Box fontFamily={"Jura"} color={"black"} fontWeight={"bolder"}
            width={"100%"}
            height={"100%"}
            textAlign={"center"}
            fontSize={"25px"}
          >
            No Items Yet In Cart 
          </Box>
        )}
      </Grid>
      <Grid
        item
        container
        justifyContent={"flex-end"}
        gap={"20px"}
        alignItems={"center"}
        paddingRight={20}
      >
        <Typography fontFamily={"Jura"} color={"black"} fontWeight={"bolder"}>
          {product.reduce((red, it) => {
            red += Number(
              (it?.specialPrice !== undefined
                ? it.specialPrice
                : it.discountedPrice
              )?.replace("$", "")
            );
            return red;
          }, 0)}
          $
        </Typography>
        <Button
            sx={{textTransform: "none", border: "1px solid black"}}
            onClick={() => {
            localStorage.setItem("cartItems", "[]");
            window.dispatchEvent(new Event("storage"));
          }}
        >
          <Typography fontFamily={"Jura"} color={"black"} fontWeight={"bolder"} >Checkout</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default GridViewComponent;
