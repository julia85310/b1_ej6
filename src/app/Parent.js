import {useState} from 'react';
function Child({mensajeDePadre, onRecibirMensaje}){
    const mensajeParaPadre = "Hola desde Hijo";

    function enviarAPadre(){
        onRecibirMensaje(mensajeParaPadre);
    }

    return(
        <div>
            <h3>Este es el componente hijo</h3>
            <p>Mensaje del padre: {mensajeDePadre}</p>
            <button onClick={enviarAPadre}>Boton</button>
        </div>
    );
}

export default function Parent(){
    const [mensajeHijo, setMensajeHijo] = useState("");
    function mostrarRespuesta(mensajeDesdeHijo){
        setMensajeHijo(mensajeDesdeHijo);
    }

    return(
        <div>
            <Child mensajeDePadre={"hola caracola"} onRecibirMensaje={mostrarRespuesta}></Child>
            <p>Este es el mensaje del hijo: {mensajeHijo}</p>
        </div>
    );
}