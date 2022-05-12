import { createContext, useContext } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartContextProvider;
