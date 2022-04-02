import React from 'react';
import {RenderPizza} from "./pizza/renderPizza";
import {RenderBoissons} from "./other/renderBoissons";
import {RenderDesserts} from "./other/renderDesserts";
import 'animate.css'

export const RenderProducts = ({products, categories, iteration}) => {
    if (categories === 'pizzas')
        return (
            <div>
                <ul className={"h-max sm:h-auto my-1 flex gap-2 md:gap-4 flex-row md:flex-wrap overflow-x-scroll animate__animated animate__fadeIn"}>
                    <RenderPizza pizzas={products} iteration={iteration}/>
                </ul>
            </div>
        )
    else if (categories === 'desserts')
        return (
            <div className={"h-full w-full animate__animated animate__fadeIn"}>
                <ul className={"flex flex-nowrap justify-evenly align-items-center gap-4"}>
                    <RenderDesserts desserts={products}/>
                </ul>
            </div>
        )
    else
        return (
            <div className={"h-full w-full animate__animated animate__fadeIn"}>
                <ul className={'flex flex-column gap-y-6 m-12'}>
                    <RenderBoissons boissons={products}/>
                </ul>
            </div>
        )
};
