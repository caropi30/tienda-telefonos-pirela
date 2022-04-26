import React from "react";
import Item from '../../components/Item/Item'


const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
          console.log(product.name);
        return (
          <Item
            key={product.id}
            stock={product.stock}
            src={product.image}
            title={product.name}
            subtitle={product.brand}
            text={product.price}
          />
        );
      })}
    </>
  );
};

export default ItemList;
