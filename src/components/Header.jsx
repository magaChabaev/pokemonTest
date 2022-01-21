import React from "react";
import { Box, Typography } from "@mui/material";

import cursor from "../assets/Icon.png";

const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography
        border={1}
        display="inline"
        padding="4px"
        fontSize="0.75rem"
        fontWeight="500"
      >
        Покемоны API
      </Typography>
      <Box display="flex" alignItems="center">
        <img
          src={cursor}
          alt="image"
          className="img"
          style={{ width: "20px", height: "24px", marginRight: "10px" }}
        />
        <Typography display="inline" fontSize="0.75rem" fontWeight="500">
          Нажмите на <br />
          нужного покемона
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
