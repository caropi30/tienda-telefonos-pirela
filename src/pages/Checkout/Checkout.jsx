import React from "react";
import "./Checkout.scss";
import { Container, Form, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { useCartContext } from "../../context/CartContextProvider";
import db from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cartList, totalPrice } = useCartContext();
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = buyer;

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const generateOrder = async (data) => {
    try {
      const order = await addDoc(collection(db, "orders"), data);
      console.log("orders", order);
      console.log("ordersId", order.id);
    } catch (error) {
      console.log("ha ocurrido un error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const items = cartList.map((e) => {
      return { id: e.id, title: e.name, price: e.price, amount: e.quantity };
    });
    const total = totalPrice();
    const data = { buyer, items, date, total };
    console.log(data);
    generateOrder(data);
  };

  return (
    <>
      <Container className="checkout">
        <h2 className="checkout-title">Casi terminas...</h2>
        <h5 className="checkout-subtitle">Por favor completa los datos:</h5>
        <Row>
          <Form
            onSubmit={handleSubmit}
            className="d-flex flex-column checkout-form"
          >
            <label htmlFor="name" className="my-2">
              Nombre
              <Form.Control
                className="mb-3"
                size="sm"
                type="text"
                placeholder="Nombre"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="email" className="my-2">
              Correo electrónico
              <Form.Control
                className="mb-3"
                size="sm"
                type="text"
                placeholder="Correo electrónico"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="phone" className="my-2">
              Teléfono
              <Form.Control
                className="mb-3"
                size="sm"
                type="number"
                placeholder="569..."
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
            </label>

            <Button className="btn-checkout" type="submit">
              Finalizar compra
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
