import React, { useState,useEffect } from 'react';
import './ItemListContainer.scss';
import ItemList from '../../components/ItemList/ItemList'
import getStock from './../../stockData'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getStock
            .then((response) => setProducts(response))
            .catch((error) => console.log(error))
    });
    return(
        <>
            <h1 className="title">{props.greeting}</h1>
            <ItemList products={products}/>
        </>

    );
}

export default ItemListContainer;