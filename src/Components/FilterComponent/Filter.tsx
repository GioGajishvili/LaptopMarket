import { Box, Button, styled } from "@mui/material";
import { useState } from "react";
import { testProductArray } from "../ViewComponents/TestProductArray";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const FilterCompononet = () => {
  const [product, setProduct] = useState(testProductArray);
  const [toggleCategory, setToggleCategory] = useState(false);
  const [togglePrice, setTogglePrice] = useState(false);
  const [parent, enableAnimations] = useAutoAnimate();

  const toggleButton = () => {
    setToggleCategory(!toggleCategory);
  };

  const FilterButton = styled((props: any) => (
    <Box
      variant="body2"
      {...props}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Jura",
        fontSize: "16px",
        marginTop: "20px",
        fontStyle: "normal",
        fontWeight: 600,
      }}
    />
  ))(({ theme }) => ({}));

  return (
    <Box ref={parent} component={"div"} className="leftside-filter">
      <Box>
        <Box component={"h1"} style={{ fontSize: "28px", marginTop: "20px", color: "black" }}>
          Filters
        </Box>
        <Button
          component={"button"}
          style={{
            fontFamily: "Jura",
            outline: "none",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          className="clear-filters-button"
        >
          Clear Filters
        </Button>
      </Box>
      <Box component={"div"}>
        <FilterButton
          className="filter-category-button"
          onClick={() => toggleButton()}
        sx={{color: "black"}}
        >
          Category
          <MdArrowBackIosNew style={{ margin: "5px 0px 1px 16" }} size="12px" />
        </FilterButton>
      </Box>
      {toggleCategory && (
        <Box
          component={"div"}
          style={{
            color: "black",
            display: "flex",
            flexDirection: "column",
            marginTop: "8px",
          }}
        >
          <Link to={"/"} className="filter-links">
            Desktop Pcs
          </Link>
          <Link to={"/"} className="filter-links">
            Laptops
          </Link>
          <Link to={"/"} className="filter-links">
            Pc Parts
          </Link>
        </Box>
      )}
      <Box component={"div"}>
        <FilterButton
          className="filter-price-button"
          onClick={() => setTogglePrice(!togglePrice)}
          sx={{color: "black"}}

        >
          Price
          <MdArrowBackIosNew style={{ margin: "5px 0px 1px 16" }} size="12px" />
        </FilterButton>
      </Box>
      {togglePrice && (
        <Box
          component={"div"}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "8px",
          }}
        >
          <Link to={"/"} className="filter-links">
            $0.00 - $100
          </Link>
          <Link to={"/"} className="filter-links">
            $100 - $200
          </Link>
          <Link to={"/"} className="filter-links">
            $200 - $400
          </Link>
          <Link to={"/"} className="filter-links">
            $400 - $600
          </Link>
          <Link to={"/"} className="filter-links">
            $600 - $1,000
          </Link>
          <Link to={"/"} className="filter-links">
            $1000 - $1000+
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default FilterCompononet;
