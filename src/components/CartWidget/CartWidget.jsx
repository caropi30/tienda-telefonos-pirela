import React from "react";
import "./CartWidget.scss";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContextProvider";

const CartWidget = (props) => {
  const { variant } = props;
  const { totalCount } = useCartContext();

  return (
    <>
      <Link to={"/cart/"}>
        {totalCount() ? (
          <button
            variant={{ variant: variant }}
            className="btn btn-primary btn-shop"
          >
            <FaShoppingCart /> {totalCount()}
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
