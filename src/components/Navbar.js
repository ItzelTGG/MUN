import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'; //adentro no poner ningun caracter especial (.,- etc)


const Navbar = () => {
    return (
        <nav >
            <div style={{ height: 180}} className="navbar bg-white d-flex justify-content-center">
                <Link to="/" className="navnavbar-brand mb-0 h1 ">
                    <img src="https://static.wixstatic.com/media/3e2f39_47638cfaf3004bc583dc490dc6e7d9c3~mv2.png/v1/fill/w_308,h_114,al_c,q_85,usm_0.66_1.00_0.01/MOWA_FINALloo-02.webp"
                        height="100px"
                        className="d-inline-block align-top" />

                </Link>
            </div>
            <div className="navbar bg-light d-flex justify-content-around">

                <ButtonGroup aria-label="Basic example" >
                    <DropdownButton as={ButtonGroup} title="Actividades" id="bg-nested-dropdown">

                        <LinkContainer to="/Games">
                            <Dropdown.Item className='dropdown-item'>Juegos</Dropdown.Item>
                        </LinkContainer>

                    </DropdownButton>
                </ButtonGroup>

                <Link to="/Login" type="button" className="btn btn-primary text-light">Log in</Link>
            </div>
        </nav>
    )
}

export default Navbar
