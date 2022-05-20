import React, { useState } from "react";
import "./ItemDetail.scss";
import { Container, Card, Figure, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { BsFillBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContextProvider";

const ItemDetail = (product) => {
  const { id, name, brand, src, price, stock } = product;

  const [productQuantity, setProductQuantity] = useState(0);

  const { addToCart } = useCartContext();

  const addToShoppingCart = (productQuantityToAdd) => {
    setProductQuantity(productQuantityToAdd);
    addToCart(product, productQuantityToAdd);
  };

  return (
    <>
      <Container className="my-1">
        <Card key={id} stock={stock} className="m-2 card-detail p-3 mt-3">
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
                    <BsFillBagCheckFill /> Ir a carrito ({productQuantity}{" "}
                    items){" "}
                  </Button>{" "}
                </Link>
              ) : (
                <ItemCount
                  variant="primary"
                  stock={stock}
                  initial={1}
                  onAdd={addToShoppingCart}
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
