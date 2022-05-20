import React from "react";
import "./CartItem.scss";
import { Row, Card, Figure, Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContextProvider";

const CartItem = ({ product }) => {
  const { deleteByID } = useCartContext();

  return (
    <>
      <Row className="my-1">
        <Card
          key={product.id}
          id={product.id}
          stock={product.stock}
          className="m-3 p-4 card cart-card"
        >
          <Figure className="cart-card--img">
            <Card.Img
              variant="top"
              src={product.src}
              alt="Imagen de producto"
              className="w-100"
            />
          </Figure>

          <Card.Body className="cart-card--txt">
            <Card.Text className="cart-card--txt-brand">
              {product.brand}
            </Card.Text>
            <Card.Title className="cart-card--txt-name">
              {product.name}
            </Card.Title>
            <Card.Text className="cart-card--txt-brand">
              Unidades: {product.quantity}
            </Card.Text>
            <Card.Text className="cart-card--txt-brand">
              Precio por unidad: ${product.price} CLP
            </Card.Text>

            <div>
              <Button onClick={() => deleteByID(product.id)}>Eliminar</Button>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default CartItem;
