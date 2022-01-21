import React, { useEffect, useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";

import Header from "./components/Header";
import PokemonChips from "./components/PokemonChips";
import PokemonInfo from "./components/PokemonInfo";
import { fetchPokemonData } from "./api/fetchApi";

import "./App.css";

const App = () => {
  const [pokemonsData, setPokemonsData] = useState();
  const [clickedPokemonData, setClickedPokemonData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setPokemonsData((await fetchPokemonData()).results);
      console.log(pokemonsData);
    };
    fetchData();
  }, []);

  return (
    <>
      <CssBaseline />
      <Box backgroundColor="#131313" color="white" height="100vh">
        <Box maxWidth="980px" margin="0 auto" display="flex">
          <Box
            display="flex"
            flexGrow="1"
            flexDirection="column"
            justifyContent="space-between"
            padding="100px 0"
          >
            <Header />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              height="500px"
            >
              <PokemonChips
                pokemons={pokemonsData}
                setClickedPokemonData={setClickedPokemonData}
              />
              <PokemonInfo clickedPokemonData={clickedPokemonData} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
