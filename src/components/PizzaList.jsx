import React, { useEffect, useState } from 'react';
import Data from './articles.json';
import PizzaCard from './PizzaCard';




const PizzaList = () => {

   const [data, setData] = useState([]);
   const [selectedFilterElement, setSelectedFilterElement] = useState(''); //button filtre selectionné
   const filterElements = ["base rouge", "base blanche", "base neutre","sans viande", "avec poisson"]; //liste des boutons radio
   const [playOnce, setPlayOnce] = useState(true); 

useEffect(() => {
   if(playOnce){
      setData(Data)
      setPlayOnce(false)
   }
}, [data,playOnce])


const handleFilterButtonChange = (e) => {
   setSelectedFilterElement(e.target.value);
}



   return (
      <div>
         {filterElements.map((filterElement) => {
            return (
               <div key={filterElement}>
                  <input type="button" value={filterElement} id={filterElement} onClick={handleFilterButtonChange}/>
                  <label htmlFor={filterElement}></label>
               </div>
            );
         })}
         {data.filter(categories => categories.categoryTitle.includes(selectedFilterElement)).map(
            categories => {
               return (
                  <div key={categories.categoryId}>
                     <h2>{categories.categoryTitle}</h2>
                     {<PizzaCard key={categories.categoryId} categories={categories}/>}
                 </div>
            )
            })}
      </div>
   );
};

export default PizzaList;