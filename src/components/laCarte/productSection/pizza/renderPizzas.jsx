import React from 'react'
import { RenderProductsLayout } from '../renderProducts'

export const RenderPizzas = ({ pizzas, supplements }) => {
   const getData = () => {
      const array = []
      pizzas.forEach(({ base }) => array.push(base['label']))
      const newArray = new Set(array)
      return [...newArray]
   }

   return (
      <>
         {getData().map(base => (
            <>
               <h3
                  className={
                     'mt-8 mb-4 text-center font-decorative text-3xl font-bold tracking-wide '
                  }>
                  Pizza {base}
               </h3>
               {pizzas
                  .filter(p => p.base.label === base)
                  .map(pizza => (
                     <RenderProductsLayout product={pizza} />
                  ))}
            </>
         ))}
         <dl className={'text-center'}>
            <dt className={'hidden font-describe text-base font-light'}>Suppléments</dt>
            {supplements.map(supp => (
               <span>
                  <dd className={'inline'}>{supp.nom} </dd>
                  <dd className={'inline'}>
                     {supp.prix}€{supplements.indexOf(supp) === supplements.length - 1 ? '' : ' / '}
                  </dd>
               </span>
            ))}
         </dl>
      </>
   )
}
