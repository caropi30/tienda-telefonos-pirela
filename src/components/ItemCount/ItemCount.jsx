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
        <Card.Body>
            <div className="d-flex">
            <Button variant="outline-primary" onClick={handlerSubstract} className="small" >-</Button>{" "}
            <p className="mx-4">{count}</p>
            <Button variant="outline-primary" onClick={handlerAdd} className="small" >
                +
            </Button>{" "}
            </div>
            <div>
            <Button variant="primary" onClick={onAdd} className="small" >
                Añadir a carrito
            </Button>{" "}
            </div>
        </Card.Body>
        </>
    );
};

export default ItemCount;
