import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import EnhancedTableToolbar from "./enhancedTableToolbar/EnhancedTableToolbar";
import EnhancedTableHead from "./enhancedTableHead/EnhancedTableHead";
import imgNoAva from "../../../img/noavatar.jpg";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { useGetAudioQuery } from "../../../redux/RTK/rtk";

function Audio({ id, id_s }: any) {
  const { data } = useGetAudioQuery(
    `mango/getRecord?record=${id}&partnership_id=${id_s}`
  );

  return <Box>{data}</Box>;
}

type PartnerDadaType = {
  id: string;
  name: string;
  phone: string;
};
export interface Data {
  date: string;
  source: string;
  person_avatar: string;
  in_out: string;
  protein: number;
  time: number;
  partner_data: PartnerDadaType;
}

export type Order = "asc" | "desc";

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
  orderBy: Key
): (
  a: { [key in Key]: number | string | any },
  b: { [key in Key]: number | string | any }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
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
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data | any>();
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState<number>(30);
  const [isShown, setIsShown] = React.useState<string>("");

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data?.listCall?.map((n: any) => n.date);
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
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name: string | any) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - data.listCall?.length)
      : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(data?.listCall, getComparator(order, orderBy))?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, data]
  );

  const formatNumberPhone = (str: string) => {
    let cleaned = ("" + str).replace(/\D/g, "");

    let match = cleaned.match(/^(1|)?(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
      //Remove the matched extension code
      //Change this to format for any country code.
      let intlCode = match[1] ? "+1 " : "+";
      return [
        intlCode,
        match[2],
        " (",
        match[3],
        ") ",
        match[4],
        "-",
        match[5],
        "-",
        match[5],
      ].join("");
    }

    return null;
  };

  return (
    <Box sx={{ width: "var(--indentSide)", marginBottom: "150px" }}>
      <EnhancedTableToolbar numSelected={selected.length} />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ boxShadow: "0px 4px 5px #E9EDF3" }}>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
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
                      cursor: "pointer",
                      "&:hover": {
                        background: "var(--blue-selected-row) !important",
                      },
                    }}
                  >
                    <TableCell
                      padding="checkbox"
                      sx={{
                        borderBottom: "none",
                        width: "20px",
                      }}
                    >
                      <Checkbox
                        id={`${row?.id}`}
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                        sx={{
                          color: "var(--blue-checked)",
                          display:
                            isShown === `${row?.id}` ||
                            isItemSelected ||
                            !selected
                              ? "flex"
                              : "none",
                          alignItems: "center",
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        width: "50px",
                        paddingLeft: 0,
                        borderBottom: "1px solid #EAF0FA",
                        paddingRight: 0,
                      }}
                      component="th"
                      id={labelId}
                      scope="row"
                    >
                      {row?.in_out === 0 ? (
                        <CallMadeIcon
                          sx={{
                            color: "var(--green-analytic)",
                            fontSize: "20px",
                          }}
                        />
                      ) : row?.in_out === 1 ? (
                        <CallMadeIcon
                          sx={{
                            color: "var(--blue-arrow)",
                            fontSize: "20px",
                            transform: "rotate(180deg)",
                          }}
                        />
                      ) : (
                        <CallMadeIcon
                          sx={{ color: "var(--green-red)", fontSize: "20px" }}
                        />
                      )}
                    </TableCell>
                    <TableCell
                      sx={{ width: "70px", borderBottom: "1px solid #EAF0FA" }}
                      align="left"
                    >{`${new Date(row?.date).toLocaleString("ru", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`}</TableCell>
                    <TableCell
                      sx={{ width: "120px", borderBottom: "1px solid #EAF0FA" }}
                      align="left"
                    >
                      <Box
                        component="img"
                        alt="avatar"
                        src={`${row?.person_avatar}` || imgNoAva}
                        sx={{
                          height: "30px",
                          width: "30px",
                          borderRadius: "50px",
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "1px solid #EAF0FA" }}
                      align="left"
                    >
                      {formatNumberPhone(row?.partner_data.phone)}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "var(--grey-source)",
                        borderBottom: "1px solid #EAF0FA",
                        width: "15%",
                      }}
                      align="left"
                    >
                      {row?.source}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "1px solid #EAF0FA",
                        color: "#EA1A4F",
                        width: "200px",
                      }}
                      align="left"
                    >
                      {row?.errors}
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "1px solid #EAF0FA" }}
                      align="right"
                    >
                      {row?.time === 0 ? <></> : `0:${row?.time}`}
                      {row?.time !== 0 ? (
                        <Audio id={row?.id} id_s={row?.partnership_id} />
                      ) : (
                        <></>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
