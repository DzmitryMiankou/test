import React from 'react';
import { Box } from '@mui/material';
import NowDate from './nowDate/NowDate';
import AnalyticsCalls from './analyticsCalls/AnalyticsCalls';
import SearchIcon from '@mui/icons-material/Search';
import Avatars from './avatars/Avatars';
import NameUser from './nameUser/NameUse';

const styleSX = {
    box: {
        height: "64px",
        gridArea: "header",
        backgroundColor: "var(--white)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 1,
    },
    box_width: {
        width: "var(--indentSide)",
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "auto 1fr 1fr",
        gap: "5%"
    }
};

const Header = () => {
    return (
        <Box sx={styleSX.box}>
            <Box sx={styleSX.box_width}>
                <NowDate />
                <AnalyticsCalls />
                <Box sx={{
                    display: "flex",
                    gap: "8%",
                    justifyContent: "flex-end",
                    marginRight: "-5px",
                    alignItems: "center",
                }}>
                    <Box sx={{ cursor: "pointer" }}>
                        <SearchIcon sx={{
                            color: "#ADBFDF",
                            transition: "0.2s",
                            "&:hover": { color: "var(--blue-hover)" }
                        }} />
                    </Box>
                    <NameUser />
                    <Avatars />
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
