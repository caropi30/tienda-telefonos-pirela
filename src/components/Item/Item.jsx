import React from "react";
import { Card } from "react-bootstrap";import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, brand, name, image, price, stock }) => {
  return (
    <>
      <Card key={id} stock={stock}>
        <Card.Img variant="top" src={image} alt="Imagen de producto" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{brand}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
        <ItemCount variant="primary" stock={5} initial={1} />
      </Card>
    </>
  );
};

export default Item;
