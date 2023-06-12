import * as React from 'react';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
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
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string | undefined;
    rowCount: number;
}


const EnhancedTableHead = (props: EnhancedTableProps) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } =
        props;

    return (
        <TableHead >
            <TableRow>
                <TableCell padding="checkbox" sx={{ borderBottom: "none", }}>
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
                        sx={{ padding: headCell.padding, borderBottom: "1px solid #EAF0FA", }}
                    >
                        <Typography sx={{ color: "var(--grey-text-light)", fontSize: 14 }}>
                            {headCell.label}
                        </Typography>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default EnhancedTableHead;