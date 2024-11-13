import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon, incrementCounter } from "../store/pokemonSlice";

export const MultipleCustomHooks = () => {
  const dispatch = useDispatch();
  const { pokemonData, isLoading, counter } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon(counter));
  }, [counter, dispatch]);

  return (
    <>
      <h1>Información de Pokemones</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : pokemonData ? (
        <blockquote className="blockquote text-center">
          <p className="mb-1">Name: {pokemonData.name}</p>
          <p className="mb-1">Height: {pokemonData.height}</p>
          <p className="mb-1">Weight: {pokemonData.weight}</p>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </blockquote>
      ) : (
        <p>No se encontró información</p>
      )}

      <button className="btn btn-primary" onClick={() => dispatch(incrementCounter())}>
        Next
      </button>
    </>
  );
};
