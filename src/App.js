import React, { useEffect, useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";

import Header from "./components/Header";
import PokemonChips from "./components/PokemonChips";
import PokemonInfo from "./components/PokemonInfo";
import { fetchPokemonData } from "./api/fetchApi";

const App = () => {
  const [pokemonsData, setPokemonsData] = useState();
  const [clickedPokemonData, setClickedPokemonData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      //   const data = await fetchPokemonData();
      //   console.log(data);
      setPokemonsData((await fetchPokemonData()).results);
      console.log(pokemonsData);
    };
    fetchData();
  }, []);

  return (
    <>
      <CssBaseline />
      <Box backgroundColor="#131313" color="white">
        <Container maxWidth="md">
          <Box
            display="flex"
            flexDirection="column"
            pt={10}
            pb={10}
            height="100vh"
            maxWidth="md"
          >
            <Header />
            <Box display="flex" margin="auto 0" alignItems="center">
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
