import React from 'react';
import './CartWidget.css';
import {Button} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';



const CartWidget = (props) => {
    const {variant, className, text} = props;

   return (
        <>
            <Button variant={{variant:variant}} className={{className: className}}>
                {text ? text : 'default text'}<FaShoppingCart/>
            </Button>
        </>
   )  
}

export default CartWidget;