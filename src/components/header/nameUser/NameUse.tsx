import React from 'react';
import { Typography, Box } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const initialStyle = {
    transition: "0.2s",
    color: "var(--blue-active)",
    "&:hover": {
        color: "var(--blue-hover)"
    }
};

const styleSX = {
    box: {
        display: "flex",
        alignItems: "center",
        "& .MuiBox-root": {
            cursor: "pointer",
            height: "24px",
        }
    },
    text: {
        fontSize: "15px",
        color: "var(--grey-text-light)"
    },
    button1: {
        ...initialStyle
    },
    button2: {
        ...initialStyle,
        color: "#ADBFDF",
    }
};


const NameUser = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={styleSX.box}>
            <Typography sx={styleSX.text}>ИП Сидорова Александра Михайловна</Typography>
            <Box onClick={handleClick}>
                {open ? <ExpandLess sx={styleSX.button1} />
                    : <ExpandMore sx={styleSX.button2} />}
            </Box>
        </Box>
    );
}

export default NameUser;
