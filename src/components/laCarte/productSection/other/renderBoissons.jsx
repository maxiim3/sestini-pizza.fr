import React from 'react';

export const RenderBoissons = ({boissons}) => {
    return (
            boissons.map(boisson =>
            <li key={`${boisson._id}_${boisson.nom}`}>
                <p className={'left'}>{boisson.nom}</p> <span className="center"></span>  <p className={'right'}> {boisson.prix}€</p>
            </li>
            )
    );
};
