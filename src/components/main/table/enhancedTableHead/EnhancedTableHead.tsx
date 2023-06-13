import * as React from "react";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { Data } from "../Table";
import { Order } from "../Table";
import { visuallyHidden } from "@mui/utils";

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
  padding: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "in_out",
    numeric: false,
    disablePadding: false,
    label: "Тип",
    padding: "2px",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Время",
    padding: "16px",
  },
  {
    id: "person_avatar",
    numeric: false,
    disablePadding: false,
    label: "Сотрудник",
    padding: "16px",
  },
  {
    id: "partner_data",
    numeric: false,
    disablePadding: false,
    label: "Звонок",
    padding: "16px",
  },
  {
    id: "source",
    numeric: false,
    disablePadding: false,
    label: "Источник",
    padding: "16px",
  },
  {
    id: "protein",
    numeric: false,
    disablePadding: false,
    label: "Оценка",
    padding: "16px",
  },
  {
    id: "time",
    numeric: true,
    disablePadding: false,
    label: "Длительность",
    padding: "16px",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string | undefined;
  rowCount: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
}

const EnhancedTableHead = (props: EnhancedTableProps) => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;

  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" sx={{ borderBottom: "none" }}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
            sx={{ color: "var(--blue-checked)" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            onClick={createSortHandler(headCell.id)}
            sx={{
              padding: headCell.padding,
              borderBottom: "1px solid #EAF0FA",
            }}
          >
            <TableSortLabel
              sx={{
                color: "var(--grey-text-light)",
                fontSize: 14,
                "&.Mui-active": {
                  color: "rgba(0, 0, 0, 0.6)",
                },
              }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
