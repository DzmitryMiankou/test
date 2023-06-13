import * as React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { CustomWidthTooltip } from "../listPartners/ListPartners";

const UserData = ({ dadaUser }: { dadaUser: any }) => {
  return (
    <Box sx={{ p: "20px 32px 6px 32px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: "18px", color: "var(--blue-text-dark)" }}>
          {`${dadaUser.surname} ${dadaUser.name}`}
        </Typography>
        <Box sx={{ cursor: "pointer", marginLeft: "auto" }}>
          <CustomWidthTooltip title="Выйти" placement="bottom-end">
            <LogoutOutlinedIcon
              sx={{
                color: "var(--blue-checked)",
                "&:hover": {
                  color: "var(--blue-buuton-hover)",
                },
              }}
            />
          </CustomWidthTooltip>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            color: "var(--grey-source)",
            fontWeight: 400,
          }}
        >
          {`${dadaUser.position}`}
        </Typography>
        <Box
          sx={{
            width: "4px",
            height: "4px",
            backgroundColor: "var(--grey-source)",
            borderRadius: "48px",
          }}
        ></Box>
        <Typography
          sx={{
            fontSize: "15px",
            color: "var(--grey-source)",
          }}
        >
          {`${dadaUser.partnership.city}`}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          marginTop: "14px",
          borderBottom: "1px solid #EAF0FA",
          paddingBottom: "10px",
        }}
      >
        <Typography
          component="a"
          href={`tel:${dadaUser.phone}`}
          sx={{
            fontSize: "15px",
            color: "var(--grey-source)",
            textDecoration: "none",
            width: "min-content",
          }}
        >
          {`${dadaUser.phone}`}
        </Typography>
        <Typography
          component="a"
          href={`mailto:${dadaUser.email}`}
          sx={{
            fontSize: "15px",
            color: "var(--grey-source)",
            textDecoration: "none",
            width: "min-content",
          }}
        >
          {`${dadaUser.email}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserData;
