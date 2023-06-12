import React from "react";
import { Box } from "@mui/material";

const enum DateOptions {
  day = "numeric",
  month = "short",
  weekday = "long",
}

const NowDate = () => {
  const getDate = (options: Object): string => {
    const date = new Date().toLocaleString("ru", options);
    return date;
  };

  return (
    <Box sx={{ display: "flex", gap: "5px", color: "var(--grey-text-light)" }}>
      <Box sx={{ textTransform: "capitalize" }}>{`${getDate({
        weekday: DateOptions.weekday,
      })},`}</Box>
      <Box>
        {getDate({
          day: DateOptions.day,
          month: DateOptions.month,
        })}
      </Box>
    </Box>
  );
};

export default NowDate;
