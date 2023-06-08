import React from 'react';
import { Box, Avatar } from '@mui/material';
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
    button1: {
        ...initialStyle
    },
    button2: {
        ...initialStyle,
        color: "#ADBFDF",
    }
};



const Avatars = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={styleSX.box}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Box onClick={handleClick} >
                {open ? <ExpandLess sx={styleSX.button1} />
                    : <ExpandMore sx={styleSX.button2} />}
            </Box>
        </Box>
    );
}

export default Avatars;
