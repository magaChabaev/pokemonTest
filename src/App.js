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
      <Box backgroundColor="#131313" color="white">
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection="column"
            padding="100px 0"
            height="100vh"
          >
            <Header />
            <Box
              display="flex"
              margin="auto 0"
              alignItems="center"
              justifyContent="space-between"
            >
              <PokemonChips
                pokemons={pokemonsData}
                setClickedPokemonData={setClickedPokemonData}
              />
              <PokemonInfo clickedPokemonData={clickedPokemonData} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default App;
