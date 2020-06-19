import React from 'react'
import memorygame from '../assets/memorygame.jpg'
import music from '../assets/music.jpg'
import rope from '../assets/rope.jpg'
import dolls from '../assets/dolls.jpg'
import fabric from '../assets/fabric.jpg'
import ball from '../assets/ball.jpg'
import working from '../assets/working.jpg'
import touch from '../assets/touch.jpg'
import photo from '../assets/photo.jpg'
import sing from '../assets/sing.jpg'

const Creativity = () => {
    return (
        <div className="container">

            <h1 className="text-center text-info mt-5 mb-5"> Juegos de Creatividad</h1>

            <p>Las actividades simples y breves que se ofrecen a los pacientes varias veces al día son los tipos de actividades más efectivas y 
                beneficiosas para el Alzheimer. Actividades tales como tareas domésticas y juegos simples pueden ayudar a mantener las habilidades motoras. 
                Escuchar música también es una actividad muy relajante y atractiva. Si algo debemos tener en cuenta es, no obstante, el enfoque, ya que siempre debe estar en la persona y no en la condición.
            </p>

            <div>
                <img src={memorygame} className="rounded" />
            </div>

            <div className="mt-5 mb-5">
                Puesto a que los juegos de creatividad requieren un manejo de materiales en su mayoría físicos, no contamos con un juego interactivo por el momento. Pero brindaremos el paso a paso de como realizar cada actividad!

                <p className="mt-5">Estas son las actividades creativas que puedes realizar con una persona con deterioro cognitivo o demencia:</p>
            </div>

            <div className="card-group">
                <div className="card text-white bg-info hovered-card">
                    <img src={music} class="card-img-top" alt="hombre escuchando música"/>
                    <div className="card-body">
                        <h5 className="card-title text-color">1. Música</h5>
                        <p className="card-text">Reproduce música folclórica o popular de la época de la persona, esto siempre a las personas con Alzheimer. Ofrécele instrumentos de percusión para aumentar la diversión, y deja que toque a su ritmo libremente</p>
                    </div>
                </div>
                <div className="card text-white bg-info hovered-card">
                    <img src={rope} class="card-img-top" alt="cuerda o soga"/>
                        <div className="card-body">
                            <h5 className="card-title">2. Desanudar nudos</h5>
                            <p className="card-text">Compra una cuerda mediana y ata unos nudos simples. Pídele a la persona afectada que te «ayude» a desatar los nudos.</p>
                        </div>
                </div>
                <div class="card text-white bg-info hovered-card">
                <img src={dolls} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">3. Terapia de muñecas</h5>
                    <p class="card-text">La terapia con muñecas funciona muy bien. Compra una cuna, un baño para bebés y mucha ropa de bebé. Le encantará cambiarle de ropa, lavarlo y acostar al bebé. Suele funcionar con mujeres y hombres.</p>
                </div>
            </div>
        </div>

        <div className="card-group">
                <div className="card text-white bg-info hovered-card">
                    <img src={fabric} class="card-img-top" alt="tela"/>
                    <div className="card-body">
                        <h5 className="card-title text-color">4. Caja de tela</h5>
                        <p className="card-text">Proporciónale una caja de cartón grande con varias piezas de tela surtida dentro de la caja como seda, encaje, fieltro, terciopelo, acrílico y lana. Siéntalo alrededor de una mesa y coloca la caja de tela al alcance del enfermo. Tocará, sentirá y doblará, estimulando diferentes sentidos.
                        </p>
                    </div>
                </div>
                <div className="card text-white bg-info hovered-card">
                    <img src={ball} class="card-img-top" alt="pelota de ejercicios"/>
                        <div className="card-body">
                            <h5 className="card-title">5. Pelota de playa</h5>
                            <p className="card-text">Compra una pelota de playa grande y permite que la persona sentada sobre ella, ruede o te la pase sentado desde sus sillas.</p>
                        </div>
                </div>
                <div class="card text-white bg-info hovered-card">
                <img src={working} class="card-img-top" alt="hombre trabajando"/>
                <div class="card-body">
                    <h5 class="card-title">6. Actividades relacionadas con la vida anterior de la persona</h5>
                    <p class="card-text">Por ejemplo, un carpintero puede disfrutar de lijar una buena pieza de madera, un empleado de la oficina de correos puede disfrutar estampando sobres, un fabricante de casas puede disfrutar arreglando ollas y sartenes en un estante, etc.</p>
                </div>
            </div>
        </div>

        <div className="card-group mb-5">
                <div className="card text-white bg-info hovered-card">
                    <img src={touch} class="card-img-top" alt="sentido del tacto"/>
                    <div className="card-body">
                        <h5 className="card-title text-color">7. Discriminación sensorial</h5>
                        <p className="card-text">Con los ojos cerrados o tocando objetos que se encuentran dentro de una caja tapada, a través del tacto la persona con Alzheimer reconocerá objetos de diferentes texturas, pesos y olores.
                        </p>
                    </div>
                </div>
                <div className="card text-white bg-info hovered-card">
                    <img src={photo} class="card-img-top" alt="mujer viendo fotos"/>
                        <div className="card-body">
                            <h5 className="card-title">8. Ver fotografías</h5>
                            <p className="card-text">Esos instantes de nuestras vidas que se han congelado en papel tienen mucho peso en la memoria. Con sólo verlas, traen muchos recuerdos… Son momentos mágicos que pueden activar su memoria y, quizá detrás de esa sensación, podemos recuperar sus recuerdos.</p>
                        </div>
                </div>
                <div class="card text-white bg-info hovered-card">
                <img src={sing} class="card-img-top" alt="hombre cantando"/>
                <div class="card-body">
                    <h5 class="card-title">9. Cantar</h5>
                    <p class="card-text">Cantar es una actividad que gusta y ayuda mucho, incluso aunque la persona no sea capaz de decir la letra y sólo tararee la melodía. Cantar sirve para trabajar el ritmo y para despertar las emociones asociadas a esa canción. Si el paciente se encuentra en la última fase, y le cantamos esa canción, captará el sentimiento que le queremos transmitir. Son instantes mágicos en los que sentimos que tocamos su alma.</p>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Creativity
