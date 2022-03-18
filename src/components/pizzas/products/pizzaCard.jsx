import React from 'react';

export const PizzaCard = ({product}) => {
    const {prix, nom, url, afterCook, ingredients, sansBase, baseBlanche, baseRouge} = product

    const getBase = () => {
        return sansBase ? "Sans Base, "
            : baseBlanche ? "Crème Fraîche, " : "Sauce Tomate, "
    }
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
                <div className="title">
                    <h3>{nom}</h3>
                </div>
                <div className="img"><img style={{width: '50vw'}} src={url} alt={`Photo de notre pizza ${nom}` }/></div>
                <div className="price">
                    <p>{prix}€</p>
                </div>
            </div>
            <div className="card-body">
                <div className="description">
                    <p><strong>Ingrédients: </strong>{getBase()} {ingredients.join(', ')}</p>
                    {getAfterCook()}
                </div>
            </div>

        </div>
    );
};
