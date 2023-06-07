import React from 'react';
import { Box, IconButton } from '@mui/material';
import NowDate from './nowDate/NowDate';
import AnalyticsCalls from './analyticsCalls/AnalyticsCalls';
import SearchIcon from '@mui/icons-material/Search';

const styleSX = {
    box: {
        height: "64px",
        gridArea: "header",
        backgroundColor: "var(--white)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 3,
    },
    box_width: {
        width: "var(--indentSide)",
        display: "flex",
        alignItems: "center",
        gap: "8%"
    }
};

const Header = () => {
    return (
        <Box sx={styleSX.box}>
            <Box sx={styleSX.box_width}>
                <NowDate />
                <AnalyticsCalls />
            </Box>
            <IconButton aria-label="delete" size="small">
                <SearchIcon sx={{ color: "#ADBFDF" }} />
            </IconButton>
        </Box>
    );
}

export default Header;
