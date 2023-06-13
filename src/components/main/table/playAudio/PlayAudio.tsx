import React from "react";
import { Box, IconButton, Slider } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import DownloadIcon from "@mui/icons-material/Download";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material";

const Keyframes = styled("div")({
  "@keyframes pulsate": {
    "0%": {
      opacity: 0,
      transform: "translateX(20px)",
    },
    "100%": { opacity: 1, transform: "translateX(0)" },
  },
  animation: "pulsate 0.5s",
  position: "absolute",
  width: "300px",
});

const toMinetfromSec = (sec: number): null | string => {
  if (sec) {
    return Math.floor(sec / 60) + ":" + (sec % 60);
  }
  return null;
};

export default function PlayAudio({ id, id_s, time }: any) {
  const [isGet, setGet] = React.useState<boolean>(false);
  /*const { data } = useGetAudioQuery(
    `mango/getRecord?record=${id}&partnership_id=${id_s}`
  );*/
  return (
    <Keyframes>
      <Box
        sx={{
          backgroundColor: "#EAF0FA",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          p: "12px",
          borderRadius: "48px",
          height: "35px",
        }}
      >
        {toMinetfromSec(time)}
        <IconButton
          sx={{
            color: "var(--blue-hover)",
            backgroundColor: "var(--white)",
            padding: 0,
          }}
        >
          <PlayArrowRoundedIcon />
        </IconButton>
        <Slider
          aria-label="time-indicator"
          size="small"
          sx={{
            color: "var(--blue-checked)",
            height: 4,
            "& .MuiSlider-thumb": {
              display: "none",
            },
          }}
        />
        <IconButton
          sx={{
            color: "var(--blue-checked)",
            padding: 0,
            transition: 0.2,
            "&:hover": {
              color: "var(--blue-hover)",
            },
          }}
        >
          <DownloadIcon />
        </IconButton>
        <Box
          onMouseEnter={() => setGet(true)}
          onMouseLeave={() => setGet(false)}
        >
          <IconButton
            sx={{
              color: "var(--blue-hover)",
              padding: 0,
              transition: 0.2,
              visibility: isGet ? "visible" : "hidden",
            }}
          >
            <ClearIcon />
          </IconButton>
        </Box>
      </Box>
    </Keyframes>
  );
}
