import React from "react";
import { Box, Avatar } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashBoardAv from "./dashBoard/DashBoardAv";
import AvatarMain from "../../../img/img.png";

const initialStyle = {
  transition: "0.2s",
  color: "var(--blue-active)",
  "&:hover": {
    color: "var(--blue-hover)",
  },
};

const styleSX = {
  button1: {
    ...initialStyle,
  },
  button2: {
    ...initialStyle,
    color: "#ADBFDF",
  },
};

const Avatars = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <DashBoardAv
      components={
        <>
          <Avatar alt="Remy Sharp" src={AvatarMain} />
          <Box onClick={handleClick}>
            {open ? (
              <ExpandLess sx={styleSX.button1} />
            ) : (
              <ExpandMore sx={styleSX.button2} />
            )}
          </Box>
        </>
      }
    />
  );
};

export default Avatars;
