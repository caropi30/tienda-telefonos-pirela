import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.scss";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import db from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const getSelectedProduct = async (productId) => {
    try {
      const response = await getDoc(doc(db, "products", productId));
      const result = { id: response.id, ...response.data() };

      setItem(result);
      console.log(result);
    } catch (error) {
      console.log("ha ourrido un error");
    }
  };

  useEffect(() => {
    getSelectedProduct(id);
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
