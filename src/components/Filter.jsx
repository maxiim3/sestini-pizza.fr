import React, {useEffect, useState} from 'react';

const Filter = ({filterElementList, handleFilterButtonChange}) => {

   const [filterElements, setFilterElements] = useState([]);

   useEffect(() => {
      setFilterElements(filterElementList)

   },[filterElementList])

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
      </div>
   );
};

export default Filter;