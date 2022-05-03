import React from "react";
import "./ItemDetail.scss";
import { Container, Card, Figure } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, brand, name, src, price, stock }) => {
  return (
    <>
      <Container className="my-1">
        <Card key={id} stock={stock} className="m-2 card pt-2 d-flex">
          <Figure className="card-img">
            <Card.Img
              variant="top"
              src={src}
              alt="Imagen de producto"
              className="w-100"
            />
          </Figure>
          <Card.Body className="card-txt">
            <Card.Title className="card-txt--name">{name}</Card.Title>
            <Card.Text className="card-txt--brand">{brand}</Card.Text>
            <Card.Text className="card-txt--price">{price}</Card.Text>
            <ItemCount variant="primary" stock={stock} initial={1}/>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ItemDetail;
