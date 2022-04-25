import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';



const Item = (props) => {
    <>
        <Card>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" src={props.image} alt={props.alt}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Title>{props.brand}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ItemCount/>
        </Card>
    </>
}

export default Item;