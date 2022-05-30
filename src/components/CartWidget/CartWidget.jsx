import React from "react";
import "./CartWidget.scss";
//import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContextProvider";

const CartWidget = (props) => {
  const { variant } = props;
  const { totalCount } = useCartContext();
  console.log(totalCount);

  return (
    <>
      <Link to={"/cart/"}>
        {totalCount > 0 ? (
          <button
            variant={{ variant: variant }}
            className="btn btn-primary btn-shop"
          >
            <FaShoppingCart /> {totalCount}
          </button>
        ) : (
          <button
            variant={{ variant: variant }}
            className="btn btn-primary btn-shop"
          >
            <FaShoppingCart /> 0
          </button>
        )}
      </Link>
    </>
  );
};

export default CartWidget;
