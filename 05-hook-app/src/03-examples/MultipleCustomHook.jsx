
import { useFetch } from '../hooks'

export const MultipleCustomHook = () => {

    const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/150');

    return (
        <>
            <h1>Informacion de Pokemon</h1>
            <hr />


            {isLoading && <p>Cargando...</p>}



            <h2>{data?.name}</h2>
            <img src={data?.sprites.other.dream_world.front_default} alt="" />

        </>
    )
}
