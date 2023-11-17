import {useCounter} from "../hooks/useCounter.js";

export const ContadorComponents = () => {

    const {contador, incrementar, disminuir, restaurar} = useCounter()

    return(
        <>
            <h1>Contador : {contador} </h1>
            <button className="btn btn-primary" onClick={()=> incrementar()}>Incrementar</button>
            <button className="btn btn-danger" onClick={()=> disminuir()}>Disminuir</button>
            <button className="btn btn-primary" onClick={()=> restaurar()}>Restaurar</button>

        </>
    )
}