import React from 'react';

const ItemsOfMonth = () => {

   return (
      <div>
         <div>
            <h2>Pizza du mois</h2>
         </div>
         <div>
            <form>
               <input type='text' placeholder='Nom de la pizza'/>
               <input type='text' placeholder='prix' />
               <textarea placeholder='composition'></textarea>
               <textarea placeholder='Après cuisson'></textarea>
               <input type='submit' value='Enregistrer' />
            </form>
         </div> 
      </div>
   );
};

export default ItemsOfMonth;