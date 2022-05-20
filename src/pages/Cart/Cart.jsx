import React from "react";
import "./Cart.scss";
import { useCartContext } from "../../context/CartContextProvider";
import CartItem from "../../components/CartItem/CartItem";
import { Container, Button } from "react-bootstrap";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartList, emptyCart, totalPrice } = useCartContext();
  console.log(cartList);

  return (
    <>
      <Container>
        {cartList.map((product) => (
          <CartItem key={product.id} id={product.id} product={product} />
        ))}
        {cartList.length > 0 ? (
          <>
            <Button className="btn-empty" onClick={() => emptyCart()}>
              Vaciar carrito
            </Button>
          </>
        ) : (
          <>
            <h1>El carrito está vacío </h1>
            <MdProductionQuantityLimits />
          </>
        )}
        <Link to={"./checkout"}>
          <Button className="btn-empty">Finalizar compra</Button>
        </Link>
      </Container>
    </>
  );
};

export default Cart;
