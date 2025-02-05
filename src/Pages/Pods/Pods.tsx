import { Box } from "@mui/material";
import "./Pods.css";
import { useEffect, useRef } from "react";

const Pods = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box ref={ref} component={"div"} className="pods-page">
      <Box component={"p"} className="pods-page">
        Networking Devices
      </Box>
    </Box>
  );
};

export default Pods;
