// @ts-nocheck

import React, { useEffect } from 'react'
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
import { getPokemonsData } from '../app/reducers/getPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';
import { debounce } from '../utils/debounce';
import Loader from '../components/Loader';
import { setLoading } from "../app/slices/AppSlice";
function Search() {
    const handleChange = debounce((value: string) => getPokemon(value), 300);
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(({ app: { isLoading } }) => isLoading);
    const { allPokemon, randomPokemons } = useAppSelector(
        ({ pokemon }) => pokemon
      );
    useEffect(() => {
        dispatch(getInitialPokemonData());
      }, [dispatch]);

      useEffect(() => {
        if (allPokemon) {
          const clonedPokemons = [...allPokemon];
          const randomPokemonsId = clonedPokemons
            .sort(() => Math.random() - Math.random())
            .slice(0, 21);
          dispatch(getPokemonsData(randomPokemonsId));
        }
      }, [allPokemon, dispatch]);

      useEffect(() => {
        if (randomPokemons) {
          dispatch(setLoading(false));
        }
      }, [randomPokemons, dispatch]);

      const getPokemon = async (value: string) => {
        if (value.length) {
          const pokemons = allPokemon?.filter((pokemon) =>
            pokemon.name.includes(value.toLowerCase())
          );
          dispatch(getPokemonsData(pokemons!));
        } else {
          const clonedPokemons = [...(allPokemon as [])];
          const randomPokemonsId = clonedPokemons
            .sort(() => Math.random() - Math.random())
            .slice(0, 20);
          dispatch(getPokemonsData(randomPokemonsId));
        }
      };
    


  return (
    <>
     {isLoading ? (
        <Loader />
     ) : (
    <div className="search">
         <input
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            className="pokemon-searchbar"
            placeholder="Search Pokemon"
          />
          <PokemonCardGrid pokemons={randomPokemons!} />
    </div>
     )}
    </>
  )
}
    


export default Wrapper(Search);