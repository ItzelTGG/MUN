import React from 'react';


const Body = () => {
    return (
        <div >
            <div className="card mb-3"  >
                <h1 className='text-center' style={{ color: '#572364', fontSize: 60 }} > Lo que hacemos </h1>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://static.wixstatic.com/media/3e2f39_b36ec27d8a914d54a5648a968e8f4ae3~mv2.png/v1/fill/w_600,h_337,al_c,q_85,usm_0.66_1.00_0.01/render%20scene_26.webp" className="card-img" alt="Dispositivo" />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">MUN</h5>
                            <p className="card-text">
                                nace de la necesidad de mejorar la calidad de vida de los cuidadores y de brindar mayor seguridad a la persona que padece Alzheimer.

                                Reduce la carga emocional y física de los cuidadores mientras mejora el cuidado que el paciente recibe, eliminando las barreras de comunicación y facilitando el intercambio de información para que la carga individual sea distribuida entre los miembros de la familia, generando una red de cuidadores.<br />
                                <br />
                                MUN es un dispositivo que se coloca en la ropa del paciente, detecta situaciones de riesgo como caídas, si se levanta por las noches o si se sale de su casa, manteniendo informado al cuidador a través de una aplicación con alertas en tiempo real.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Body;



