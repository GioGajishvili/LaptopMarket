import { Box } from "@mui/material";
import "./Coils.css";
import { useEffect, useRef } from "react";

const Coils = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box ref={ref} component={"div"} className="coils-page">
      <Box component={"p"} className="coils-page">
        Coils
      </Box>
    </Box>
  );
};

export default Coils;
