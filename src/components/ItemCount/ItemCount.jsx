import "./ItemCount.scss";
import { Card, Button } from "react-bootstrap";
import React, { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);

  const onAdd = () => {
    alert(`añadiste ${count} producto al carrito`);
  };

  const handlerAdd = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };

  const handlerSubstract = () => {
    if (count > props.initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Card.Body className="card-body">
        <div className="d-flex justify-content-center pb-3">
          <Button
            variant="outline-primary"
            onClick={handlerSubstract}
            className="small"
          >
            -
          </Button>{" "}
          <p className="mx-4">{count}</p>
          <Button
            variant="outline-primary"
            onClick={handlerAdd}
            className="small"
          >
            +
          </Button>{" "}
        </div>
        <div>
          <Button variant="primary" onClick={onAdd} className="small">
            Agrega al carro
          </Button>{" "}
        </div>
      </Card.Body>
    </>
  );
};

export default ItemCount;
