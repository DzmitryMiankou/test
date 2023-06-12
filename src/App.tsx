import React from "react";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import { Box } from "@mui/material";
import Main from "./components/main/Main";
import { SxProps, Theme } from "@mui/material";

const styleSX: Record<string, SxProps<Theme>> = {
  box: {
    display: "grid",
    gridTemplateColumns: "250px 1fr",
    alignSelf: "center",
    justifyItems: "center",
    rowGap: "20px",
    gridTemplateRows: "64px 1fr",
    gridTemplateAreas: `"aside header"
       "aside main"`,
  },
};

const App = () => {
  return (
    <Box sx={styleSX.box}>
      <Header />
      <Aside />
      <Main />
    </Box>
  );
};

export default App;
