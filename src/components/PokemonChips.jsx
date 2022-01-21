import React from "react";
import { Chip, Box } from "@mui/material";

import { fetchClickedPokemonData } from "../api/fetchApi";
import { display } from "@mui/system";

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
            marginRight: "6px",
            marginTop: "10px",
            height: "60px",
            padding: "0 5px",
            fontSize: "1.25rem",
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
