import React from 'react';
import {DessertCard} from "./dessertCard";

export const RenderDesserts = ({desserts}) => {
    return (
        desserts.map(dessert =>
            <li className={""} key={`${dessert._id}_${dessert.nom}`}>
             <DessertCard prix={dessert.prix} nom={dessert.nom} url={dessert.url}/>
            </li>
        )
    );
};
