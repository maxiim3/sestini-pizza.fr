import React, {useEffect, useState} from 'react';
import ItemsList from './ItemsList';
import ItemsOfMonth from './ItemsOfMonth';

const Home = () => {

const buttonMenuList = ["Nos Pizza", "Nos Boissons", "Nos Desserts"];
const [buttonMenu, setButtonMenu] = useState('');
const [index, setIndex] = useState(0);

useEffect(() => {
   setIndex('')
   //setIndex(buttonMenu)

}, [])


const selectedButtonMenu = (e) => {
   setButtonMenu(e.target.value)
   if(e.target.value === "Nos Pizza"){
      setIndex(0)
   }
   else if(e.target.value === "Nos Boissons") {
      setIndex(1)
   }
   else if(e.target.value === "Nos Desserts"){
      setIndex(2)
   }
   else {
      setIndex(0)
   }
}
   return (
      <div>
         {buttonMenuList.map((btnMenu) => <button key={btnMenu} onClick={selectedButtonMenu} value={btnMenu}>{btnMenu}</button>)}
         <ItemsList index={index}/>
         <ItemsOfMonth />
      </div>
   );
};

export default Home;