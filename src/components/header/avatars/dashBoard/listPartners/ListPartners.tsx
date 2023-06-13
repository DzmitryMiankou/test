import * as React from "react";
import {
  SxProps,
  Theme,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Avatar,
  Tooltip,
} from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Avayar from "../../../../../img/avatar1.png";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const styleSX: Record<string, SxProps<Theme>> = {
  heading: {
    display: "flex",
    gap: "5px",
    p: "10px 32px",
    fontSize: "15px",
    width: "100%",
    color: "var(--blue-arrow)",
    cursor: "default",
    opacity: "0.87",
    "&:hover": {
      color: "var(--blue-buuton-hover)",
      backgroundColor: "var(--blue-hover-opacity)",
    },
  },
};

export const CustomWidthTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: "14px",
    backgroundColor: "var(--white)",
    color: "var(--blue-text-dark)",
    boxShadow: "10px 10px 50px rgba(221, 224, 231, 0.56)",
    borderRadius: "4px",
    border: "1px solid #EAF0FA",
    p: "8px",
  },
});

const ListPartners = ({ headibg, list }: { headibg: string; list: any }) => {
  const [get, set] = React.useState<number>(0);

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
          <ListItemButton
            key={id}
            sx={styleSX.heading}
            onMouseEnter={() => set(id)}
            onMouseLeave={() => set(0)}
          >
            <Avatar
              sx={{
                height: "30px",
                width: "30px",
              }}
              alt="Travis Howard"
              src={Avayar}
            />
            {name}
            <CustomWidthTooltip title="Выйти" placement="bottom-end">
              <LogoutOutlinedIcon
                sx={{
                  marginLeft: "auto",
                  color: "var(--blue-buuton-hover)",
                  cursor: "pointer",
                  visibility: get === id ? "visible" : "hidden",
                }}
              />
            </CustomWidthTooltip>
          </ListItemButton>
        ))}
      </ListItem>
    </List>
  );
};

export default ListPartners;
