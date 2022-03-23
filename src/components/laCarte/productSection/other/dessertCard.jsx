import React from 'react';

export const DessertCard = ({prix, nom, url}) => {

    return (
        <div className={'productCard'}>
            <h3>{nom} <span className="price">{prix}€</span></h3>
            <img className="img" src={url} alt={`Photo de notre pizza ${nom}`}/>
        </div>
    );
};
