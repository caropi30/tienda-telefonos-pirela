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
    },[]);
    return(
        <>
        <main>
            <div className="row">
            <h1 className="title">{props.greeting}</h1>
            </div>
            <div className="row mt-5">
                <div className="container">
                    <div className="container d-flex flex-wrap">
                        <ItemList products={products}/>  
                    </div>      
                </div>
            </div>
        </main>
        </>

    );
}

export default ItemListContainer;