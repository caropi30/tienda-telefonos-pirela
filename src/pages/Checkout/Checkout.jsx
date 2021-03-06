import React from "react";
import "./Checkout.scss";
import { Container, Form, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { useCartContext } from "../../context/CartContextProvider";
import db from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartList, totalPrice, emptyCart } = useCartContext();
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = buyer;
  const [orderId, setOrderId] = useState();

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const generateOrder = async (data) => {
    try {
      const order = await addDoc(collection(db, "orders"), data);
      setOrderId(order.id);
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
    generateOrder(data);
    emptyCart();
  };

  return (
    <>
      <Container className="checkout">
        {!orderId ? (
          <>
            <h2 className="checkout-title">Casi terminas...</h2>
            <h5 className="checkout-subtitle">Por favor completa los datos</h5>
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
                    required
                  />
                </label>

                <label htmlFor="email" className="my-2">
                  Correo electr??nico
                  <Form.Control
                    className="mb-3"
                    size="sm"
                    type="text"
                    placeholder="Correo electr??nico"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label htmlFor="phone" className="my-2">
                  Tel??fono
                  <Form.Control
                    className="mb-3"
                    size="sm"
                    type="number"
                    placeholder="569..."
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <Button className="btn-checkout" type="submit">
                  Finalizar compra
                </Button>
              </Form>
            </Row>
          </>
        ) : (
          <>
            <h1>Felicidades! Has finalizado tu compra con ??xito </h1>
            <h4>{`Su c??digo de compra es: ${orderId}`}</h4>
            <BsFillEmojiSunglassesFill />
            <Link to={"/"}>
              <Button className="btn-empty ms-3">Volver al Home</Button>
            </Link>
          </>
        )}
      </Container>
    </>
  );
};

export default Checkout;
