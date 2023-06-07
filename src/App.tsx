import React from 'react';
import Aside from './components/aside/Aside';
import Header from './components/header/Header';
import { Box, } from '@mui/material';

const styleSX = {
  box: {
    display: "grid",
    gridTemplateColumns: "250px 1fr",
    gridTemplateAreas:
      `"aside header"
       "aside ."`,
  }
};

const App = () => {
  return (
    <Box sx={styleSX.box}>
      <Header />
      <Aside />
    </Box>
  );
}

export default App;
