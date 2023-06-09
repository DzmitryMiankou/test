import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { filterDialogListTYPEAction } from "../../../../../../redux/reducers/listCall-reducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../redux/store";
import { RootState } from "../../../../../../redux/store";

interface TypeProps {
  components: JSX.Element;
  setOpen(x: number): void;
  id: number;
  setIsShown(x: number): void;
  rows?: Array<number | string | null | any>;
  order?: string;
  state: RootState;
}

const BasicPopover = ({
  components,
  setOpen,
  id,
  setIsShown,
  rows,
  order,
  state,
}: TypeProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsShown(0);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setIsShown(0);
    setOpen(0);
    setAnchorEl(null);
  };

  const handleDispach = (a: { order: string; id: number }): void => {
    handleClose();
    if (a.id === 1) {
      dispatch(filterDialogListTYPEAction(a));
    }
    if (a.id === 4) {
      return;
    }
  };

  const open = Boolean(anchorEl);
  const id2 = open ? "simple-popover" : undefined;

  const styleSX: Record<string, SxProps<Theme>> = {
    popover: {
      "& .MuiPopover-paper": {
        border: "1px solid #EAF0FA",
        boxShadow: "0px 0px 26px rgba(233, 237, 243, 0.8)",
        borderRadius: "4px",
        width: "204px",
      },
    },
    heading: {
      p: "7px 20px",
      fontSize: "14px",
      color:
        state?.listCallReducer?.order === order ||
        state?.listCallReducer?.order === ""
          ? "#002CFB"
          : "#899CB1",
      opacity: "0.87",
      "&:hover": {
        backgroundColor: "var(--blue-hover-opacity)",
        color: "var(--blue-text-dark)",
      },
    },
  };

  return (
    <div>
      <Typography component="span" aria-describedby={id2} onClick={handleClick}>
        {components}
      </Typography>
      <Popover
        sx={styleSX.popover}
        id={id2}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ListItemButton
          sx={styleSX.heading}
          onClick={() => handleDispach({ order: `${order}`, id: id })}
        >
          {order}
        </ListItemButton>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List sx={{ p: 0 }}>
              {rows?.map((data, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  onClick={() => handleDispach({ order: `${data}`, id: id })}
                >
                  <ListItemButton
                    sx={{
                      color:
                        state?.listCallReducer?.order === data
                          ? "#002CFB"
                          : "var(--grey-text-light)",
                      p: "7px 20px",
                      fontSize: "14px",
                      "&:hover": {
                        color: "var(--blue-text-dark)",
                        backgroundColor: "var(--blue-hover-opacity)",
                      },
                    }}
                  >
                    {data}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
      </Popover>
    </div>
  );
};

export default BasicPopover;
