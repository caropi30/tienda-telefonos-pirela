import React from "react";
//import Component from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.scss";
import image from "../../assets/img/logo-entel.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="d-flex justify-content-between">
        <Navbar.Brand href="#" className="d-flex">
          <div className="brand d-flex align-items-center">
            <NavLink to="/">
              <figure className="navbar-img">
                <img src={image} alt="Entel Logo" />
              </figure>
            </NavLink>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/category/gama-alta">Gama Alta</NavLink>
              </li>
              <li>
                <NavLink to="/category/gama-media">Gama Media</NavLink>
              </li>
              <li>
                <NavLink to="/category/gama-baja">Gama Baja</NavLink>
              </li>
            </ul>
          </Nav>
          <CartWidget variant="primary" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
