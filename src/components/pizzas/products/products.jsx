import {PizzaCard} from "./pizzaCard";
import {BoissonCard} from "./boissonCard";
import {DessertCard} from "./dessertCard";
import React from "react";

export const Products = ({product, category}) => {
    if (category === 'pizzas')
        return (
            <PizzaCard product={product}/>
        )
    else if (category === 'boissons')
        return (
            <BoissonCard product={product}/>
        )
    else
        return (
            <DessertCard product={product}/>
        )
}