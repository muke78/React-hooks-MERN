import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Erick',
        email: 'muke7881@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    };

    /**
     * Se recomienda el uso de varios useEffect dependiendo
     * las tareas que se tengan  o los procesos que se tengan,
     * tengamos 4 o 6 useEffect, cada uno tiene que tener 
     * diferente lista de dependencias y diferente callback
     */

    useEffect(() => {
        // console.log("useEffect called!")
    }, []);

    useEffect(() => {
        // console.log("formState changed!")
    }, [formState]);

    useEffect(() => {
        // console.log("email changed!")
    }, [email]);




    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="alguienexample@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                (username === 'Erick') && <Message />
            }
        </>
    );
};
