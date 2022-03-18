import React from 'react';
import button from "bootstrap/js/src/button";

export const RenderButtons = ({onChange}) => {

    const buttons = ["pizzas", "boissons", "desserts"]
    return (
        <ul>
            {buttons.map(categories => (
                <li>
                    <button
                        key={categories}
                        onClick={() => onChange(categories)}
                        value={categories}
                    >
                        NOS {categories.toUpperCase()}
                    </button>
                </li>
            ))}
        </ul>
    );
};
