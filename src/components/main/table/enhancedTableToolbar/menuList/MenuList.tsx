import * as React from "react";
import { Typography, Box } from "@mui/material/";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { SxProps, Theme } from "@mui/material";
import Dashboard from "./dashBoard/DashBoard";
import { RootState } from "../../../../../redux/store";

const styleSX: Record<string, SxProps<Theme>> = {
  box: {
    display: "flex",
    alignItems: "center",
  },
};

const MenuList = ({ data, state }: { [x: string]: any; state: RootState }) => {
  const [open, setOpen] = React.useState<number>(0);
  const [isShown, setIsShown] = React.useState<number>(0);

  const handleClick = (id: number): void => {
    setOpen(id);
  };

  return (
    <>
      {data?.map(
        ({
          id,
          text,
          rows,
          order,
        }: {
          id: number;
          text: string;
          rows?: Array<number | string | null>;
          order: string;
        }) => (
          <Dashboard
            setIsShown={setIsShown}
            id={id}
            key={id}
            order={order}
            rows={rows}
            setOpen={setOpen}
            state={state}
            components={
              <>
                <Box
                  onMouseEnter={() => setIsShown(id)}
                  onMouseLeave={() => setIsShown(0)}
                  onClick={() => handleClick(id)}
                  sx={{
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component={"div"}
                    sx={{
                      fontSize: "14px",
                      color:
                        isShown === id || text !== order
                          ? "var(--blue-hover)"
                          : open !== id
                          ? "var(--grey-text-light)"
                          : "var(--blue-text-dark)",
                    }}
                  >
                    {text}
                  </Typography>
                  <Box sx={styleSX.box}>
                    {open === id ? (
                      <ExpandLess
                        sx={{
                          color:
                            isShown === id
                              ? "var(--blue-hover)"
                              : "var(--blue-hover)",
                          "&:hover": {
                            color: "var(--blue-hover)",
                          },
                        }}
                      />
                    ) : (
                      <ExpandMore
                        sx={{
                          color:
                            isShown === id
                              ? "var(--blue-hover)"
                              : "var(--blue-checked)",
                        }}
                      />
                    )}
                  </Box>
                </Box>
              </>
            }
          />
        )
      )}
    </>
  );
};

export default MenuList;
