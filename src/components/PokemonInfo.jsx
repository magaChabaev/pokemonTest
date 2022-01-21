import { Box, Typography } from "@mui/material";
import React from "react";

const PokemonInfo = ({ clickedPokemonData }) => {
  return (
    clickedPokemonData && (
      <Box
        width="484px"
        height="500px"
        bgcolor="black"
        display="flex"
        flexDirection="column"
      >
        <Typography padding="44px" color="#A0A0A0" variant="h3" fontWeight='700'>
          {clickedPokemonData?.name.slice(0, 1).toUpperCase() +
            clickedPokemonData?.name.slice(1)}
        </Typography>
        <img
          src={clickedPokemonData?.sprites.other.dream_world.front_default}
          style={{
            width: "396px",
            height: "200px",
            margin: "auto auto 0 auto",
          }}
        />
        <Box padding="44px 44px 16px 44px" color="lightgray">
          <Typography>
            Снялся в {clickedPokemonData.moves.length} сериях
          </Typography>
          <Typography>id: {clickedPokemonData?.id}</Typography>
          <Typography>height: {clickedPokemonData?.height}</Typography>
          <Typography>
            attack: {clickedPokemonData?.stats[1].base_stat}
          </Typography>
        </Box>
      </Box>
    )
  );
};

export default PokemonInfo;
