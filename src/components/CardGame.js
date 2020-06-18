import React from 'react';

const CardGame = (props) => {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <p>Descripcion: {props.description}</p>
            <p>Instrucciones: {props.instructions}</p>
            <p>Materiales: {props.materials}</p>
        </div>
    )
}

export default CardGame;
