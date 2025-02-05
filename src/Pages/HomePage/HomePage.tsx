import { Box } from "@mui/material";
import GridViewComponent from "../../Components/ViewComponents/GridView";
import "./HomePage.css";
import { useEffect, useRef } from "react";

const HomePage = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box ref={ref} component={"div"} className="home-page">
      <GridViewComponent />
    </Box>
  );
};

export default HomePage;
