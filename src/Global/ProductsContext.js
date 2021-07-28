import React, {createContext, useState} from 'react';

import blueberry from "../assets/blueberry.jpg";
import grapes from "../assets/grapes.jpg";
import orange from "../assets/orange.jpg";
import apple from "../assets/apple.jpg";
import mango from "../assets/mango.jpg";
import pineapple from "../assets/pineapple.jpg";
import watermelon from "../assets/watermelon.jpg";
import rasberry from "../assets/rasberry.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id: 1, name: 'Blueberry', price: 100, image: blueberry, status: 'new'},
        {id: 2, name: 'Grapes', price: 150, image: grapes, status: 'hot'},
        {id: 3, name: 'Orange', price: 200, image: orange, status: 'hot'},
        {id: 4, name: 'Apple', price: 100, image: apple, status: 'new'},
        {id: 5, name: 'Mango', price: 300, image: mango, status: 'new'},
        {id: 6, name: 'Pineapple', price: 140, image: pineapple, status: 'hot'},
        {id: 7, name: 'Watermelon', price: 300, image: watermelon, status: 'new'},
        {id: 8, name: 'Rasberry', price: 100, image: rasberry, status: 'hot'}
    ]);

    return (
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;