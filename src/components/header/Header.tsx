import React from 'react';
import { Box, } from '@mui/material';
import NowDate from './nowDate/NowDate';
import AnalyticsCalls from './analyticsCalls/AnalyticsCalls';

const styleSX = {
    box: {
        height: "64px",
        gridArea: "header",
        backgroundColor: "var(--white)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
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
        </Box>
    );
}

export default Header;
