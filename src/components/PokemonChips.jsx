import React from "react";
import { Chip, Box } from "@mui/material";

import { fetchClickedPokemonData } from "../api/fetchApi";

const PokemonChips = ({ pokemons, setClickedPokemonData }) => {
  const onClickHandle = async (name) => {
    setClickedPokemonData(await fetchClickedPokemonData(name));
  };
  return (
    <Box display="flex" flexBasis="50%" flexWrap="wrap">
      {pokemons?.map((el, index) => (
        <Chip
          label={el.name}
          key={index}
          sx={{
            margin: "5px 8px 5px 0px",
            height: "60px",
            padding: "0 8px",
            lineHeight: "20px",
            fontWeight: "500px",
            fontSize: "20px",
            borderRadius: "44px",
          }}
          color="info"
          clickable
          onClick={() => onClickHandle(el.name)}
        />
      ))}
    </Box>
  );
};

export default PokemonChips;
