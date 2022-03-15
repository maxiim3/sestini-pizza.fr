import React from 'react';

const ItemsCard = ({selectedFilterElement, items}) => {
   return (  
      <div className="itemsCard" key={items.id}>
         <h4>{items.title}</h4>
         {items.img !== undefined ? <img src={items.img} alt="items"/> : null}
         <p>{items.price + " €"}</p>
         <p>{items.ingredients}</p>
         <p>{items.afterCook}</p>
      </div>
   );
};

export default ItemsCard;