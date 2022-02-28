import React, { useEffect, useState } from 'react';


const PizzaCard = ({categories}) => {
console.log(categories);
   return (
      <div>
         {categories.pizzaList.map(pizza => {
            return (
               <div key={pizza.id}>
                  <h4>{pizza.title}</h4>
                  <p>{pizza.price + " €"}</p>
                  <p>{pizza.ingredients}</p>
                  <p>{pizza.afterCook}</p>
               </div>
            )})}
      </div>
   );
};

export default PizzaCard;