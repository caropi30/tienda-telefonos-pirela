import React, { useState } from "react";
import "./ItemDetail.scss";
import { Container, Card, Figure, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { BsFillBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ItemDetail = (product) => {
  const { name, brand, src, price, stock } = product;

  const [productQuantity, setProductQuantity] = useState(0);

  const addToCart = (productQuantityToAdd) => {
    setProductQuantity(productQuantityToAdd);
  };

  return (
    <>
      <Container className="my-1">
        <Card stock={stock} className="m-2 card-detail p-3 mt-3">
          <Figure className="card-detail--img">
            <Card.Img
              variant="top"
              src={src}
              alt="Imagen de producto"
              className="w-100"
            />
          </Figure>
          <Card.Body className="card-detail--txt">
            <Card.Title className="card-detail--txt-name">{name}</Card.Title>
            <Card.Text className="card-detail--txt-brand">{brand}</Card.Text>
            <Card.Text className="card-detail--txt-price">
              ${price} CLP
            </Card.Text>
            <div>
              {productQuantity ? (
                <Link to={"/cart/"} className="catalogue-card--btnDetail-link">
                  <Button variant="primary" className="small">
                    <BsFillBagCheckFill /> Finalizar compra ({productQuantity} items) {" "}
                  </Button>{" "}
                </Link>
              ) : (
                <ItemCount
                  variant="primary"
                  stock={stock}
                  initial={1}
                  onAdd={addToCart}
                />
              )}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ItemDetail;
