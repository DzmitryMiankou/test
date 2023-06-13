import * as React from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Checkbox,
  Table,
  Box,
} from "@mui/material";
import EnhancedTableToolbar from "./enhancedTableToolbar/EnhancedTableToolbar";
import EnhancedTableHead from "./enhancedTableHead/EnhancedTableHead";
import imgNoAva from "../../../img/noavatar.jpg";
import CallMadeIcon from "@mui/icons-material/CallMade";
import PlayAudio from "./playAudio/PlayAudio";
//import { useGetAudioQuery } from "../../../redux/RTK/rtk";

const toMinetfromSec = (sec: number): null | string => {
  if (sec) {
    return Math.floor(sec / 60) + ":" + (sec % 60);
  }
  return null;
};

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

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

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

  const formatNumberPhone = (str: string): string | null => {
    const cleaned: string = ("" + str).replace(/\D/g, "");
    const match: RegExpMatchArray | null = cleaned.match(
      /^(1|)?(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/
    );
    if (match) {
      const intlCode: "+1 " | "+" = match[1] ? "+1 " : "+";
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
                  <React.Fragment key={row?.date}>
                    <TableRow
                      onMouseEnter={() => setIsShown(`${row?.id}`)}
                      onMouseLeave={() => setIsShown("")}
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
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
                        onClick={(event) => handleClick(event, row?.date)}
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
                        onClick={(event) => handleClick(event, row?.date)}
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
                        onClick={(event) => handleClick(event, row?.date)}
                        sx={{
                          width: "70px",
                          borderBottom: "1px solid #EAF0FA",
                        }}
                        align="left"
                      >{`${new Date(row?.date).toLocaleString("ru", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}`}</TableCell>
                      <TableCell
                        onClick={(event) => handleClick(event, row?.date)}
                        sx={{
                          width: "120px",
                          borderBottom: "1px solid #EAF0FA",
                        }}
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
                        onClick={(event) => handleClick(event, row?.date)}
                        sx={{ borderBottom: "1px solid #EAF0FA" }}
                        align="left"
                      >
                        {formatNumberPhone(row?.partner_data.phone)}
                      </TableCell>
                      <TableCell
                        onClick={(event) => handleClick(event, row?.date)}
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
                        onClick={(event) => handleClick(event, row?.date)}
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
                        onClick={(event) => {
                          row?.time !== 0
                            ? event.preventDefault()
                            : handleClick(event, row?.date);
                        }}
                        sx={{
                          borderBottom: "1px solid #EAF0FA",
                          width: "350px",
                          cursor: row?.time !== 0 ? "default" : "pointer",
                        }}
                        align="right"
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          {row?.time === 0 ? (
                            <></>
                          ) : isShown !== `${row?.id}` ? (
                            toMinetfromSec(+row?.time)
                          ) : (
                            <></>
                          )}
                          {row?.time !== 0 ? (
                            isShown === `${row?.id}` ? (
                              <PlayAudio
                                id={row?.id}
                                id_s={row?.partnership_id}
                                time={+row?.time}
                              />
                            ) : (
                              <></>
                            )
                          ) : (
                            <></>
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
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

/*const dataGap = (data: string): string => {
    if (data === "2023-06-13 13:43:38") {
      return "0";
    } else {
      return new Date(data).toLocaleString("ru", {
        day: "2-digit",
        month: "2-digit",
      });
    }
  };
                      <TableRow sx={{ fontSize: "14px" }}>
                      <TableCell sx={{ borderBottom: "none" }} />
                      <TableCell
                        sx={{
                          borderBottom: "1px solid #EAF0FA",
                          paddingLeft: 0,
                        }}
                      >
                        {dataGap(row?.date)}
                      </TableCell>
                      <>
                        {[1, 2, 3, 4, 5, 6].map((number: number, i) => (
                          <TableCell
                            key={i}
                            sx={{ borderBottom: "1px solid #EAF0FA" }}
                          />
                        ))}
                      </>
                    </TableRow>
  */
