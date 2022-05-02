import React from 'react';
//import Component from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import './NavBar.scss';
import image from '../../assets/img/logo-entel.png';
import CartWidget from '../CartWidget/CartWidget';





function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid classNAme="d-flex justify-content-between">
            <Navbar.Brand href="#" className="d-flex">
                <div className="brand d-flex align-items-center">
                    <figure className="navbar-img">
                        <img src={image} alt="Entel Logo"/>
                    </figure>
                </div>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll>
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
                    <CartWidget variant='primary'  text='Comprar'/>{' '}
            </Navbar.Collapse>
        </Container>
    </Navbar> 
    )
}

export default NavBar;