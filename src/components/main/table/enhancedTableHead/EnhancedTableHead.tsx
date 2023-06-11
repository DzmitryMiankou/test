import * as React from 'react';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
//import { visuallyHidden } from '@mui/utils';
import { Data } from '../Table';
import { Order } from '../Table';

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
    padding: string;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'in_out',
        numeric: false,
        disablePadding: false,
        label: 'Тип',
        padding: "2px",
    },
    {
        id: 'date',
        numeric: false,
        disablePadding: false,
        label: 'Время',
        padding: "16px",
    },
    {
        id: 'person_avatar',
        numeric: false,
        disablePadding: false,
        label: 'Сотрудник',
        padding: "16px",
    },
    {
        id: 'partner_data',
        numeric: false,
        disablePadding: false,
        label: 'Звонок',
        padding: "16px",
    },
    {
        id: 'source',
        numeric: true,
        disablePadding: false,
        label: 'Источник',
        padding: "16px",
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Оценка',
        padding: "16px",
    },
    {
        id: 'time',
        numeric: true,
        disablePadding: false,
        label: 'Длительность',
        padding: "16px",
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string | undefined;
    rowCount: number;
}


const EnhancedTableHead = (props: EnhancedTableProps) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    /*const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };*/

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                        sx={{ color: "var(--blue-checked)", }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{ padding: headCell.padding }}
                    >
                        <Typography
                            //active={orderBy === headCell.id}
                            //direction={orderBy === headCell.id ? order : 'asc'}
                            //TableSortLabel
                            //onClick={createSortHandler(headCell.id)}
                            //sx={{ color: "var(--grey-text-light)", "&:hover": { color: "var( --blue-hover)" } }}
                            sx={{ color: "var(--grey-text-light)", fontSize: 14 }}
                        >
                            {headCell.label}

                        </Typography>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default EnhancedTableHead;