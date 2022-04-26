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
            name={product.name}
            brand={product.brand}
            price={product.price}
          />
        );
      })}
    </>
  );
};

export default ItemList;
