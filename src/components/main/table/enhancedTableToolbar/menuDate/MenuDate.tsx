import * as React from "react";
import { Box, Typography } from "@mui/material/";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { SxProps, Theme } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DashBordDate from "./dashBoards/DashBoard";

const mutch: number = 272;

const MenuDate = () => {
  const [isShow, setShow] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [isShowCalend, setShowCalend] = React.useState<boolean>(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setOpen(!open);
  };

  const stylesSX: Record<string, SxProps<Theme>> = {
    box: {
      minWidth: "145px",
      display: "flex",
      alignItems: "center",
      p: "12px",
      height: "40px",
      backgroundColor: "white",
      borderRadius: "48px",
      cursor: "pointer",
    },
    typography: {
      color: "var(--grey-text-light)",
      fontSize: "14px",
      fontWeight: 500,
    },
    span: {
      color: !isShow ? "var(--blue-text-dark)" : "var(--blue-buuton-hover)",
      fontSize: "14px",
      fontWeight: 500,
    },
    icon: {
      color: !isShow ? "var(--blue-hover)" : "var(--blue-buuton-hover)",
      marginLeft: "auto",
      fontSize: "30px",
    },
    arrow: {
      color: "var(--blue-checked)",
      cursor: "pointer",
      "&:hover": {
        color: "var(--blue-hover)",
      },
    },
    calendIcon: {
      color: isShowCalend ? "var(--blue-hover)" : "var(--blue-checked)",
      fontSize: "22px",
    },
  };

  return (
    <Box sx={{ display: "flex", gap: "50px" }}>
      <Box
        sx={stylesSX.box}
        onMouseEnter={() => setShow(!isShow)}
        onMouseLeave={() => setShow(!isShow)}
      >
        <Typography sx={stylesSX.typography}>
          Баланс: <Box sx={stylesSX.span} component="span">{`${mutch} ₽`}</Box>
        </Typography>
        <AddCircleRoundedIcon sx={stylesSX.icon} />
      </Box>
      <DashBordDate
        setOpen={handleClick}
        components={
          <>
            <KeyboardArrowLeftIcon sx={stylesSX.arrow} />
            <Box
              onMouseEnter={() => setShowCalend(!isShowCalend)}
              onMouseLeave={() => setShowCalend(!isShowCalend)}
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <CalendarTodayIcon sx={stylesSX.calendIcon} />
              <Typography sx={{ color: "var(--blue-arrow)", fontSize: "14px" }}>
                3 дня
              </Typography>
            </Box>
            <KeyboardArrowRightIcon sx={stylesSX.arrow} />
          </>
        }
      />
    </Box>
  );
};

export default MenuDate;
