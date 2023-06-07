import React from 'react';
import { Box, } from '@mui/material';
import NowDate from './nowDate/NowDate';

const styleSX = {
    box: {
        height: "64px",
        gridArea: "header",
        backgroundColor: "var(--white)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    box_width: {
        width: "var(--indentSide)",
    }
};

const Header = () => {
    return (
        <Box sx={styleSX.box}>
            <Box sx={styleSX.box_width}>
                <NowDate />
            </Box>
        </Box>
    );
}

export default Header;
