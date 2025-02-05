import "./Cart.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdRemoveCircleOutline } from "react-icons/md";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Box, IconButton, Rating, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const CartModel = (props: any) => {
  const threeDots = "...";
  const { id, inStock, stockIndicator, photos, colorfulStarsCount, reviewCount, description, specialPrice, discountedPrice, removeFromCartClickHandler } =
    props;

  const [currentIndex, setCurrentIndex] = useState(Math.round(Math.random() * 4));
  const [images, setImages] = useState(photos);
  const [isUpdated, setIsUpdated] = useState(false);
  const [favoriteState, setFavoriteState] = useState(0);

  useEffect(() => {
    if (isUpdated) {
      setTimeout(() => {
        setIsUpdated(false);
      }, 500);
    }
  }, [isUpdated]);

  useEffect(() => {
    window.addEventListener("storage", () => {});
    const itemList = localStorage.getItem("favItems");
    if (itemList) {
      JSON.parse(itemList).filter((itm: any) => itm?.id === id)?.length ? setFavoriteState(1) : setFavoriteState(0);
    }
  }, []);

  const prevPhoto = () => {
    setTimeout(() => {
      setCurrentIndex((currentIndex + photos.length - 1) % photos.length);
    }, 500);

    setIsUpdated(true);
  };

  const nextPhoto = () => {
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % photos.length);
    }, 500);
    setIsUpdated(true);
  };

  return (
    <Box component={"div"} className="grid-view-product">
      <Box component={"div"} className="stock-indicator">
        <BsCheckCircleFill color={inStock ? "green" : "#cf1b2d"} />
        <Box
          component={"p"}
          style={{
            margin: "0px 0px 0px 10px",
            color: inStock ? "green" : "#cf1b2d",
          }}
        >
          {stockIndicator}
        </Box>
        <IconButton style={{ outline: "none" }} onClick={() => removeFromCartClickHandler(id)}>
          <MdRemoveCircleOutline size={22} />
        </IconButton>
        {/* <StyledRating
          value={favoriteState}
          name="customized-color"
          defaultValue={0}
          getLabelText={(value: number) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          max={1}
        /> */}
      </Box>
      <Box
        component={"div"}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Link to={"ProductDetailes"}>
          <Box component="img" className={`product-photo ${isUpdated ? "updated" : ""}`} src={images[currentIndex]} />
        </Link>
        <IconButton
          onClick={prevPhoto}
          component={"button"}
          className="product-arrow-icons"
          style={{
            position: "absolute",
            margin: "60px 0px 0px 20px",
            outline: "none",
          }}
        >
          <MdArrowBackIosNew size={20} />
        </IconButton>
        <IconButton
          onClick={nextPhoto}
          component={"button"}
          className="product-arrow-icons"
          style={{
            position: "absolute",
            margin: "60px 0px 0px 210px",
            outline: "none",
          }}
        >
          <MdArrowForwardIos size={20} />
        </IconButton>
      </Box>
      <Box component={"div"} className="review-stars">
        <Rating precision={0.5} name="read-only" value={colorfulStarsCount} readOnly />
        <Box component={"p"} style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
          {reviewCount}
        </Box>
      </Box>
      <Box component={"p"} className="product-describe">
        {description.length < 25 ? description : description.substring(0, 25) + threeDots}
      </Box>
      {specialPrice ? (
        <Box component={"div"} className="prices-container">
          <Box component={"p"} className="special-price" style={{ marginBottom: "10px" }}>
            {specialPrice}
          </Box>
          <Box component={"p"} style={{ marginLeft: "40px", marginBottom: "10px" }} className="discounted-price">
            {discountedPrice}
          </Box>
        </Box>
      ) : (
        <Box
          component={"p"}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
          className="discounted-price"
        >
          {discountedPrice}
        </Box>
      )}
    </Box>
  );
};

export default CartModel;
