import React from 'react'
import PizzaDuMois from '../../data/pizzaOfMonth.json'

export const TextGold = ({ children }) => {
   return <span className={' text-gold'}>{children}</span>
}

export const PdM = () => {
   const capitalizeFirstLetter = txt => {
      return txt.split(' ').map(word => (
         <>
            <span className={'font-decorative uppercase'}>{word.slice(0, 1)}</span>
            {word.slice(1)}
         </>
      ))
   }

   return (
      <>
         <section
            className={
               'max-w-4xl border-t-2 border-b-2 border-beige px-8 py-16 text-center text-3xl font-thin leading-loose tracking-wide md:mx-auto md:flex md:justify-around  md:rounded-3xl md:border-2 '
            }>
            <p>
               <TextGold>Tous les mois</TextGold>, <br /> La Pizza Sestini<sup>&copy;</sup> met à
               profit sa <TextGold>créativité</TextGold> et son <TextGold>expérience</TextGold> afin
               de vous offrir une pizza <TextGold>originale</TextGold> et des{' '}
               <TextGold>produits</TextGold> de <TextGold>qualité sélectionnés</TextGold> avec
               soins.
            </p>
         </section>
         {/*<section className={'text-beige-light text-3xl px-16 my-44 text-center'}>*/}
         {/*   <p>Tomato-Logo-here</p>*/}
         {/*</section>*/}

         <article id={'pizza-du-mois'} className={'px-auto my-12 text-center text-3xl text-beige'}>
            <h2
               className={
                  'text-uppercase my-16 px-16 text-center font-accent text-3xl font-thin leading-loose tracking-wider text-beige-light'
               }>
               Ce mois-ci, <br /> Découvrez
            </h2>
            <div className={'mx-auto h-3 w-3/5 border-t-2 border-b-2 border-beige-light'} />
            <h3 className={'font-bolder my-12 font-accent text-5xl'}>
               {capitalizeFirstLetter(PizzaDuMois.nom)}
            </h3>
            <div className={'mx-auto h-3 w-3/5 border-t-2 border-b-2 border-beige-light'} />
            <dl className={'my-12 font-describe text-3xl leading-relaxed tracking-wider'}>
               <dt className={'hidden'}>Ingrédients</dt>
               <dd>{PizzaDuMois.base.label}</dd>
               {PizzaDuMois.ingredients.map(ingredient => (
                  <dd>{ingredient}</dd>
               ))}
               {!PizzaDuMois.afterCook ? null : (
                  <>
                     <dt className={'hidden'}>Après cuisson</dt>
                     {PizzaDuMois.afterCook.map(ingredient => (
                        <dd>{ingredient}</dd>
                     ))}
                  </>
               )}
               <dt className={'hidden'}>Prix</dt>
               <dl className={'p-o mx-8 text-right font-accent text-3xl text-beige-light'}>
                  {PizzaDuMois.prix}€
               </dl>
            </dl>
            <img
               className={'m-o p-o w-screen'}
               src={PizzaDuMois.url}
               alt="Photo de la pizza du mois"
            />
         </article>
      </>
   )
}
