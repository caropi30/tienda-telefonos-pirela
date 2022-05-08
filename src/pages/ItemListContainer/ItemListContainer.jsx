import React, { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import './ItemListContainer.scss';
import ItemList from '../../components/ItemList/ItemList'
import data from '../../stockData';
//import ItemListCarousel from '../../components/ItemListCarousel/ItemListContainerCarousel'




function getData(category) {
  const dataPromise = new Promise((resolve) => {
      const categoryFilter =  category ? data.filter(item => item.category === category): data;
        setTimeout(() => {
        resolve(categoryFilter);
        }, 2000);
  })

  return dataPromise;
}


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        console.log(categoryId);
        getData(categoryId)
            .then((response) => setProducts(response))
            .catch((error) => console.log(error))
    },[categoryId]);

    return(
        <>
        <main>
            <div className="row">
                {/*<ItemListCarousel />*/}
            </div>
            <div className="row">
            <h1 className="title">{props.greeting}</h1>
            </div>
            <div className="row mt-5">
                <div className="container">
                    <div className="row">
                        <div className="cards-grid">
                            <ItemList products={products}/>  
                        </div>
                    </div>      
                </div>
            </div>
        </main>
        </>

    );
}

export default ItemListContainer;