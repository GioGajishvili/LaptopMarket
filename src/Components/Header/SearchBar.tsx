import React, { useState } from "react";
import "./SearchBar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { CiSearch } from "react-icons/ci";
import { Box, InputBase, InputBaseProps, styled } from "@mui/material";

interface InputProps extends InputBaseProps {
  isActive?: boolean;
}

const Input = styled((props: InputProps) => <InputBase {...props} />)(
  ({ theme, isActive }) => ({
    border: "1px solid black",
    borderRadius: "20px",
    height: "26px",
    paddingLeft: "10px",
    ...(isActive && {
      width: "250px",
      opacity: 1,
      transition: theme.transitions.create(["width", "opacity"], {
        easing: theme.transitions.easing.easeInOut,
        duration: 700,
      }),
    }),
    ...(!isActive && {
      width: "0px",
      opacity: 0,
      transition: theme.transitions.create(["width", "opacity"], {
        easing: theme.transitions.easing.easeInOut,
        duration: 700,
      }),
    }),
  })
);

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchLog, setSearchLog] = useState("");
  const handleClick = (e: any) => {
    e.preventDefault();
    setIsActive(!isActive);
    if (searchLog.length) {
      console.log(searchLog);
      setSearchLog("");
    }
  };
  const createLog = (e: any) => {
    e.preventDefault();
    console.log(searchLog);
    setSearchLog("");
  };
  return (
    <Box className="search-bar-container">
      <Box
        component={"form"}
        onSubmit={createLog}
        style={{
          display: "flex",
          width: "fit-content",
          height: "fit-content",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Input
          isActive={isActive}
          sx={{ border: "1px solid black" }}
          value={searchLog}
          onChange={(e) => setSearchLog(e.target.value)}
          className="search-bar-input"
        />
        <SearchOutlinedIcon
          style={{ fontSize: "30px" }}
          className="search-icon"
          onClick={handleClick}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
