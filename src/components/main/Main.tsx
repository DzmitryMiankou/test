import React from 'react';
import EnhancedTable from './table/Table';
import { Box } from '@mui/material';
import { useGetParamsQuery } from '../../redux/RTK/rtk';


const Main = () => {
    const { data } = useGetParamsQuery();

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <EnhancedTable data={data?.results} />
        </Box>
    );
}

export default Main;
