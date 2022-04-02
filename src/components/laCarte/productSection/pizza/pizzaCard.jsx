import React from 'react';
import 'animate.css'

export const PizzaCard = ({product}) => {
    const {prix, nom, url, afterCook, ingredients, base} = product


    const getAfterCook = () => {
        if(afterCook) {
            return (
                    <p className={"mt-1"}><strong className={"font-extrabold"}>Après Cuisson</strong>:  {afterCook.join(', ')}</p>
            )
        }
    }

    return (
        <div className={'w-[28rem] min-h-[330px] h-fit  sm:h-4/5 md:h-full bg-beige text-dark-grey rounded-3xl animate__animated animate__fadeIn '}>
            <header className="relative w-full h-48 md:h96 p-0 z-0">
                <div className="h-max w-[102%] absolute -t-1 -l-4 z-10 text-3xl font-['Cinzel'] font-bold tracking-widest text-center text-beige bg-dark-gray-90 grid place-content-center ">
                    <h3 className={'m-4'}>{nom}</h3>
                </div>
                <img className={'object-cover object-center rounded-t-3xl w-full h-full -t-1 -left-1 '} src={url} alt={`Photo de notre pizza ${nom}` }/>
                <div className="absolute bottom-4 right-6 h-24 w-25 rounded-full bg-gold-90 grid place-content-center text-beige text-2xl font-['Cinzel\\ Decorative, cursive']">
                    <p>{prix}€</p>
                </div>
            </header>
            <div className="relative h-full m-o p-4">
                <desc className="text-2xl font-semi-bold leading-relaxed tracking-widest">
                    <p className={''}><strong className={'font-extrabold'}>Ingrédients: </strong>{base.label} {ingredients.join(', ')}</p>
                    {getAfterCook()}
                </desc>
            </div>

        </div>
    );
};
