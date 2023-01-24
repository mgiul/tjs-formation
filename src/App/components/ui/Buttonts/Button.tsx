import React, { useState, useEffect, ReactElement } from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

interface IButtonProps {
    onButtonClick: Function
    bgColor?: string
    style?: {}
    children: string | React.ReactElement | Array<ReactElement | string>
}


/**
 * simple button
 * @returns react component structure
 */

const Button = (props: IButtonProps) => {
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
            style={{ ...props.style, backgroundColor: props.bgColor }}
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

Button.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    style: PropTypes.object,
    bgColor: PropTypes.string
}

Button.defaultProps = {
    onButtonClick: () => { alert('pas d\'action'); } // Ne jamais faire alert ça bloque tout le js
}

// function Button() {
//     return <button className="Button">benjamin</button>;
// }

export default Button;