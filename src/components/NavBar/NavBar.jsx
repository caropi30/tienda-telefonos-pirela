import React from 'react'
//import Component from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import './NavBar.css';
import image from '../../assets/img/logo-entel.png'
import { FaShoppingCart } from 'react-icons/fa';




function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid classNAme="d-flex justify-content-between">
            <Navbar.Brand href="#" className="d-flex">
                <div className="brand d-flex align-items-center">
                    <figure>
                        <img src={image} alt="Entel Logo"/>
                    </figure>
                </div>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <ul>
                            <li>
                                <a href="#">Home</a>
                                </li>
                            <li>
                                <a href="#">Equipos</a>
                                </li>
                            <li>
                                <a href="#">Accesorios</a>
                                </li>
                            
                        </ul>
                    </Nav>
                <Button variant="primary" className="me-5">Comprar <FaShoppingCart /></Button>{' '}
            </Navbar.Collapse>
        </Container>
    </Navbar> 
    )
}

export default NavBar;