import React from 'react';
import Button from "./button";

export const RenderButtons = ({onChange}) => {

    const buttons = ["pizzas", "boissons", "desserts"]
    return (
        <ul>
            {buttons.map(categories => (
                <li>
                    <Button
                        categories = {categories}
                        onChange={() => onChange(categories)}
                    />
                </li>
            ))}
        </ul>
    );
};
