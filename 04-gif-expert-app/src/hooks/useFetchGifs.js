import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagenes = async () => {
    const newImagenes = await getGifts(category);
    setImages(newImagenes);
    setIsLoading(false);
  };

  useEffect(() => {
    getImagenes();
  });

  return {
    images,
    isLoading,
  };
};

/**
 * Esto es un Custom hook, lo que interpreta son la mayoria de hooks
 * se los trae para aca, y solo exporta los valores que se necesitan
 * a otro componente quitandole carga de trabajo y haciendoi mas
 * modular la aplicacion
 */
