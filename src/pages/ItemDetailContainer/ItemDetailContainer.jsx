import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import data from '../../stockData';

function getItemData(id) {
  const dataPromise = new Promise((resolve) => {
    const item = data.filter(item => item.id === parseInt(id));
    console.log(item)
    setTimeout(() => {
      resolve(item[0]);
    }, 2000);
  });
  return dataPromise;
}


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {id} = useParams();
  
  useEffect(() => {
    console.log(id)
    getItemData(id)
      .then((response) => {
        setItem(response);
      })
      .catch((error) => console.log("Ocurrió un error"));
  }, [id]);

  return (
    <>
      <ItemDetail
        id={id}
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
