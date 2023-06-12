import * as React from "react";
import { Toolbar, Box } from "@mui/material/";
import MenuList from "./menuList/MenuList";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import MenuDate from "./menuDate/MenuDate";
import DeleteFilterButton from "./deleteFilter/DeleteFilter";
import SearchButton from "./search/Search";

interface EnhancedTableToolbarProps {
  numSelected: number;
}

interface Data {
  id: number;
  text: string;
  rows?: Array<number | string | null> | [Set<string>];
  order?: string;
}

function createData(
  id: number,
  text: string,
  rows?: Array<number | string | null> | [Set<string>],
  order?: string
): Data {
  return {
    id,
    text,
    rows,
    order,
  };
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const state = useSelector((state: RootState) => state);

  let arr: Array<string> = [];

  state?.listCallReducer?._allList?.forEach((el: any) => {
    if (el?.source === "") return;
    arr.push(el?.source);
  });

  const names = new Set<string>(arr);

  const rows = [
    createData(
      1,
      state?.listCallReducer?.order === ""
        ? "Все типы"
        : state?.listCallReducer?.order,
      ["Исходящие", "Входящие"],
      "Все типы"
    ),
    createData(2, "Все сотрудники", ["Yandex", "Google"], "Все сотрудники"),
    createData(3, "Все звонки", ["Yandex", "Google"], "Все звонки"),
    createData(
      4,
      state?.listCallReducer?.order4 === ""
        ? "Все источники"
        : state?.listCallReducer?.order4,
      Array.from(names),
      "Все источники"
    ),
    createData(5, "Все оценки", ["Yandex", "Google"], "Все оценки"),
    createData(6, "Все ошибки", ["Yandex", "Google"], "Все ошибки"),
  ];

  return (
    <Toolbar
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "0 !important",
        gap: "30px",
        marginBottom: "20px",
      }}
    >
      <MenuDate />
      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "auto 1fr",
          gridTemplateAreas: `"deleteB menu"`,
        }}
      >
        <SearchButton />
        <Box
          sx={{
            gridArea: "menu",
            display: "flex",
            gap: "2%",
            justifyContent: "flex-end",
          }}
        >
          <DeleteFilterButton />
          <MenuList data={rows} state={state} />
        </Box>
      </Box>
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
