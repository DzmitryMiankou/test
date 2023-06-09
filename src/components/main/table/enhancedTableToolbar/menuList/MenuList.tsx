import * as React from 'react';
import { Typography, Box, } from '@mui/material/';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SxProps, Theme } from "@mui/material";

const styleSX: Record<string, SxProps<Theme> | undefined> = {
    box: {
        display: "flex",
        alignItems: "center",
    },
};

const MenuList = ({ data }: any) => {
    const [open, setOpen] = React.useState<number>(0);
    const [isShown, setIsShown] = React.useState<number>(0);

    const handleClick = (id: number) => {
        setOpen(id);
    };

    //const { numSelected } = props;
    return (
        <>{data?.map(({ id, text }: any) =>
            <Box
                onMouseEnter={() => setIsShown(id)}
                onMouseLeave={() => setIsShown(0)}
                onClick={() => handleClick(id)}
                key={id}
                sx={{ display: "flex", cursor: "pointer" }}>
                <Typography sx={{
                    fontSize: "14px",
                    color: isShown === id ? "var(--blue-hover)" :
                        open !== id ? "var(--grey-text-light)" : "var(--blue-hover)",
                }}>
                    {text}
                </Typography>
                <Box sx={styleSX.box}>
                    {open === id ? <ExpandLess sx={{
                        color: isShown === id ? "var(--blue-hover)" : "var(--blue-hover)",
                        "&:hover": {
                            color: "var(--blue-hover)"
                        }
                    }} />
                        : <ExpandMore sx={{
                            color: isShown === id ? "var(--blue-hover)" : "#ADBFDF",
                        }} />}
                </Box>
            </Box>
        )}
        </>
    );
}


export default MenuList;
