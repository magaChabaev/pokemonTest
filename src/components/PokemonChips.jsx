import React from "react";
import { Chip, Box } from "@mui/material";

import { fetchClickedPokemonData } from "../api/fetchApi";

const PokemonChips = ({ pokemons, setClickedPokemonData }) => {
  const onClickHandle = async (name) => {
    setClickedPokemonData(await fetchClickedPokemonData(name));
  };
  return (
    <Box>
      {pokemons?.map((el, index) => (
        <Chip
          key={index}
          label={el.name}
          color="info"
          clickable
          onClick={() => onClickHandle(el.name)}
        />
      ))}
    </Box>
  );
};

export default PokemonChips;
