import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import getData from "./../../stockData";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    getData
      .then((response) => {
        setItem(response[0]);
      })
      .catch((error) => console.log("Ocurrió un error"));
  }, [item]);

  return (
    <>
      <ItemDetail
        key={item.id}
        stock={item.stock}
        src={item.image}
        name={item.name}
        brand={item.brand}
        price={item.price}
      />
    </>
  );
};

export default ItemDetailContainer;
