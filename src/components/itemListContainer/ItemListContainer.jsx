import React from 'react';
import './ItemListContainer.scss';
import ItemCount from '../ItemCount/ItemCount';
//import stockData from 'stockData.js'

const ItemListContainer = (props) => {
   return(
    <>
        <h1 className="title">{props.greeting}</h1>
        <ItemCount variant="primary" stock={5} initial={1} />
    </>

   );
}

export default ItemListContainer;