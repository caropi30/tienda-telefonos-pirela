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
        <div>
          {cartList.map((product) => (
            <CartItem key={product.id} id={product.id} product={product} />
          ))}
          {cartList.length > 0 ? (
            <>
              <div className="d-flex flex-column text-end">
                <h4 classNAme="my-3">Total: ${totalPrice()} CLP</h4>
                <div className="">
                  <Button className="btn-empty " onClick={() => emptyCart()}>
                    Vaciar carrito
                  </Button>
                  <Link to={"cart/checkout"}>
                    <Button className="btn-empty ms-3">Finalizar compra</Button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1>El carrito está vacío </h1>
              <MdProductionQuantityLimits />
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Cart;
