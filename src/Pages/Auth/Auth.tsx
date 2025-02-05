import "./Auth.css";
import LoginComponent from "../../Components/AuthComponents/LoginComponent";
import RegisterComponent from "../../Components/AuthComponents/RegisterComponent";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";


const Auth = () => {
  const ref = useRef<any>()
  useEffect(()=> {
    ref.current?.scrollIntoView(0,0)
  },[])
  return (
    <Box  className="auth-page">
      <Box
      ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          backgroundColor: "white", 
        }}
      >
        <Box component={"h1"} className="login-title">
          {" "}
          Customer Login{" "}
        </Box>
      </Box>
      <Box style={{ flexDirection: "row", display: "flex", gap: "100px" }}>
        <Box className="login-block">
          <LoginComponent />
        </Box>
        <Box className="register-block">
          <RegisterComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default Auth;
