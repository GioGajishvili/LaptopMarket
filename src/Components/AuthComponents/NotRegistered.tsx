import { Box } from "@mui/material";

interface Test {
  handleToggle?: () => void;
}

const NotRegistered = (props: Test) => {
  const { handleToggle = () => {} } = props;
  return (
    <Box
      style={{
        position: "absolute",
        top: "10",
        left: "10",
      }}
    >
      <Box className="form-register">
        <Box
          component={"h2"}
          style={{ marginBottom: "4px", fontWeight: "bold", color: "black" }}
        >
          New Customer
        </Box>
        <Box component={"p"} style={{ marginBottom: "30px" }}>
          Creating an account has many benefits{" "}
        </Box>
        <Box component={"ul"}>
          <Box style={{color: "black"}} component={"li"}>Check out faster</Box>
          <Box style={{color: "black"}} component={"li"}>Keep more than one address</Box>
          <Box style={{color: "black"}} component={"li"}>Track orders and more</Box>
        </Box>
        <Box
          component={"button"}
          onClick={() => handleToggle()}
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "50px",
            backgroundColor: "rgb(56, 91, 187)",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "30px",
            marginBottom: "70px",
            border: "none",
            fontFamily: "Jura",
          }}
          type="submit"
        >
          Create an account
        </Box>
      </Box>
    </Box>
  );
};

export default NotRegistered;
