import { Box } from "@mui/material";
import "./Liquids.css";
import { useEffect, useRef } from "react";

const Liquids = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box ref={ref} component={"div"} className="liquids-page">
      <Box component={"p"} className="liquids-page">
        Liquids
      </Box>
    </Box>
  );
};

export default Liquids;
