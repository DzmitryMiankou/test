import * as React from 'react';
import { Toolbar } from '@mui/material/';
import MenuList from './menuList/MenuList';

interface EnhancedTableToolbarProps {
    numSelected: number;
}


interface Data {
    id: number;
    text: string;
}


function createData(
    id: number,
    text: string,
): Data {
    return {
        id,
        text,
    };
}

const rows = [
    createData(1, "Все типы"),
    createData(2, "Все сотрудники"),
    createData(3, "Все звонки"),
    createData(4, "Все источники"),
    createData(5, "Все оценки"),
    createData(6, "Все ошибки"),
];


const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    //const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                bgcolor: "none",
                display: "flex",
                paddingRight: "0 !important",
                justifyContent: "flex-end",
                gap: "2%"
            }}
        >
            <MenuList data={rows} />
        </Toolbar>
    );
}


export default EnhancedTableToolbar;
