import {
  List,
  ListItemButton,
  Box,
  ListItemIcon,
  Typography,
  Button,
} from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import ErrorIcon from "@mui/icons-material/Error";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Logo from "./logo/Logo";
import { SxProps, Theme } from "@mui/material";
import React from "react";

const listStyliInitial = {
  color: "rgba(255, 255, 255, 0.6)",
  textTransform: "capitalize",
  display: "flex",
  alignItems: "center",
  height: "50px",
  gap: "10px",
  "&:hover": {
    backgroundColor: "#D8E4FB10",
  },
};

const stylesSX: Record<string, SxProps<Theme>> = {
  box: {
    width: "250px",
    height: "100%",
    minHeight: "100vh",
    backgroundColor: "var(--app-background-aside)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    gridArea: "aside",
  },
  listItem: {
    ...listStyliInitial,
  },
  listItemActive: {
    ...listStyliInitial,
    color: "white",
    borderLeft: "3px solid var(--blue-hover)",
    backgroundColor: "var(--grey-active)",
    "&:hover": {
      backgroundColor: "var(--grey-active)",
    },
  },
  button: {
    width: "200px",
    height: "52px",
    display: "flex",
    backgroundColor: "var(--blue-arrow)",
    "&:hover": {
      backgroundColor: "var(--blue-buuton-hover)",
    },
  },
  icon: {
    marginLeft: "auto",
    fontSize: "30px",
    color: "rgba(216, 228, 251, 0.56)",
  },
};

interface Data {
  id: number;
  text: string;
  icon: JSX.Element;
}

function createData(id: number, text: string, icon: JSX.Element): Data {
  return {
    id,
    text,
    icon,
  };
}
interface DataType {
  data: string;
  icon: JSX.Element;
  to: string;
}

const menuListData: DataType[] = [
  { data: "итоги", icon: <TimelineIcon />, to: "" },
  { data: "заказы", icon: <DoneAllIcon />, to: "" },
  { data: "сообщения", icon: <EmailOutlinedIcon />, to: "" },
  { data: "звонки", icon: <CallOutlinedIcon />, to: "" },
  { data: "контрагенты", icon: <PeopleAltOutlinedIcon />, to: "" },
  { data: "документы", icon: <DescriptionOutlinedIcon />, to: "" },
  { data: "исполнители", icon: <PermIdentityOutlinedIcon />, to: "" },
  { data: "отчеты", icon: <WorkOutlineOutlinedIcon />, to: "" },
  { data: "база знаний", icon: <LocalLibraryOutlinedIcon />, to: "" },
  { data: "настройки", icon: <SettingsOutlinedIcon />, to: "" },
];

const Aside = () => {
  const rows = [
    createData(
      1,
      "Добавить заказ",
      <AddCircleRoundedIcon sx={stylesSX.icon} />
    ),
    createData(2, "Оплата", <ErrorIcon sx={stylesSX.icon} />),
  ];

  return (
    <Box component="aside" sx={stylesSX.box}>
      <Logo />
      <List
        sx={{ p: "0" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {menuListData.map(({ data, icon }, i) => (
          <ListItemButton
            key={i}
            sx={data === "звонки" ? stylesSX.listItemActive : stylesSX.listItem}
          >
            <ListItemIcon
              sx={{
                color: data === "звонки" ? "white" : "rgba(255, 255, 255, 0.6)",
                minWidth: "auto",
              }}
            >
              {icon}
            </ListItemIcon>
            <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
              {data}
            </Typography>
          </ListItemButton>
        ))}
      </List>
      <Box
        sx={{
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        {rows.map(({ id, text, icon }) => (
          <Button key={id} sx={stylesSX.button} variant="contained">
            <Typography
              sx={{
                marginLeft: "auto",
                textTransform: "none",
                fontWeight: "500",
                fontSize: "16px",
              }}
            >
              {text}
            </Typography>
            {icon}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Aside;
