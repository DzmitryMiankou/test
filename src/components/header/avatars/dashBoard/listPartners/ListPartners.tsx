import * as React from "react";
import {
  SxProps,
  Theme,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Avatar,
} from "@mui/material";
import Avayar from "../../../../../img/avatar1.png";

const styleSX: Record<string, SxProps<Theme>> = {
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

const ListPartners = ({ headibg, list }: { headibg: string; list: any }) => {
  return (
    <List>
      <Typography
        sx={{ p: "0px 32px", color: "var(--grey-source)" }}
        component="div"
        id="nested-list-subheader"
      >
        {headibg}
      </Typography>
      <ListItem
        disablePadding
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {list?.map(({ id, name }: { id: number; name: string }) => (
          <ListItemButton key={id} sx={styleSX.heading}>
            <Avatar
              sx={{ height: "30px", width: "30px" }}
              alt="Travis Howard"
              src={Avayar}
            />
            {name}
          </ListItemButton>
        ))}
      </ListItem>
    </List>
  );
};

export default ListPartners;
