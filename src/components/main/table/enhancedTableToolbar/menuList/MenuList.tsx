import * as React from 'react';
import { Typography, Box, } from '@mui/material/';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const initialStyle = {
    color: "var(--blue-active)",
    "&:hover": {
        color: "var(--blue-hover)"
    }
};

const styleSX = {
    box: {
        display: "flex",
        alignItems: "center",




    },
    text: {
        fontSize: "14px",
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


const MenuList = ({ data }: any) => {
    const [open, setOpen] = React.useState(0);

    const handleClick = (id: number) => {
        setOpen(id);
    };
    //const { numSelected } = props;

    return (
        <>{data?.map(({ id, text }: any) =>
            <Box onClick={() => handleClick(id)} key={id} sx={{ display: "flex", cursor: "pointer" }}>
                <Typography sx={styleSX.text}>{text}</Typography>
                <Box sx={styleSX.box}>
                    {open === id ? <ExpandLess sx={styleSX.button1} />
                        : <ExpandMore sx={styleSX.button2} />}
                </Box>
            </Box>
        )}
        </>
    );
}


export default MenuList;
