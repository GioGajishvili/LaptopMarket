import { Box } from "@mui/material";

const ForRegister = ({ handleSubmit, handleToggle }: any) => {
  return (
    <Box
      style={{
        position: "absolute",
        top: "10",
        left: "10",
      }}
    >
      <Box component={"form"} className="form-login" onSubmit={handleSubmit}>
        <Box
          component={"label"}
          style={{ marginLeft: "4px", fontWeight: "bold", color: "black" }}
        >
          Username
        </Box>
        <Box
          component={"input"}
          className="input"
          style={{
            margin: "10px 0px 10px 0px",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            height: "20px",
            width: "300px",
            fontFamily: "Poppins",
            backgroundColor: "white"
          }}
          placeholder="Your Username"
        ></Box>
        <Box
          component={"label"}
          style={{ fontWeight: "bold", marginLeft: "4px", color: "black" }}
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
            height: "20px",
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
            height: "20px",
            fontFamily: "Poppins",
            backgroundColor: "white"

          }}
          placeholder="Your Password"
        ></Box>
        <Box className="login-button">
          <Box
            component={"button"}
            onClick={() => handleToggle()}
            style={{
              width: "120px",
              height: "44px",
              borderRadius: "50px",
              backgroundColor: "rgb(56, 91, 187)",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              border: "none",
              marginLeft: "14px",
              fontFamily: "Jura",
            }}
            type="submit"
          >
            Back
          </Box>
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
              marginLeft: "30px",
              fontFamily: "Jura",
            }}
            type="submit"
          >
            Sign Up
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForRegister;
