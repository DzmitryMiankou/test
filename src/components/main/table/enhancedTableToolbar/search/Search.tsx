import React from "react";
import { Typography, Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const styleSX: Record<string, SxProps<Theme>> = {
  icon: {
    color: "#ADBFDF",
    transition: "0.2s",
    "&:hover": { color: "var(--blue-hover)" },
  },
};

const SearchButton = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
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
  );
};

export default SearchButton;
