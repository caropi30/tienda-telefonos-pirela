import React from "react";
import "./Cart.scss";
import { useCartContext } from "../../context/CartContextProvider";
import CartItem from "../../components/CartItem/CartItem";
import { Container, Button } from "react-bootstrap";

const Cart = () => {
  const { cartList, emptyCart } = useCartContext();
  console.log(cartList);

  return (
    <>
      <Container>
        {cartList.map((product) => (
          <CartItem key={product.id} id={product.id} product={product} />
        ))}
        <Button onClick={() => emptyCart()}>Vaciar carrito</Button>
      </Container>
    </>
  );
};

export default Cart;
