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
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <DashBoardAv
      setOpen={handleClick}
      components={
        <>
          <Avatar alt="Remy Sharp" src={AvatarMain} />
          <Box onClick={(e) => handleClick}>
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
