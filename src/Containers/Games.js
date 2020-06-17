import React, { useEffect, useState } from 'react';
import CardGame from '../components/CardGame';
import axios from 'axios';

const Games = () => {
    const [cardGame, setCardGame] = useState({})
    const ENDPOINT = '';

    const getCardGame = () => {
        axios.get(ENDPOINT)
            .then((body) => setCardGame(body.data))
            .catch((error) => alert(error));
    }

    useEffect(() => {
        getCardGame();
    }, []);

    return (
        <div className="bg-light">
            <div className="container">
                <h1>Juegos</h1>
                {Object.keys(cardGame).map((id) =>
                    <CardGame
                        key={cardGame[id].title}
                        id={id}
                        title={cardGame[id].title}
                        description={cardGame[id].description}
                        instructions={cardGame[id].instructions}
                        materials={cardGame[id].materials}
                        getCardGame={getCardGame} />)}
            </div>
        </div>
    )
}
export default Games;
