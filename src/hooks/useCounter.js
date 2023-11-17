import {useState} from "react";

export const useCounter = () => {

    const [contador, setContador] = useState(0)


    const incrementar = (valor = 1) => {
        setContador(contador + valor)
    }

    const disminuir = (valor = 1) => {
        setContador(contador - valor)
    }

    const restaurar = () => {
        setContador(0)
    }

    return {
        contador,
        incrementar,
        disminuir,
        restaurar
    }
}