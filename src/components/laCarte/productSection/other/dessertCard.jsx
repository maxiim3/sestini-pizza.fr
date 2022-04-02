import React from 'react';
import 'animate.css'

export const DessertCard = ({prix, nom, url}) => {

    return (
        <div className={'m-4 p-4 animate__animated animate__slideInUp '}>
            <h3 className={"font-['Roboto'] text-3xl  text-center tracking-wide pb-2"}>{nom} <span className="text-2xl font-['Cinzel\\ Decorative']">{prix}€</span></h3>
            <img className="w-96 h-96 object-cover object-bottom sm:object-center sm:object-fit rounded-3xl shadow-2xl shadow-black" src={url} alt={`Photo de notre pizza ${nom}`}/>
        </div>
    );
};
