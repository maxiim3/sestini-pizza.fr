import React from 'react'
import { Button } from '../commons/button'
import { IconFaceBook, IconInstagram, IconNavLaCarte, IconNavLocalisation } from '../commons/icons'
import { Link, NavLink } from 'react-router-dom'
import { PhoneNumber } from '../commons/informations'
import info from '../../data/informations.json'

export const Hero = () => {
   return (
      <>
         <header className="col-span-full h-96 grid place-content-center" to={'/bienvenus'}>
            {/*<MainLogo />*/}
            <img src={'./img/logo-groupe.png'} alt="Logo Sestini Pizza" />
         </header>
         <section
            className={
               'grid grid-cols-5 grid-rows-6 gap-y-2 px-3 md:flex justify-between md:max-w-3xl'
            }>
            <div className={'col-start-1 col-end-3 row-start-1 justify-self-center self-center'}>
               <Button nav={true}>
                  <IconNavLocalisation />
                  <NavLink className="" to={'/nous-trouver'}>
                     <div className="text-xl text-yellow-100 uppercase font-semibold">
                        Nous
                        <br />
                        Trouver
                     </div>
                  </NavLink>
               </Button>
            </div>
            <div className="col-start-2 col-end-5 row-start-2 justify-self-center self-center md:row-start-1">
               <Button nav={true} activeClass={true}>
                  <IconNavLaCarte />
                  <NavLink className="" to={'/la-carte'}>
                     <div className="text-xl text-dark uppercase font-semibold">
                        Notre
                        <br />
                        Carte
                     </div>
                  </NavLink>
               </Button>
            </div>
            <div
               className={
                  'col-start-4 col-end-6 row-start-3 justify-self-center self-center md:row-start-1'
               }>
               <Button nav={true}>
                     <div className="text-xl text-yellow-100 uppercase font-semibold">
                        <a href={"#pizza-du-mois"}>
                           La Pizza
                           <br />
                           Du Mois
                        </a>
                     </div>
               </Button>
            </div>
            <img
               className={
                  'col-start-4 row-start-1 col-end-6 justify-self-end transform translate-x-6'
               }
               src={'./img/basilic.png'}
               alt="feuilles de basilic"
            />
            <img
               className={
                  'left-0 col-start-1 col-end-4 row-start-3 row-end-6 transform -translate-x-12'
               }
               src={'./img/pizza-half.png'}
               alt="Photo de l'une de nos délicieuses pizza"
            />
            <div
               className={
                  'col-start-4 col-span-2 row-start-4 md:row-start-1 md:order-first justify-self-center self-start grid grid-cols-2 grid-rows-2 gap-y-px gap-x-px'
               }>
               <div className="col-span-2 row-start-1 justify-self-center self-center text-yellow-100 text-xl">
                  <PhoneNumber />
               </div>
               <div className="col-span-1 row-start-2 justify-self-center self-center">
                  <a
                     href={info[0].facebook}
                     target="_blank"
                     rel="noopener"
                     className={'inline-block'}>
                     <IconFaceBook beige={true} />
                  </a>
               </div>
               <div className="col-span-1 row-start-2 justify-self-center self-center">
                  {' '}
                  <a
                     href={info[0].instagram}
                     target="_blank"
                     rel="noopener"
                     className={'inline-block'}>
                     <IconInstagram beige={true} />{' '}
                  </a>
               </div>
            </div>
         </section>
      </>
   )
}
