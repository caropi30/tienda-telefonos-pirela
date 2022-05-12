import React from "react";
import "./CartWidget.scss";
import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = (props) => {
  const { variant, text } = props;

  return (
    <>
      <Link to={"/cart/"}>
        <Button variant={{ variant: variant }} className="btn btn-primary">
          {text ? text : "default text"} <FaShoppingCart />
        </Button>
      </Link>
    </>
  );
};

export default CartWidget;
