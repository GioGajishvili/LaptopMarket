import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/material";
import { useState } from "react";
import { Testarray } from "./Testarray";

const Banner = (props: any) => {
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
    <Box sx={{ width: "90%", position: "relative", overflow: "hidden", borderRadius: "10px" }}>
      <Box
        style={{
          whiteSpace: "nowrap",
          transition: "transform 0.5s",
          transform: `translateX(-${currentIndex * 100}%)`,
          background: "transparent",
          height: "400px",
          width: "100%",
        }}
      >
        {array.map((e: { id: number; value: any }, index: number) => (
          <Box
            key={`upper${index}`}
            component={"img"}
            src={e.value}
            sx={{
              height: "400px",
              width: "100%",
              objectFit: "cover"
            }}
          />
        ))}
      </Box>
      <Box
        component={"button"}
        onClick={prevPhoto}
        style={{ position: "absolute", left: "60px", bottom: "42.5%", backgroundColor: "transparent", border: "none", outline: "none" }}
      >
        <KeyboardArrowLeftIcon
          style={{ fontSize: "60px", color: "white", cursor: "pointer" }}
        />
      </Box>
      <Box
        component={"button"}
        onClick={nextPhoto}
        style={{ position: "absolute", right: "60px", bottom: "42%", backgroundColor: "transparent", border: "none", outline: "none" }}
      >
        <KeyboardArrowRightIcon
          style={{ fontSize: "60px", color: "white", cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
};

export default Banner;