import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// <img src="..." className="card-img-top" alt="...">




const Memory = () => {

    // Si la respuesta es correcta o incorrecta
    const [day, setDay] = useState(false);
    const [month, setMonth] = useState(false);
    const [vocal, setVocal] = useState(false);
    const [capital, setCapital] = useState(false);
    const [protagonista, setProtagonista] = useState (false)
    const [mananas, setMananas] = useState (false)
    const [miercoles, setMiercoles] = useState (false)
    const [despertador, setDespertador] = useState (false)


    // Handler
    const ingresarDias = (evento) => {
        if (evento.target.value === "Lunes") {
            setDay(true)
        } else {
            setDay(false)
        }
    }
    const ingresarMes = (evento) => {
        if (evento.target.value === "Junio") {
            setMonth(true)
        } else {
            setMonth(false)
        }
    }
    const ingresarVocal = (evento) => {
        if (evento.target.value === "a e i o u") {
            setVocal(true)
        } else {
            setVocal(false)
        }
    }
    const ingresarCapital = (evento) => {
        if (evento.target.value === "Madrid") {
            setCapital(true)
        } else {
            setCapital(false)
        }
    }
    const ingresarProtagonista = (evento) => {
        if (evento.target.value === "Antonio Rodriguez") {
            setProtagonista(true)
        } else {
            setProtagonista(false)
        }
    }
    const ingresarMananas = (evento) => {
        if (evento.target.value === "Para trabajar" || evento.target.value === "A trabajar" || evento.target.value === "Para ir a trabajar" ) {
            setMananas(true)
        } else {
            setMananas(false)
        }
    }
    const ingresarMiercoles = (evento) => {
        if (evento.target.value === "No") {
            setMiercoles(true)
        } else {
            setMiercoles(false)
        }
    }
    const ingresarDespertador = (evento) => {
        if (evento.target.value === "No") {
            setDespertador(true)
        } else {
            setDespertador(false)
        }
    }


    return (
        <form className="container" >
            <div className="card" type="width: 18rem;">

                <div className="card-body">
                    <h5 className=" p-3 mb-2 bg-info text-white text-center">Memoria semántica </h5>

                    <p className="card-text text-info text-center">
                        Complete las siguientes frases. (Si la respuesta es incorrecta, se corregirá al
                        paciente para que escriba la respuesta correcta):
                    </p>
                </div>
                <ul className="list-group list-group-flush">

                    <li className="list-group-item ">Primer día de la semana:
                        < input type="text" className="Dias" onChange={ingresarDias} />
                        {day ? <p className="text-success">Respuesta Correcta</p> : <p className="text-danger">Respuesta Incorrecta</p>}
                    </li>

                    <li className="list-group-item">¿Cúal es el sexto mes del año?:
                    <input type="text" className="Meses" onChange={ingresarMes} />
                        {month ? <p className="text-success">Respuesta Correcta</p> : <p className="text-danger">Respuesta Incorrecta</p>}
                    </li>

                    <li className="list-group-item">Las vocales son:
                     <input type="text" onChange={ingresarVocal} />
                        {vocal ? <p className="text-success">Respuesta Correcta</p> : <p className="text-danger">Respuesta Incorrecta</p>}
                    </li>
                    <li className="list-group-item">La capital de España es:
                    <input type="text" className="Capital" onChange={ingresarCapital} />
                        {capital ? <p className="text-success">Respuesta Correcta</p> : <p className="text-danger">Respuesta Incorrecta</p>}
                    </li>

                </ul>
            </div>


            <div className="card" type="width: 18rem;">

                <div className="card-body">
                    <h5 className="p-3 mb-2 bg-info text-white text-center">Memoria episódica </h5>

                    <p className="card-text text-info text-center">
                        < strong> Lea al paciente la siguiente historia y conteste a las preguntas que se
                        hacen a continuación.</strong> <br/>
                        Antonio Rodríguez salía de su casa todas las mañanas para ir a trabajar. El martes,
                        Antonio debía llegar antes a su empresa para acudir a la reunión de trabajadores.
                        Sin embargo, el lunes por la noche olvidó cambiar el despertador y se quedó dormido
                        a la mañana siguiente. Cuando llegó a la empresa, la reunión ya había terminado.
                </p>
                </div>
                <ul className="list-group list-group-flush">

                    <li className="list-group-item"> ¿Cómo se llama el protagonista de la historia?
                < input type="text" onChange={ingresarProtagonista} />
                {protagonista ? <p className="text-success">Respuesta Correcta</p> : <p className="text-danger">Respuesta Incorrecta</p>}
                    </li>

                    <li className="list-group-item"> ¿Para qué salía de casa todas las mañanas?
                <input type="text" className="Meses" onChange={ingresarMananas}  />
                {mananas ? <p className="text-success">Respuesta Correcta</p> : <p className="text-danger">Respuesta Incorrecta</p>}   
                    </li>

                    <li className="list-group-item"> ¿Tenía alguna reunión el miércoles?
                <input type="text" onChange={ingresarMiercoles} />
                {miercoles ? <p className="text-success">Respuesta Correcta</p> : <p className="text-danger">Respuesta Incorrecta</p>}   
                    </li>
                    <li className="list-group-item"> ¿Cambió su despertador el lunes por la noche?
                <input type="text" className="Capital"  onChange={ingresarDespertador} />
                {despertador ? <p className="text-success">Respuesta Correcta</p> : <p className="text-danger">Respuesta Incorrecta</p>}     
                    </li>

                </ul>
            </div>
            <div className="card" type="width: 18rem;">

<div className="card-body">
    <h5 className="p-3 mb-2 bg-info text-white text-center">Memoria verbal inmediata </h5>

    <p className="card-text text-info text-center">
         Lea al paciente la lista de palabras que se presenta a continuación, dejando
dos segundos entre una y otra. Repita la lectura de la misma lista, al menos,
5 veces.< strong> Inmediatamente después de cada lectura, pregunte al paciente que
palabras recuerda.</strong> <br/>
        
</p>
</div>
<ul className="list-group list-group-flush text-center">

    <li className="list-group-item"> pollo, azul, gorro, arena, caso, desafío, rebaño, fe, pueblo, gracia</li>

    <li className="list-group-item"> olvido, libro, gente, plaza, receta, sistema, versión, aula, fuente, silla.</li>

    <li className="list-group-item"> precio, motivo, lazo, perro, guante, plátano, profeta, desierto, juicio, teatro</li>
  
</ul>
</div>
        </form>


    );
}



export default Memory