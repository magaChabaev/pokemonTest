import React from "react";
import { Box, Typography } from "@mui/material";

import cursor from "../assets/Icon.png";

const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom='54px'>
      <Box border={1} width='107px' height='28px' textAlign='center'>
        <Typography
          lineHeight='13.52px'
          display="inline"
          fontSize="12px"
          fontWeight="500"
        >
          ПОКЕМОНЫ API
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <img
          src={cursor}
          alt="image"
          style={{ width: "24.25px", height: "30.66px", marginRight: "11px" }}
        />
        <Typography
          display="inline"
          fontSize="12px"
          fontWeight="600"
          lineHeight="12px"
        >
          Нажмите на <br />
          нужное Покемона
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
