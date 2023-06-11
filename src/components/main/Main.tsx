import React from 'react';
import EnhancedTable from './table/Table';
import { Box } from '@mui/material';
import { useGetDateQuery } from '../../redux/RTK/rtk';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { AppDispatch } from '../../redux/store';
import { getDialogListActin } from '../../redux/reducers/listCall-reducer';


const Main = () => {
    const { data } = useGetDateQuery("mango/getList");
    const state = useSelector((state: RootState) => state);
    const dispatch: AppDispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getDialogListActin(data));
    }, [data, dispatch]);

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <EnhancedTable data={state?.listCallReducer?.listCall} />
        </Box>
    );
}

export default Main;
