import React from 'react';
import { Box, } from '@mui/material';
import NowDate from './nowDate/NowDate';

const styleSX = {
    box: {
        height: "64px",
        gridArea: "header",
        backgroundColor: "var(--white)",
        width: "100%"
    }
};

const Header = () => {
    return (
        <Box sx={styleSX.box}>
            <NowDate />
        </Box>
    );
}

export default Header;
