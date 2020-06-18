import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Games = () => {

    const [menuSelect, setMenuSelect] = useState('0');

    const handleMenuSelect = (event) => {
        setMenuSelect(event.target.id);
    }

    return (
        <section className="container">
            <div>
                <h1 className="text-center mb-5 mt-5 text-primary">Lista de juegos</h1>
            </div>

            <div>
                <div className="row">
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            <div className={`list-group-item list-group-item-action ${menuSelect === '0' && 'active'}`} id="0" data-toggle="list" role="tab" aria-controls="home" onClick={handleMenuSelect}>Juegos de atención</div>
                            <div className={`list-group-item list-group-item-action ${menuSelect === '1' && 'active'}`} id="1" data-toggle="list" role="tab" aria-controls="profile" onClick={handleMenuSelect}>Juegos de memoria</div>
                            <div className={`list-group-item list-group-item-action ${menuSelect === '2' && 'active'}`} id="2" data-toggle="list" role="tab" aria-controls="messages" aria-selected="true" onClick={handleMenuSelect}>Juegos de creatividad</div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                            <div className={`tab-pane fade ${menuSelect === '0' && 'show active'}`} id="list-home" role="tabpanel" aria-labelledby="list-home-list">La estimulación y rehabilitación de la atención es realmente importante no solo para pacientes con deterioro cognitivo sino para prevenir dicho deterioro, debido a que consideramos que es la base para que el resto de funciones cognitivas trabajen mejor. Es por ello que es recomendable dedicar de 5-10 minutos a trabajar la atención de modo más concreto y específico.

                                    <div>
                                        <br />
                                        <b> Contamos con los siguientes juegos para la estimulación de la atención:</b>

                                        <div>
                                            <br />
                                            <li> <Link className="mt-5" to='/Atention'>Juego de atención 1</Link> </li>
                                        </div>
                                        <div>
                                            <br />
                                            <li> Juego de atención 2 ... Proximamente</li>
                                        </div>
                                        <div>
                                            <br />
                                            <li>Juego de atención 3 ... Proximamente</li>
                                        </div>
                                        <div>
                                            <br />
                                            <li>Juego de atención 4 ... Proximamente </li>
                                        </div>
                                        <div>
                                            <br />
                                            <li>Juego de atención 5 ... Proximamente </li>
                                        </div>
                                    </div>
                                    </div>
                                <div className={`tab-pane fade ${menuSelect === '1' && 'show active'}`} id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">La memoria es una de las funciones cognitivas superiores más importantes del cerebro.
                                Es fundamental trabajarla y estimularla en pacientes que tienen DCL o Alzheimer, siempre teniendo en cuenta el grado de deterioro del paciente, y así adaptar la actividad a su capacidad, con el fin de no provocarle frustración con todas las consecuencias posteriores que podrían ocurrir.
                                La memoria se define como "la capacidad que tiene el cerebro de almacenar  lo que aprende, de lo que experimenta en el día a día". Este concepto de memoria no es unitario, ya que tenemos distintos tipos de memoria. Por ello hay que realizar diferentes tipos de ejercicios, para poder estimular adecuadamente "LA MEMORIA"  y sus dos grandes subsistemas (memoria a largo plazo -MLP- y memoria a corto plazo -MCP-)
                                <div>
                                        <br />
                                        <b> Contamos con los siguientes juegos para la estimulación de la Memoria:</b>

                                        <div>
                                            <br />
                                            <li> <Link className="mt-5" to='/Memory'>Juego de memoria 1</Link> </li>
                                        </div>
                                        <div>
                                            <br />
                                            <li> Juego de memoria 2 ... Proximamente</li>
                                        </div>
                                        <div>
                                            <br />
                                            <li>Juego de memoria 3 ... Proximamente</li>
                                        </div>
                                        <div>
                                            <br />
                                            <li>Juego de memoria 4 ... Proximamente </li>
                                        </div>
                                        <div>
                                            <br />
                                            <li>Juego de memoria 5 ... Proximamente </li>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${menuSelect === '2' && 'show active'}`} id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Una de las claves es que la actividad debe ser significativa para la persona. A menudo, el significado está vinculado a ocupaciones pasadas o pasatiempos, por lo que lo que es significativo para una persona puede no serlo para otra.

                                Ya sea que esté cuidando a un ser querido en su propia casa o por un paciente en un centro, tenga en cuenta los intereses, la ocupación y las pasiones de la persona. Si trabaja en un centro como un asilo de ancianos o vivienda asistida y no conoce el historial de la persona, pregúntele a los miembros de su familia u observe su reacción a diferentes actividades. Luego, elija algunas actividades a las que hayan respondido bien y anote las áreas de interés.
                            <div>
                                        <br />
                                        <b> Contamos con los siguientes juegos para la estimulación de la creatividad:</b>

                                        <div>
                                            <br />
                                            <li> <Link className="mt-5" to='/Creativity'>Juego de creatividad 1</Link> </li>
                                        </div>
                                        <div>
                                            <br />
                                            <li> Juego de creatividad 2 ... Proximamente</li>
                                        </div>
                                        <div>
                                            <br />
                                            <li>Juego de creatividad3 ... Proximamente</li>
                                        </div>
                                        <div>
                                            <br />
                                            <li>Juego de creatividad 4 ... Proximamente </li>
                                        </div>
                                        <div>
                                            <br />
                                            <li>Juego de atención 5 ... Proximamente </li>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Games
