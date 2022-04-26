import React from "react";
import { Col, Card, Figure } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ id, brand, name, src, price, stock }) => {
  return (
    <>
      <Col className="my-3">
        <Card key={id} stock={stock}>
          <Figure>
            <Card.Img variant="top" src={src} alt="Imagen de producto" className="w-100"/>
          </Figure>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{brand}</Card.Text>
            <Card.Text>{price}</Card.Text>
          </Card.Body>
          <ItemCount variant="primary" stock={5} initial={1} />
        </Card>
      </Col>
    </>
  );
};

export default Item;
