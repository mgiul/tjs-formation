import React, { useState, useEffect } from 'react';
import style from './Button.module.css'

/**
 * simple button
 * @returns react component structure
 */

const Button = (props) => {
    // Valeur étatique pour function
    const [isClicked, setIsClicked] = useState(false);

    // Hook d'effet de cycle de vie d'une valeur / ou de composant
    useEffect(() => {
        if (isClicked) {
            setTimeout(() => setIsClicked(false), 750);
        }
    }, [isClicked]);
    
    console.log(props);
    return (
        <button
            className={
                // isClicked ? style.Button + ' ' + style.clicked : style.Button
                `${style.Button}${isClicked ? ' ' + style.clicked : ''}`
            }
            onClick={(arg) => {
                setIsClicked(true);
                console.log(isClicked);
                console.log(arg);
                props.onButtonClick();
            }}>
            {props.children}
        </button>
    );
}

// function Button() {
//     return <button className="Button">benjamin</button>;
// }

export default Button;