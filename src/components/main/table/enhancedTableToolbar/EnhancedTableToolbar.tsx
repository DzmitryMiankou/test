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
  rows?: Array<number | string | null> | [Set<string>] | any;
  order?: string;
}

function createData(
  id: number,
  text: string,
  rows?: Array<number | string | null> | [Set<string>] | any,
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
    createData(
      3,
      "Все звонки",
      [
        "Все клиенты",
        "Новые клиенты",
        "Все исполнители",
        "Через приложение",
        "Прочие звонки",
      ],
      "Все звонки"
    ),
    createData(
      4,
      "Все источники",
      ["Yandex", "Google", "Mail"],
      "Все источники"
    ),
    createData(
      5,
      "Все оценки",
      [
        "Распознать",
        "Скрипт не использован",
        <Box
          sx={{
            color: "#EA1A4F",
            backgroundColor: "#FEE9EF",
            border: "1px solid #EA1A4F",
            borderRadius: "4px",
            p: "6px 8px",
          }}
        >
          Плохо
        </Box>,
        <Box
          sx={{
            color: "#122945",
            background: "#D8E4FB",
            border: "1px solid #ADBFDF",
            borderRadius: "4px",
            p: "6px 8px",
          }}
        >
          Хорошо
        </Box>,
        <Box
          sx={{
            color: "#00A775",
            background: "#DBF8EF",
            border: "1px solid #28A879",
            borderRadius: "4px",
            p: "6px 8px",
          }}
        >
          Отлично
        </Box>,
        <Box
          sx={{
            width: "8px",
            height: "8px",
            background: "#EA1A4F",
            borderRadius: "48px",
          }}
        />,
        <Box sx={{ display: "flex", gap: "3px" }}>
          <Box
            sx={{
              width: "8px",
              height: "8px",
              background: "#ADBFDF",
              borderRadius: "48px",
            }}
          />
          <Box
            sx={{
              width: "8px",
              height: "8px",
              background: "#ADBFDF",
              borderRadius: "48px",
            }}
          />
        </Box>,
        <Box sx={{ display: "flex", gap: "3px" }}>
          <Box
            sx={{
              width: "8px",
              height: "8px",
              background: "#28A879",
              borderRadius: "48px",
            }}
          />
          <Box
            sx={{
              width: "8px",
              height: "8px",
              background: "#28A879",
              borderRadius: "48px",
            }}
          />
          <Box
            sx={{
              width: "8px",
              height: "8px",
              background: "#28A879",
              borderRadius: "48px",
            }}
          />
        </Box>,
      ],
      "Все оценки"
    ),
    createData(
      6,
      "Все ошибки",
      [
        "Приветствие",
        "Имя",
        "Цена",
        "Скидка",
        "Предзаказ",
        "Благодарность",
        "Стоп слова",
      ],
      "Все ошибки"
    ),
  ];

  return (
    <Toolbar
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "0 !important",
        gap: "30px",
        marginBottom: "18px",
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
            alignItems: "center",
            gap: "2%",
            justifyContent: "flex-end",
          }}
        >
          <DeleteFilterButton state={state?.listCallReducer?.order} />
          <MenuList data={rows} state={state} />
        </Box>
      </Box>
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
