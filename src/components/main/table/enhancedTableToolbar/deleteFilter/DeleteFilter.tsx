import React from "react";
import { Typography, Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const DeleteFilterButton = () => {
  const [isShow, setIsShown] = React.useState<boolean>(false);

  const styleSX: Record<string, SxProps<Theme>> = {
    icon: {
      color: isShow ? "var(--blue-hover)" : "#ADBFDF",
      fontSize: "16px",
      marginBottom: "-2px",
      marginLeft: "3px",
    },
    typography: {
      fontSize: "14px",
      color: isShow ? "var(--blue-hover)" : "var(--grey-text-light)",
      gridArea: "deleteB",
    },
  };

  return (
    <Box
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Typography component={"div"} sx={styleSX.typography}>
        Сбросить фильтры
      </Typography>
      <ClearIcon sx={styleSX.icon} />
    </Box>
  );
};

export default DeleteFilterButton;
