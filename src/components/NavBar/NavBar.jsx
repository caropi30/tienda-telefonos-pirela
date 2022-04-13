import React from 'react'
//import Component from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import './NavBar.css';
import image from '../../assets/img/logo-entel.png'
import { FaShoppingCart } from 'react-icons/fa';




function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid classNAme="d-flex justify-content-center">
            <Navbar.Brand href="#" >
                <figure>
                    <img src={image} alt="Entel Logo"/>
                </figure>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Equipos</Nav.Link>
                <Nav.Link href="#">Accesorios</Nav.Link>
            </Nav>
            <Button variant="primary"><FaShoppingCart /></Button>{' '}
            </Navbar.Collapse>
        </Container>
    </Navbar> 
    )
}

export default NavBar;