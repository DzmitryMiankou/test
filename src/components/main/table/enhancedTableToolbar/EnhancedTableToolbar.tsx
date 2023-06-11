import * as React from 'react';
import { Toolbar } from '@mui/material/';
import MenuList from './menuList/MenuList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

interface EnhancedTableToolbarProps {
    numSelected: number;
};

interface Data {
    id: number;
    text: string;
    rows?: Array<number | string | null> | [Set<string>];
    order?: string;
};

function createData(
    id: number,
    text: string,
    rows?: Array<number | string | null> | [Set<string>],
    order?: string,
): Data {
    return {
        id,
        text,
        rows,
        order,
    };
};


const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const state = useSelector((state: RootState) => state);

    let arr: Array<string> = [];

    state?.listCallReducer?._allList?.forEach((el: any) => {
        if (el?.source === "") return;
        arr.push(el?.source);
    });

    const names = new Set<string>(arr);


    //console.log(state?.listCallReducer?._allList)
    //const { numSelected } = props;
    const rows = [
        createData(1, state?.listCallReducer?.order === ""
            ? "Все типы" : state?.listCallReducer?.order,
            ["Исходящие", "Входящие"], "Все типы"),
        createData(2, "Все сотрудники", ["Yandex", "Google"], "Все сотрудники"),
        createData(3, "Все звонки"),
        createData(4, state?.listCallReducer?.order4 === ""
            ? "Все источники" : state?.listCallReducer?.order4,
            Array.from(names), "Все источники"),
        createData(5, "Все оценки"),
        createData(6, "Все ошибки"),
    ];

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
            <MenuList data={rows} state={state} />
        </Toolbar>
    );
}

export default EnhancedTableToolbar;
