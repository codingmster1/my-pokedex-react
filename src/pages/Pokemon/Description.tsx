import React from "react";

import { useAppSelector } from "../../app/hooks";
import Info from "../../components/Info";
import PokemonContainer from "../../components/PokemonContainer";
import ErrorBoundary from "../../components/ErrorBoundary";

function Description() {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );

  return (
    <ErrorBoundary>
    <>
      <Info data={pokemonData} />
      {pokemonData && <PokemonContainer image={pokemonData.image} />}
    </>
    </ErrorBoundary>
  );
}

export default Description;