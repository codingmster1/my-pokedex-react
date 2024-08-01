import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonsRoute } from "../../utils/constants";

export const getInitialPokemonData = createAsyncThunk(
    "pokemon/initialData",
    async () => {
      try {
        const { data } = await axios.get(pokemonsRoute);
        /* console.log({ data }); */
        return data.results;
      } catch (err) {
        console.error(err);
      }
    }
  );