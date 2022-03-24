import React from 'react';
import  './button.css';

const Styles =  [
    "btn--primary--solid"
]
const Sizes = ["btn-medium", "btn-small"]
export const Button =
 ({children, type, onClick, buttonStyle,buttonSize}) => {


}) => {

    return(
        <button onClick={onClick}type ={type}>

            {children}
        </button>
    );
};