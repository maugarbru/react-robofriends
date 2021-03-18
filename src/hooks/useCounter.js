// Contador que exponga el numero, 2 funciones, una para subirlo y otra pa bajarlo
// personalizacion: step por defecto 1 pero poder cambiarlo
// poderle definir una condicion para poder aumentarse, por defecto que no tenga limite

import { useState } from 'react';

const useCounter = ({ step = 1, condition = () => true } = {}) => {
    const [contador, setContador] = useState(0)

    return {
        contador,
        agregar() {
            setContador(prevContador => (condition(prevContador)) ? prevContador + step : prevContador)
        },
        disminuir() {
            setContador(prevContador => prevContador - step)
        }
    }
}

export default useCounter