import React from 'react';

export const PizzaCard = ({product}) => {
    const {prix, nom, url, afterCook, ingredients, base} = product


    const getAfterCook = () => {
        if(afterCook) {
            return (
                    <p><strong>Après Cuisson</strong>:  {afterCook.join(', ')}</p>
            )
        }
    }

    return (
        <div className={'productCard'}>
            <div className="card-header">
                <img src={url} alt={`Photo de notre pizza ${nom}` }/>
                <div className="title">
                    <h3>{nom}</h3>
                </div>
                <div className="price">
                    <p>{prix}€</p>
                </div>
            </div>
            <div className="card-body">
                <div className="description">
                    <p><strong>Ingrédients: </strong>{base.label} {ingredients.join(', ')}</p>
                    {getAfterCook()}
                </div>
            </div>

        </div>
    );
};
