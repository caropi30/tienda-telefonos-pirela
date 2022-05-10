import React from "react";
import "./Cart.scss";
import { MdConstruction } from "react-icons/md";

const Cart = () => {
    return(
        <>
            <div className="text-center">
                <h1 className="title">Hola soy un carrito en construcción</h1>
                <MdConstruction/>
            </div>
        </>
    )
};

export default Cart;