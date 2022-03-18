import React from 'react';
import button from "bootstrap/js/src/button";

const Button = ({categories, onChange}) => {
    return (
        <button
            key={categories}
            onClick={() => onChange(categories)}
            value={categories}
        >
            NOS {categories.toUpperCase()}
        </button>
    );
};

export default Button;
