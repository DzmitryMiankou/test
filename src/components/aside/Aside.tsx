import { List, ListItemButton, Box, ListItemIcon } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logo from './logo/Logo';
import { SxProps, Theme } from "@mui/material";
import React from 'react';

const tylesSX: Record<string, SxProps<Theme>> = {
    box: {
        width: "250px",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--app-background-aside)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        gridArea: "aside"
    },
    listItem: {
        color: "rgba(255, 255, 255, 0.6)",
        textTransform: "capitalize",
        display: "flex",
        alignItems: "center",
        height: "50px",
        gap: "10px",
        "&:hover": {
            backgroundColor: "#D8E4FB10"
        }
    }
};

interface DataType {
    data: string,
    icon: JSX.Element,
    to: string,
};

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
    return (
        <Box component="aside" sx={tylesSX.box}>
            <Logo />
            <List sx={{ p: "0" }} component="nav" aria-labelledby="nested-list-subheader">
                {menuListData.map(({ data, icon }, i) =>
                    <ListItemButton key={i} sx={tylesSX.listItem}>
                        <ListItemIcon sx={{ color: "rgba(255, 255, 255, 0.6)", minWidth: "auto", }}>{icon}</ListItemIcon>
                        {data}
                    </ListItemButton>
                )}
            </List>
        </Box>
    );
}

export default Aside;
