import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      return setCartList(
        cartList.map((product) =>
          item.id === product.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    }
    setCartList([...cartList, { ...item, quantity }]);
  };

  const emptyCart = () => {
    setCartList([]);
  };

  const deleteByID = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const totalCount = () => {
    return cartList.reduce((total, item) => total + item.quantity, 0);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const unitsPerProduct = (id) => {
    return cartList.find((item) => item.id === id).quantity;
  };

  const removeUnit = (id) => {
    if (!unitsPerProduct(id) === 1) {
      return deleteByID(id);
    } else {
      setCartList(
        cartList.map((product) =>
          id === product.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        deleteByID,
        totalCount,
        totalPrice,
        unitsPerProduct,
        removeUnit,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;


