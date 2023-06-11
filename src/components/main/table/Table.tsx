import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import EnhancedTableToolbar from './enhancedTableToolbar/EnhancedTableToolbar';
import EnhancedTableHead from './enhancedTableHead/EnhancedTableHead';
import imgNoAva from '../../../img/noavatar.jpg';
import CallMadeIcon from '@mui/icons-material/CallMade';

type PartnerDadaType = {
  id: string,
  name: string,
  phone: string,
}
export interface Data {
  date: string;
  source: string;
  person_avatar: string;
  in_out: string;
  protein: number;
  time: number;
  partner_data: PartnerDadaType;
}

export type Order = 'asc' | 'desc';


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string | any },
  b: { [key in Key]: number | string | any },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array?.map((el, index) => [el, index] as [T, number]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}




export default function EnhancedTable({ data }: { [x: string]: any }) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data | any>();
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(25);
  const [isShown, setIsShown] = React.useState<string>("");

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data?.listCall?.map((n: any) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (name: string | any) => selected.indexOf(name) !== -1;


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.listCall?.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(data?.listCall, getComparator(order, orderBy))?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, data],
  );

  return (
    <Box sx={{ width: 'var(--indentSide)' }}>
      <EnhancedTableToolbar numSelected={selected.length} />
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data?.listCall?.length}
            />
            <TableBody>
              {visibleRows?.map((row, index) => {
                const isItemSelected = isSelected(row?.date);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    onMouseEnter={() => setIsShown(`${row?.id}`)}
                    onMouseLeave={() => setIsShown("")}
                    hover
                    onClick={(event) => handleClick(event, row?.date)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row?.date}
                    selected={isItemSelected}
                    sx={{
                      cursor: 'pointer',
                      "&:hover": { background: "var(--blue-selected-row) !important" },
                    }}
                  >
                    <TableCell padding="checkbox" sx={{
                      borderBottom: "none",
                      width: "20px",
                    }}>
                      <Checkbox
                        id={`${row?.id}`}
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}

                        sx={{
                          color: "var(--blue-checked)",
                          display: isShown === `${row?.id}` || isItemSelected ? "flex" : "none",
                          alignItems: "center"

                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ width: "50px", paddingLeft: 0, paddingRight: 0 }}
                      component="th"
                      id={labelId}
                      scope="row"
                    >
                      {
                        row?.in_out === 0 ?
                          <CallMadeIcon sx={{ color: "var(--green-analytic)", fontSize: "20px" }} />
                          : row?.in_out === 1 ?
                            < CallMadeIcon sx={{ color: "var(--blue-arrow)", fontSize: "20px", transform: "rotate(180deg)", }} />
                            : <CallMadeIcon sx={{ color: "var(--green-red)", fontSize: "20px" }} />
                      }
                    </TableCell>
                    <TableCell sx={{ width: "70px" }} align="left">{
                      `${new Date(row?.date).toLocaleString("ru",
                        { hour: '2-digit', minute: '2-digit' })}`
                    }</TableCell>
                    <TableCell sx={{ width: "120px" }} align="left" >
                      <Box component="img" alt="avatar"
                        src={`${row?.person_avatar}` || imgNoAva}
                        sx={{
                          height: "30px", width: "30px", borderRadius: "50px"
                        }} />
                    </TableCell>
                    <TableCell align="left">{row?.partner_data.phone}</TableCell>
                    <TableCell sx={{ color: "var(--grey-source)" }} align="right">{row?.source}</TableCell>
                    <TableCell align="right">{row?.protein}</TableCell>
                    <TableCell align="right">{row?.time}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50]}
          component="div"
          count={+data?.total_rows}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box >
  );
}