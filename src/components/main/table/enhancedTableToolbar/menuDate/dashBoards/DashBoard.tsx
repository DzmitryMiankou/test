import * as React from "react";
import Popover from "@mui/material/Popover";
import { SxProps, Theme, Box, ListItemButton, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import "dayjs/locale/ru";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const dataCalen = [
  { id: 1, text: "3 дня" },
  { id: 2, text: "Неделя" },
  { id: 3, text: "Месяц" },
  { id: 4, text: "Год" },
];
const styleSX: Record<string, SxProps<Theme>> = {
  popover: {
    "& .MuiPopover-paper": {
      border: "1px solid var(--light-grey)",
      boxShadow: "0px 0px 26px var(--grey-opacity)",
      borderRadius: "4px",
      width: "204px",
    },
    "& .MuiDateCalendar-root": {
      backgroundColor: "red",
    },
  },
  heading: {
    display: "flex",
    gap: "5px",
    p: "10px 32px",
    fontSize: "15px",
    width: "100%",
    color: "var(--blue-arrow)",
    opacity: "0.87",
    "&:hover": {
      color: "var(--blue-buuton-hover)",
      backgroundColor: "var(--blue-hover-opacity)",
    },
  },
};

const DashBordDate = ({
  components,
  setOpen,
}: {
  components: JSX.Element;
  setOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setOpen(event);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setOpen(event);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id2 = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          minWidth: "110px",
          display: "flex",
          gap: "8px",
          cursor: "pointer",
        }}
        component="span"
        aria-describedby={id2}
        onClick={handleClick}
      >
        {components}
      </Box>
      <Popover
        sx={styleSX.popover}
        id={id2}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <>
          {dataCalen.map(({ id, text }: { id: number; text: string }) => (
            <React.Fragment key={id}>
              <ListItemButton
                key={id}
                sx={{
                  color:
                    text === "3 дня"
                      ? "var(--blue-hover)"
                      : "var(--grey-text-light)",
                  p: "7px 20px",
                  fontSize: "14px",
                  "&:hover": {
                    color: "var(--blue-text-dark)",
                    backgroundColor: "var(--blue-hover-opacity)",
                  },
                }}
              >
                {text}
              </ListItemButton>
            </React.Fragment>
          ))}
        </>
        <Typography
          sx={{
            fontSize: "14px",
            p: "7px 20px",
            color: "var(----blue-text-dark)",
          }}
        >
          Указать даты
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
          <DesktopDatePicker
            value={"__.__.__"}
            sx={{
              border: "none !important",
              m: "7px 20px",
              "& .MuiInputBase-root": {
                color: "var(--blue-checked)!important",
              },
              "& .MuiButtonBase-root": {
                color: "var(--blue-checked)!important",
                border: "none",
              },
              "& .MuiFormLabel-root": {
                color: "var(--blue-checked)!important",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
        </LocalizationProvider>
      </Popover>
    </Box>
  );
};

export default DashBordDate;
