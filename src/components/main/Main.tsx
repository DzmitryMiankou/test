import React from 'react';
import EnhancedTable from './table/Table';
import { Box } from '@mui/material';
import { useGetDateQuery } from '../../redux/RTK/rtk';


const Main = () => {
    const { data } = useGetDateQuery("mango/getList");

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <EnhancedTable data={data} />
        </Box>
    );
}

export default Main;
