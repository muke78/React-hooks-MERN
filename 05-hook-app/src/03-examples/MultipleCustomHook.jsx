import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
  const { counter, decrement, increment } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      {/* <h2>{data?.name}</h2> */}
      {/* <img src={data?.sprites.other.dream_world.front_default} alt="" /> */}

      <hr />

      <button
        onClick={() => {
          counter > 1 ? decrement() : null;
        }}
        className="btn btn-primary mt-2"
        disabled={isLoading}
      >
        Anterior
      </button>
      <button
        onClick={() => {
          increment();
        }}
        className="btn btn-primary mt-2"
        disabled={isLoading}
      >
        Siguiente
      </button>
    </>
  );
};
