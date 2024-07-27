import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

/**
 * El useEffect se ocupa para disparar efectos secundario 
 * algun proceso que se quiera ejecutar cuando esto suceda
 */

/**
 * El useEffect cuando se le deja la lista de depencias
 * o el arreglo vacio significa que la primera vez
 * que cargue o se construta el componente solo lo hara una vez
 */

/**
 * El useEffect no se le pueden poner respuestas asincronas
 */


/**
 * Al pasar las props de un componente padre a uno hijo
 * se puede pasar por medio del operador spread para poder 
 * mandarle una copia exacta a todo lo que se renderice en
 * el hijo
 */