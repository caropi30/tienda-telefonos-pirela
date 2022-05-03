import React, { useState,useEffect } from 'react';
import './ItemListContainer.scss';
import ItemList from '../../components/ItemList/ItemList'
import getData from './../../stockData'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData
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