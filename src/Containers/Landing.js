import React from 'react';
import Footer from '../components/Footer';
import NewForms from '../components/NewForms';
import Body from '../components/Body';
import Image from '../components/Image';
import { Carousel } from 'react-bootstrap';



const Landing = () => {
    return (
        <div>
            <Body />
            <Image/>
            <NewForms />
            <Footer />

        </div>


            <div style={{
                backgroundImage: "url(" + "https://nhncwtttsf-flywheel.netdna-ssl.com/46/wp-content/uploads/sites/74/2019/05/The-Difference-Between-a-Home-Care-Nurse-and-a-Home-Caregiver-1024x682.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div style={{ backgroundColor: "#006699", opacity: 0.7, height: 450 }}>
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: 450 }}>
                        <h1 style={{ color: "white", fontSize: 45 }} className="col-sm-7 col-md-7 col-lg-7 text-center">En MOWA creemos que la edad no debería limitar la calidad de vida</h1>
                        <p style={{ color: "white", fontSize: 20 }} className="col-sm-7 col-md-7 col-lg-7 text-center"> Fundada en el 2018, MOWA nace como una compañia enfocada en soluciones innovadoras para personas de la tercera edad, siendo el Alzheimer el primer padecimiento en el que decidimos enfocarnos. Decidimos abordar este padecimiento debido al alto ínidice de pacientes diagnosticados en México.</p>
                    </div>
                </div>
            </div>

            <div style={{ height: 40 }}></div>

            <div style={{ height: 250 }} className="row d-flex justify-content-center">
                <h2 style={{ color: "#006699", fontSize: 55 }} className="col-sm-8 col-md-7 col-lg-7 text-center">Un poco acerca del Alzheimer</h2>
                <p style={{ color: "#006699", fontSize: 25 }} className="col-sm-8 col-md-7 col-lg-7 text-center">¿Conoces a alguien con Alzheimer?</p>
                <p className="col-sm-8 col-md-7 col-lg-7 text-center">De acuerdo a los porcentajes dictados por la OMS, El Alzheimer ocupa el 5to lugar en las principales causas de muerte en el mundo. Para el 2030 en América Latina, habrá casi ocho millones de personas que padezcan esta enfermedad y lamentablemente para esto no hay ninguna cura.

                En el 96% de los casos el cuidado es cubierto por sus familiares y por la falta de experiencia, las condiciones en las que se

desarrollan estos cuidados no son las más adecuadas.</p>

            </div>

            <div style={{ height: 150 }}></div>

            <div className="d-flex justify-content-around flex-wrap m-auto">
                <div className="col-sm-10 col-md-6 col-lg-6">
                    <h2 style={{ fontSize: 45, color: "#006699" }} className="text-center"> 61% </h2>
                    <p style={{ fontSize: 20 }} className="text-center"> Califican su estrés emocional como muy alto.</p>
                    <img className="d-block h-auto m-auto col-sm-10 col-md-7" src="https://static.wixstatic.com/media/3e2f39_71771d51bb374d24a500bc4a76683ce1~mv2.png/v1/crop/x_0,y_1096,w_2281,h_1600/fill/w_389,h_273,al_c,q_85,usm_0.66_1.00_0.01/Icon-11.webp" height="180px" />
                </div>

                <div className="col-sm-10 col-md-6 col-lg-6">
                    <h2 style={{ fontSize: 45, color: "#006699" }} className="text-center">39% </h2>
                    <p style={{ fontSize: 20 }} className="text-center">De los cuidadores sufren depresión.</p>
                    <img className="d-block h-auto m-auto col-sm-10 col-md-7" src="https://static.wixstatic.com/media/3e2f39_71771d51bb374d24a500bc4a76683ce1~mv2.png/v1/crop/x_2266,y_1180,w_1996,h_1415/fill/w_335,h_236,al_c,q_85,usm_0.66_1.00_0.01/Icon-11.webp" height="180px" />
                </div>
            </div>

            <div style={{ height: 100 }}></div>

            <div style={{ height: 500 }} >
                <div style={{ height: 180 }} className="row d-flex justify-content-center">
                    <h2 style={{ fontSize: 50, color: "#572364" }} className="col-sm-10 col-md-8 col-lg-7 text-center">Próximamente</h2>
                    <p style={{ fontSize: 22 }} className="col-sm-10 col-md-8 col-lg-7 text-center">"Nos dimos cuenta que si mejoramos el bienestar del cuidador podemos mejorar la calidad de cuidado que recibe el paciente"</p>
                </div>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img

                                className="d-block m-auto col-sm-10 col-md-7"
                                src="https://static.wixstatic.com/media/3e2f39_d98c675bff3041daa0624d036d2857e1~mv2.jpg/v1/fill/w_980,h_716,al_c,q_85,usm_0.66_1.00_0.01/3e2f39_d98c675bff3041daa0624d036d2857e1~mv2.webp"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block m-auto col-sm-10 col-md-7"
                                src="https://static.wixstatic.com/media/3e2f39_ef6679a4dcb84e40874c9fe283966a1a~mv2.jpg/v1/crop/x_235,y_164,w_4031,h_2911/fill/w_923,h_666,al_c,q_85,usm_0.66_1.00_0.01/mun5-18.webp"
                                alt="Second slide"
                            />

                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>

        </div>

    )


}

export default Landing
