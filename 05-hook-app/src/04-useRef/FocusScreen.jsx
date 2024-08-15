import React, { useRef, use} from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        // console.log(inputRef)
        inputRef.current.select();
    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control mt-2"
            />
            <button onClick={onClick} className="btn btn-primary mt-2">Set focus</button>
        </>
    );
};
