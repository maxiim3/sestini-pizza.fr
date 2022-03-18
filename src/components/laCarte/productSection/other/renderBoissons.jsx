import React from 'react';
import {BoissonCard} from "./boissonCard";
import {PizzaCard} from "../pizza/pizzaCard";

export const RenderBoissons = ({boissons}) => {
    return (
            boissons.map(boisson =>
            <li key={`${boisson._id}_${boisson.nom}`}>
            <BoissonCard prix={boisson.prix} nom={boisson.nom}/>
            </li>
            )
    );
};
