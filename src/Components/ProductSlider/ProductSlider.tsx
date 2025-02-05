import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/material";
import { useState } from "react";
import { Testarray } from "./Testarray";

const ProductSlider = (props: any) => {
  const { _ } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [array] = useState(Testarray);

  const prevPhoto = () => {
    setCurrentIndex((currentIndex + array.length - 1) % array.length);
  };

  const nextPhoto = () => {
    setCurrentIndex((currentIndex + 1) % array.length);
  };

  return (
    <Box sx={{ width: "100%", height: "auto", position: "relative", overflow: "hidden", borderRadius: "10px" }}>
      <Box
        style={{
          whiteSpace: "nowrap",
          transition: "transform 0.5s",
          transform: `translateX(-${currentIndex * 100}%)`,
          background: "transparent",
          height: "600px",
          width: "100%",
        }}
      >
        {array.map((e: { id: number; value: any }, index: number) => (
          <Box
            key={`upper${index}`}
            component={"img"}
            src={e.value}
            sx={{
              height: "600px",
              width: "100%",
              objectFit: "cover"
            }}
          />
        ))}
      </Box>
      <Box
        component={"button"}
        onClick={prevPhoto}
        style={{ position: "absolute", left: "60px", bottom: "45.5%", backgroundColor: "white", border: "none", outline: "none", borderRadius: "30px" }}
      >
        <KeyboardArrowLeftIcon
          style={{ fontSize: "60px", color: "black", cursor: "pointer" }}
        />
      </Box>
      <Box
        component={"button"}
        onClick={nextPhoto}
        style={{ position: "absolute", right: "60px", bottom: "45%", backgroundColor: "white", border: "none", outline: "none", borderRadius: "30px" }}
      >
        <KeyboardArrowRightIcon
          style={{ fontSize: "60px", color: "black", cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
};

export default ProductSlider;