import { Box,  } from "@mui/material";
import { useEffect, useRef } from "react";
import "./Vapes.css";

const Vapes = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box ref={ref} component={"div"} className="vapes-page">
      <Box component={"p"} className="vapes-page">
        Vapes
      </Box>
    </Box>
  );
};

export default Vapes;
