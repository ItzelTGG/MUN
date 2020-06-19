import React from 'react';


const NewForms = () => {
    return (
        <div className="container" style={{ maxWidth: 50 + 'rem' }}>
            <h1 className='m-5 text-center' style={{ color: '#572364' }} > Contactános </h1>
            <form className='m-5'>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder='Nombre' style={{ fontFamily: 'Cambria' }} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder='Apellido' style={{ fontFamily: 'Cambria' }} />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder='Email' style={{ fontFamily: 'Cambria' }} />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder='telefono' style={{ fontFamily: 'Cambria' }} />
                </div>
                <div className="form-group">
                    <input type='text' className="form-control" placeholder='Escribe tu mensaje aquí...' style={{ fontFamily: 'Cambria' }} />
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default NewForms;
