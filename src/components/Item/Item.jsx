import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";
import { Col, Card, Figure, Button } from "react-bootstrap";

const Item = (product) => {
  const { id, name, brand, src, stock } = product;

  return (
    <>
      <Col className="my-1">
        <Link to={"/item/" + id}>
          <Card key={id} stock={stock} className="m-3 catalogue-card p-4 card">
            <Figure className="catalogue-card--img">
              <Card.Img
                variant="top"
                src={src}
                alt="Imagen de producto"
                className="w-100"
              />
            </Figure>
            <Card.Body className="catalogue-card--txt">
              <Card.Text className="catalogue-card--txt-brand">
                {brand}
              </Card.Text>
              <Card.Title className="catalogue-card--txt-name">
                {name}
              </Card.Title>
            </Card.Body>
            <Button className="catalogue-card--btn-detail">Ver detalles</Button>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default Item;
