import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./LoginComponent.css";

const Login = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Box className="login-component">
      <Box component={"form"} className="form-login" onSubmit={handleSubmit}>
        <Box
          component={"h2"}
          style={{ marginBottom: "4px", fontSize: "30px", fontWeight: "bold", color: "black" }}
        >
          Registered Costumers
        </Box>
        <Box
          component={"label"}
          style={{
            margin: "20px 0px 0px 4px",
            fontWeight: "bold",
            color: "black"
          }}
        >
          Email
        </Box>
        <Box
          component={"input"}
          className="input"
          style={{
            margin: "10px 0px 10px 0px",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            fontFamily: "Poppins",
            backgroundColor: "white"
          }}
          placeholder="Your E-mail"
        ></Box>
        <Box
          component={"label"}
          style={{ marginLeft: "4px", fontWeight: "bold", color: "black" }}
        >
          Password
        </Box>
        <Box
          component={"input"}
          className="input"
          type="password"
          style={{
            marginTop: "10px",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            fontFamily: "Poppins",
            backgroundColor: "white"

          }}
          placeholder="Your Password"
        ></Box>
        <Box className="login-button">
          <Box
            component={"button"}
            style={{
              width: "120px",
              height: "44px",
              borderRadius: "50px",
              backgroundColor: "rgb(56, 91, 187)",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              border: "none",
              fontFamily: "Jura",
            }}
            type="submit"
          >
            Sign In
          </Box>
          <Link
            className="reset-password-link"
            style={{ marginLeft: "30px", textDecoration: "none" }}
            to={""}
          >
            Forgot Your Password ?
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
