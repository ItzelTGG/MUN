import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Create = () => {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [instructions, setInstructions] = useState('');
    const [materials, setMaterials] = useState('');
    const ENDPOINT = '';
    // Esto permite navegar sin refrestar el navegador
    const history = useHistory();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleInstructions = (e) => {
        setInstructions(e.target.value);
    }

    const handleMaterials = (e) => {
        setMaterials(e.target.value);
    }

    const createTask = () => {
        const body = {
            title: title,
            description: description,
            instructions: instructions,
            materials: materials
        }

        if (title !== '' && description !== '' && instructions !== '' && materials !== '') {
            axios.post(ENDPOINT, body)
                .then(() => history.push('/'))
                .catch((error) => alert('Ocurrio un error' + error))
        } else {
            alert('valores incorrectos')
        }
    }

    return (
        <div className="container">
            <div className="form-group">
                <label htmlFor="title">Nombre del juego</label>
                <input onChange={handleTitle} type="text" className="form-control" id="title" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descripcion del juego</label>
                <input onChange={handleDescription} type="text" className="form-control" id="title" />
            </div>
            <div className="form-group">
                <label htmlFor="instructions">Instruccion del juego</label>
                <input onChange={handleInstructions} type="text" className="form-control" id="title" />
            </div>
            <div className="form-group">
                <label htmlFor="materials">Materiales que ocupa el juego</label>
                <input onChange={handleMaterials} type="text" className="form-control" id="title" />
            </div>
            <button class="btn btn-primary" onClick={() => createTask()}>Submit</button>
        </div>
    )
}

export default Create
