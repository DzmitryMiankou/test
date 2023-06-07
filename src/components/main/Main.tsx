import React from 'react';
import EnhancedTable from './table/Table';
import { Box } from '@mui/material';


const Main = () => {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <EnhancedTable />
        </Box>
    );
}

export default Main;
