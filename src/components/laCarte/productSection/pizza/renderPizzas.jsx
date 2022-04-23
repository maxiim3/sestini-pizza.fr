import React from 'react'

export const RenderPizzas = ({ pizzas }) => {
   const getData = () => {
      const array = []
      pizzas.forEach(({ base }) => array.push(base['label']))
      const newArray = new Set(array)
      return [...newArray]
   }

   return getData().map(base => (
      <div className={'ml-1 mr-0 min-w-full sm:max-w-screen-sm '}>
         <h2 className={'font-bold font-decorative text-5xl tracking-wide my-8 text-light-grey'}>{base}</h2>
         {pizzas
            .filter(p => p.base.label === base)
            .map(pizza => (
               <ul className={'my-4'}>
                  <li className={'flex flex-nowrap gap-x-8'} key={`${pizza._id}_${pizza.nom}`}>
                     <h3 className={'inline-block align-self-start text-3xl font-semibold pb-1'}>{pizza.nom}</h3>
                     <span className="flex-grow-1 content-[''] border-t-[0.5px] border-beige/40 w-max mx-4 transform translate-y-4" />
                     <p className={'inline-block align-self-end text-2xl'}> {pizza.prix}€</p>
                  </li>
                  <p className={'w-full font-describe text-light-grey tracking-wider font-normal text-3xl leading-relaxed '}>
                     {pizza.base.label}, {pizza.ingredients.join(', ')}
                  </p>
                  {pizza.afterCook ? (
                     <p className={'mt-1 w-4/5 font-describe text-light-grey tracking-wider font-normal text-3xl leading-relaxed'}>
                        <strong className={'text-beige font-thin'}>Après Cuisson</strong>:{' '}
                        {pizza.afterCook.join(', ')}
                     </p>
                  ) : null}
               </ul>
            ))}
      </div>
   ))
   //region Old Filter
   //     return (
   //         pizzas.filter(pizza => (
   //             (iteration === 0)
   //                 ? pizza
   //                 : (iteration === 1)
   //                     ? !pizza.avecViande && !pizza.avecPoisson
   //                     : (iteration === 2)
   //                         ? !pizza.avecViande && pizza.avecPoisson
   //                         : pizza.avecViande && !pizza.avecPoisson
   //         )).map(pizza =>
   //             <li key={`${pizza._id}_${pizza.nom}`}>
   //                 <PizzaCard product={pizza}/>
   //             </li>
   //         )
   //     );
   //endregion
}
