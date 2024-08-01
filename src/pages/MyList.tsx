import React, { useEffect } from 'react'
import Wrapper from '../sections/Wrapper';
import { getUserPokemons } from '../app/reducers/getUserPokemons';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import PokemonCardGrid from '../components/PokemonCardGrid';
import Login from '../components/Login';

function MyList() {
    const { userInfo } = useAppSelector(({ app }) => app);
    const { userPokemons } = useAppSelector(({ pokemon }) => pokemon);
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(getUserPokemons());
    }, [userInfo, dispatch]);
    return (
      <div className="list">
        {userInfo ? <PokemonCardGrid pokemons={userPokemons} /> :  <Login /> }
      </div>
    );
  }
  

export default Wrapper(MyList);