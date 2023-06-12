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
};


const LISTALL: string = "SET_ALL_LIST";
const LISTFILTERTYPE: string = "FILTER_LIST_TYPE";
const LISTFILTERSOURCE: string = "FILTER_LIST_SOURCE";

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
                total_rows: action.list?.total_rows
            };
        }
        case LISTFILTERTYPE: {
            copy = { ...state, order: action.typing.order };
            let prop: number | null = null;
            if (action.typing.order === "Входящие") prop = 1;
            if (action.typing.order === "Исходящие") prop = 0;
            if (action.typing.order === "Все типы") return { ...copy, listCall: copy?._allList };
            copy = {
                ...state,
                listCall: getFilter(copy?._allList, prop, "in_out"),
                order: action.typing.order
            };
            return copy;
        }
        case LISTFILTERSOURCE: {
            copy = { ...state, order4: action.typing.order };
            if (action.typing.order === "Все источники") return { ...copy, listCall: copy?._allList };
            copy = {
                ...state,
                listCall: getFilter(copy?._allList, action.typing.order, "source"),
                order4: action.typing.order
            };
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

export const filterDialogListTYPEAction = (typing: Object) => ({ type: LISTFILTERTYPE, typing });
export const filterDialogListSOURCEction = (typing: Object) => ({ type: LISTFILTERSOURCE, typing });

export default getListCallReducer;