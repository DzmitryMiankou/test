interface ActionA {
    type: 'SET_ALL_LIST';
    list: {
        total_rows: string;
        results: {
            total_rows: string;
            results: Array<Object>;
        }[];
    }
}


const LISTALL = "SET_ALL_LIST";

const initialState: null | any = {
    listCall: null,
};

const getListCallReducer = (state = initialState, action: ActionA) => {
    switch (action.type) {
        case LISTALL: {
            console.log(action.list)
            return { ...state, listCall: action.list };
        }
        default:
            return state;
    }
};

export const getDialogListActin = (list: {
    total_rows: string;
    results: {
        total_rows: string;
        results: Array<Object>;
    }[];
}) => ({ type: LISTALL, list });

export default getListCallReducer;