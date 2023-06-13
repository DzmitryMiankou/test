import React from "react";
import { Typography, Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const SearchButton = () => {
  const [isShow, setShow] = React.useState<boolean>(false);
  const [isBorder, setBorder] = React.useState<boolean>(false);
  const [isNumber, setNumber] = React.useState<string>("");
  const [isFocus, setFocus] = React.useState<boolean>(false);

  const styleSX: Record<string, SxProps<Theme>> = {
    icon: {
      color: isFocus ? "var(--blue-hover)" : "#ADBFDF",
      transition: "0.2s",
      fontSize: "20px",
      cursor: "pointer",
    },
    box1: {
      height: "25px",
      display: "flex",
      alignItems: "center",
      p: "2px 0",
      width: "250px",
      border: "1px solid var(--app-background)",
    },
    box2: {
      height: "25px",
      display: "flex",
      alignItems: "center",
      border: isBorder ? "1px solid #002CFB" : "1px solid #ADBFDF",
      borderRadius: "48px",
      width: "250px",
      p: "2px 6px",
      gap: "6px",
    },
    typography: {
      fontSize: "14px",
      marginLeft: "5px",
      color: "var(--grey-text-light)",
      cursor: "pointer",
      width: "min-content !important",
    },
    input: {
      fontSize: "14px",
      color: "var(--blue-text-dark)",
      background: "none",
      fontFamily: "var(--font-app)",
      border: "none",
      outline: "none",
      width: "100%",
    },
  };

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value = event.target.value;
    setNumber(value);
  };

  return (
    <>
      {!isShow ? (
        <Box sx={styleSX.box1}>
          <Box
            sx={{ display: "flex" }}
            onClick={() => setShow(true)}
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
          >
            <SearchIcon sx={styleSX.icon} />
            <Typography component={"div"} sx={styleSX.typography}>
              Поиск по звонкам
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={styleSX.box2}>
          <SearchIcon sx={{ color: "#ADBFDF", fontSize: "20px" }} />
          <Box
            onFocus={() => setBorder(true)}
            onBlur={() => setBorder(false)}
            onChange={handlerChange}
            value={isNumber}
            sx={styleSX.input}
            component="input"
            type="phone"
          />
          <ClearIcon
            onClick={(e) => {
              e.preventDefault();
              setFocus(false);
              setShow(false);
              setNumber("");
            }}
            sx={{
              color: "#ADBFDF",
              fontSize: "16px",
              cursor: "pointer",
              "&:hover": { color: "var(--blue-hover)" },
            }}
          />
        </Box>
      )}
    </>
  );
};

export default SearchButton;
