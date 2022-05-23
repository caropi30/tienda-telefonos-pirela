import React from "react";
import "./Checkout.scss";
import { Container, Form, Row, Button } from "react-bootstrap";
import { useState } from "react";

const Checkout = () => {
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name } = buyer;

  const handleInputChange = (e) => {
    console.log(e.target);
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  console.log(buyer);

  const handleSubmit = () => {};
  return (
    <>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Nombre
              <input
                size="sm"
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => handleInputChange(e)}
              />
            </label>

            <label htmlFor="name">email</label>
            <input
              size="sm"
              type="text"
              placeholder="email"
              onChange={handleInputChange}
            />

            <Button type="submit">Finalizar compra</Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
