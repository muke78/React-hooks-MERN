import { useLayoutEffect, useRef, useState } from "react";



export const PokemonCard = ({ id, name, sprites = [] }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();

        setBoxSize({
            width, height
        })
    }, [])

    return (
        <>
            <section style={{ display: "flex", height: 200 }}>
                <h2 ref={pRef} className="text-capitalize">#{id} - {name}</h2>

                {/* { Imagenes } */}

                <div>

                    {
                        sprites.map((sprite) => (
                            <img key={sprite} src={sprite} alt={name} />
                        ))
                    }

                    {/* {
                    sprites.map((sprite, index) => {
                        return <img key={index} src={sprite} alt={name} />
                    })
                } */}
                </div>

            </section>

            <code>{JSON.stringify(boxSize)}</code>
        </>

    )
}



/**
 * El map esta implicito no necesita de un 
 * return y se pone con doble parentesis 
 * 
 * Y cuando el map tiene llaves es porque se 
 * expresara mas de una funcion dentro de este y 
 * tiene que llevar el return 
 * 
 */