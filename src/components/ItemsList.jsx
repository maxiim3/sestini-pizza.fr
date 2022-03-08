import React, { useEffect, useState } from 'react';
import Data from './items.json';
import ItemsCard from './ItemsCard';
import Filter from './Filter';

const ItemsList = ({index}) => {

   const [data, setData] = useState([]);
   const [selectedFilterElement, setSelectedFilterElement] = useState('');
useEffect(() => {
   if(index === ''){
      setData(Data[0])
   }
   else{
      setData(Data[index])
   }
}, [data, index])

   const handleFilterButtonChange = (e) => {
      setSelectedFilterElement(e.target.value);
   }
   return (
      <div>
         {<Filter filterElementList={["base rouge", "base blanche", "base special","sans viande", "avec poisson"]} handleFilterButtonChange={handleFilterButtonChange}/>}
         {data.filter(categories => categories.base.includes(selectedFilterElement) || categories.particularity.includes(selectedFilterElement)).map(
         categories => 
           <div key={categories.id}>
               {<ItemsCard items={categories}/>}
            </div>
         )}
      </div>
   );
};

export default ItemsList;