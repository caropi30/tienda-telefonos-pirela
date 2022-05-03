import React from "react";
import './Item.scss';
import { Col, Card, Figure, Button } from "react-bootstrap";




const Item = ({ id, brand, name, src, price, stock }) => {
  return (
    <>
      <Col className="my-1">
        <Card key={id} stock={stock} className="m-3 card p-4 card">
          <Figure className="card-img">
            <Card.Img variant="top" src={src} alt="Imagen de producto" className="w-100"/>
          </Figure>
          <Card.Body className="card-txt">
            <Card.Title className="card-txt--name">{name}</Card.Title>
            <Card.Text className="card-txt--brand">{brand}</Card.Text>
            <Card.Text className="card-txt--price">{price}</Card.Text>
          </Card.Body>
           <Button variant="primary">Ver detalles</Button>
        </Card>
      </Col>
    </>
  );
};

export default Item;
