import React from 'react';

const CardGame = (props) => {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <h5>Descripcion:</h5> <p>{props.description}</p>
            <h5>Instrucciones:</h5> <p>{props.instructions}</p>
            <h5>Materiales:</h5> <p>{props.materials}</p>
        </div>
    )
}

export default CardGame;
