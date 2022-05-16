import React from "react";
import "./CartItem.scss";
import { Row, Card, Figure, Button, CloseButton } from "react-bootstrap";

const CartItem = ({ product }) => {
  return (
    <>
      <Row className="my-1">
        <Card
          key={product.id}
          id={product.id}
          stock={product.stock}
          className="m-3 p-4 card d-flex"
        >
          <CloseButton className="text-end" />
          <Figure className="">
            <Card.Img
              variant="top"
              src={product.src}
              alt="Imagen de producto"
              className="w-100"
            />
          </Figure>

          <Card.Body className="">
            <Card.Title className="">{product.name}</Card.Title>

            <Card.Text className="">{product.brand}</Card.Text>
            <Card.Text className="">${product.price} CLP</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default CartItem;
