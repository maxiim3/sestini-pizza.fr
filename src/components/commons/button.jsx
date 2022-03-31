import React from "react";
import PropTypes from 'prop-types';

/**
 * #Button Wrapper
 * @param children
 * @param activeClass {string}
 * @param onClick {function}
 * @param key {string || number}
 * @return {JSX.Element}
 * @constructor
 */
export const Button = ({children, activeClass, onClick, key}) => {
// export const Button = ({text, onClick, key, icon, activeClass}) => {

    return (
        <div key={key} className={`button ${activeClass}`} onClick={onClick}>
            {children}
        </div>
    );
};

/**
 * Strict Type Checking Props
 * @type {{onCLick: Requireable<(...args: any[]) => any>, activeClass: Requireable<string>, children: *, key: Requireable<string>}}
 */
Button.propTypes = {
    activeClass: PropTypes.string,
    onCLick: PropTypes.func,
    key: PropTypes.string || PropTypes.number,
}
