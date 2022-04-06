import React from 'react'
import { IconFaceBook, IconInstagram, IconLogoWithoutText } from './components/commons/icons'
import { Adresse, Email, PhoneNumber } from './components/commons/informations'

export const Footer = () => {
   return (
      <footer
         className={
            ' py-12 grid grid-rows-6 grid-cols-3 justify-items-center align-items-center text-center text-light-grey leading-relaxed tracking-wide borderTop'
         }>
         <div className="row-start-1 col-1">
            <IconFaceBook beige={false} />
         </div>
         <div className="row-start-1 col-2">
            <IconLogoWithoutText />
         </div>
         <div className="row-start-1 col-3">
            <IconInstagram beige={false} />
         </div>
         <div className={'col-start-2 row-start-2'}>
            <p> Sestini <sup>&copy;</sup> 2022</p>
            <p> <Email /></p>
            <p> <PhoneNumber /></p>
         </div>
         <div className={'col-start-2 row-start-3'}>
            <p>SARL 10558442XD</p>
            <p>Au capital de 000000 &euro;</p>
         </div>
         <div className={'col-start-2 row-start-4'}>
            <Adresse />
         </div>
         <div className={'col-start-2 row-start-5'}>
            <a>CGU</a>
         </div>
         <div className={'col-start-2 row-start-6'}>
            Video by Denys Gromov: https://www.pexels.com/video/a-person-cooking-pizza-6176588/
         </div>
      </footer>
   )
}
