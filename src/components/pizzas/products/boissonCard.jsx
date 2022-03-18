import React from 'react';

export const BoissonCard = ({product}) => {
    return (
        <div className={'productCard'}>
            <div className="card-body">
                <h3>{product.nom}</h3>
                <p>{product.prix}€</p>
            </div>
        </div>
    );
};
