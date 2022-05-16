import React from "react";
import Item from "../../components/Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <Item
            id={product.id}
            stock={product.stock}
            src={product.image}
            name={product.name}
            brand={product.brand}
            price={product.price}
            key={product.id}
          />
        );
      })}
    </>
  );
};

export default ItemList;
