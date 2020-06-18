import React from 'react'
import Create from '../components/Create'

const CreateGame = () => {
    return (
        <div>
            <div className="container">
                <div className="card">
                    <h1>Nuevo Juego</h1>
                    <Create />
                </div>
            </div>
        </div>
    )
}

export default CreateGame
