import React from 'react';
import './ItemListContainer.css';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

const ItemListContainer = (props) => {
   return(
    <>
        <h1>{props.greeting}</h1>
    </>

   );
}

export default ItemListContainer;