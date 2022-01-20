import React from "react";
import { Box, Typography } from "@mui/material";

import cursor from "../assets/Icon.png";

const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography border={1} display="inline" padding="2px">
        Pokemon API
      </Typography>
      <Box display="flex" alignItems="center">
        <img
          src={cursor}
          alt="image"
          className="img"
          style={{ width: "20px", height: "24px", marginRight: "10px" }}
        />
        <Typography display="inline">
          Нажмите на <br />
          нужного покемона
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
