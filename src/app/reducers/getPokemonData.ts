import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* import { defaultImages, images } from "../../utils/getPokemonImages"; */
import { defaultImages, images, pokemonTypes } from "../../utils";
import { generatedPokemonType, genericPokemonType } from "../../utils/Types";


export const getPokemonsData = createAsyncThunk(
    "pokemon/randomPokemon",
    async (pokemons: genericPokemonType[]) => {
      try {
         const pokemonsData: generatedPokemonType[] = [];
        for await (const pokemon of pokemons) {
          const {
            data,
          }: {
            data: {
              id: number;
              types: { type: generatedPokemonType }[];
            };
          } = await axios.get(pokemon.url);
          const types = data.types.map(
            ({ type: { name } }: { type: { name: string } }) => ({
               //@ts-expect-error
                [name]: pokemonTypes[name],
            })
          );
          //@ts-expect-error
          let image: string = images[data.id];
          if (!image) {
            //@ts-expect-error
            image = defaultImages[data.id];
          }
          if (image) {
            pokemonsData.push({
              name: pokemon.name,
              id: data.id,
              image,
              types,
            });
          }
         /*  console.log({ pokemonsData }); */
        }
        
        return pokemonsData; 
      } catch (err) {
        console.error(err);
      }
    }

    
  );