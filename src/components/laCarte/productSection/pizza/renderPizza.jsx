import React from 'react';
import {PizzaCard} from "./pizzaCard";

export const RenderPizza = ({pizzas, iteration}) => {

    return (
        pizzas.filter(pizza => (
            (iteration === 0)
                ? pizza
                : (iteration === 1)
                    ? !pizza.avecViande && !pizza.avecPoisson
                    : (iteration === 2)
                        ? !pizza.avecViande && pizza.avecPoisson
                        : pizza.avecViande && !pizza.avecPoisson
        )).map(pizza =>
            <li key={`${pizza._id}_${pizza.nom}`}>
                <PizzaCard product={pizza}/>
            </li>
        )
    );
};


//
//
//
//
//
//

