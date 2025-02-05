import { useState } from "react";
import "./RegisterComponent.css";
import "./NotRegistered";
import "./ForRegister";
import ForRegister from "./ForRegister";
import NotRegistered from "./NotRegistered";
import { Box } from "@mui/material";

const Register = () => {
  const [blockChange, setBlockChange] = useState(false);
  const handleToggle = () => {
    setBlockChange(!blockChange);
    console.log(blockChange);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Box style={{ position: "relative" }} className="register-component">
      {blockChange ? (
        <ForRegister handleSubmit={handleSubmit} handleToggle={handleToggle} />
      ) : (
        <NotRegistered handleToggle={handleToggle} />
      )}
    </Box>
  );
};
export default Register;
