import React from 'react';

export const BoissonCard = ({prix, nom}) => {
    return (
        <div className={'productCard'}>
            <div className="card-body">
                <p>{nom} ------ {prix}€</p>
            </div>
        </div>
    );
};
