import React from 'react';
import {RenderPizza} from "./pizza/renderPizza";
import {RenderBoissons} from "./other/renderBoissons";
import {RenderDesserts} from "./other/renderDesserts";

export const RenderProducts = ({products, categories, iteration}) => {
    if (categories === 'pizzas')
        return (
            <div className={"products pizzas"}>
                <ul>
                    <RenderPizza pizzas={products} iteration={iteration}/>
                </ul>
            </div>
        )
    else if (categories === 'desserts')
        return (
            <div className={"products desserts"}>
                <ul>
                    <RenderDesserts desserts={products}/>
                </ul>
            </div>
        )
    else
        return (
            <div className={"products boissons"}>
                <ul>
                    <RenderBoissons boissons={products}/>
                </ul>
            </div>
        )
};
