import React from "react";
import { Typography, Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const styleSX: Record<string, SxProps<Theme>> = {
  icon: {
    color: "#ADBFDF",
    transition: "0.2s",
    cursor: "pointer",
    "&:hover": { color: "var(--blue-hover)" },
  },
};

const SearchButton = () => {
  const [isShow, setShow] = React.useState<boolean>(false);
  const fe = (a: any) => {
    setShow(!isShow);
  };

  return (
    <>
      {!isShow ? (
        <Box
          onClick={fe}
          sx={{
            display: "flex",
            alignItems: "center",
            p: "2px 0",
            border: "1px solid var(--app-background)",
          }}
        >
          <SearchIcon sx={styleSX.icon} />
          <Typography
            component={"div"}
            sx={{
              fontSize: "14px",
              color: "var(--grey-text-light)",
              gridArea: "deleteB",
            }}
          >
            Поиск по звонкам
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #002CFB",
            borderRadius: "48px",
            width: "250px",
            p: "2px 6px",
          }}
        >
          <SearchIcon sx={{ color: "#ADBFDF" }} />
          <Box
            sx={{
              fontSize: "14px",
              color: "black",
              background: "none",
              fontFamily: "var(--font-app)",
              border: "none",
              outline: "none",
              width: "100%",
            }}
            component="input"
            type="phone"
          ></Box>
        </Box>
      )}
    </>
  );
};

export default SearchButton;
