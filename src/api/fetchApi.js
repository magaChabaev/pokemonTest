import axios from "axios";

export const fetchPokemonData = async () => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=6"
  );
  return data;
};

export const fetchClickedPokemonData = async (name) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  console.log(data);
  return data;
};
