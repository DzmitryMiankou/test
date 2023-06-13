import { getFilter } from "../services/listCallReducerService";

interface ActionA {
  type: string;
  list?: {
    total_rows: string;
    results: {
      total_rows: string;
      results: Array<Object>;
    }[];
  };
  typing?: any;
}

const LISTALL: string = "SET_ALL_LIST";
const LISTFILTERTYPE: string = "FILTER_LIST_TYPE";
const DELETEFILTER: string = "DELETEFILTER_SOURCE";

const initialState: null | number | string | any = {
  _allList: null,
  listCall: null,
  order: "",
  order4: "",
  total_rows: 0,
};

const getListCallReducer = (state = initialState, action: ActionA) => {
  let copy;
  switch (action.type) {
    case LISTALL: {
      return {
        ...state,
        _allList: action.list?.results,
        listCall: action.list?.results,
        total_rows: action.list?.total_rows,
      };
    }
    case LISTFILTERTYPE: {
      copy = { ...state, order: action.typing.order };
      let prop: number | null = null;
      if (action.typing.order === "Входящие") prop = 1;
      if (action.typing.order === "Исходящие") prop = 0;
      if (action.typing.order === "Все типы")
        return {
          ...copy,
          listCall: copy?._allList,
          order: action.typing.order,
        };
      copy = {
        ...state,
        listCall: getFilter(copy?._allList, prop, "in_out"),
        order: action.typing.order,
      };
      return copy;
    }
    case DELETEFILTER: {
      copy = { ...state, listCall: state._allList, order: "Все типы" };
      return copy;
    }
    default:
      return state;
  }
};

export const getDialogListAction = (list: {
  total_rows: string;
  results: {
    total_rows: string;
    results: Array<Object>;
  }[];
}) => ({ type: LISTALL, list });

export const filterDialogListTYPEAction = (typing: Object) => ({
  type: LISTFILTERTYPE,
  typing,
});
export const deleteFilterAction = () => ({
  type: DELETEFILTER,
});

export default getListCallReducer;
