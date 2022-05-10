import React from 'react';
import './CartWidget.scss';
import {Button} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";



const CartWidget = (props) => {
    const {variant, text} = props;

   return (
        <>
            <Button variant={{variant:variant}} className="btn btn-primary">
                <Link to={"/cart/"} className="catalogue-card--btnDetail-link">{text ? text : 'default text'}<FaShoppingCart /></Link>
            </Button>
        </>
   )  
}

export default CartWidget;