import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.scss";
import ItemList from "../../components/ItemList/ItemList";
import ItemListCarousel from "../../components/ItemListCarousel/ItemListContainerCarousel";
import db from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  const getData = async () => {
    try {
      const querySnapchot = await getDocs(collection(db, "products"));
      const response = querySnapchot.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProducts(response);
      console.log(products);
    } catch (error) {
      console.log("error trayendo base de datos de firebase");
    }
  };

  const getCategoryId = async (id) => {
    try {
      const dataQuery = await getDocs(
        query(collection(db, "products"), where("category", "==", id))
      );
      const response = dataQuery.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProducts(response);
    } catch (error) {
      console.log("error trayendo base de datos de firebase");
    }
  };

  useEffect(() => {
    categoryId ? getCategoryId(categoryId) : getData();
  }, [categoryId]);
  console.log(products);

  return (
    <>
      <main>
        <div className="row">
          <ItemListCarousel className="container" />
        </div>
        <div className="row mt-5">
          <div className="container">
            <div className="row">
              <div className="cards-grid">
                <ItemList products={products} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ItemListContainer;
