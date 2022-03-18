import React from 'react';

export const DessertCard = ({prix, nom, url}) => {

    return (
        <div className={'productCard'}>
            <div className="card-header">
                <div className="title">
                    <h3>{nom}</h3>
                </div>
                <div className="img"><img style={{width: '50vw'}} src={url} alt={`Photo de notre pizza ${nom}` }/></div>
                <div className="price">
                    <p>{prix}€</p>
                </div>
            </div>
            <div className="card-body">
            </div>

        </div>
    );
};
