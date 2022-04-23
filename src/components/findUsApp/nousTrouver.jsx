import React, { useState } from 'react'
import { getDays } from './jours'
import { IconTitleLaCarte } from '../commons/icons'
import { Button } from '../commons/button'
import { Layout } from '../commons/layout'
import { Header } from '../commons/header'

/**
 * @param location
 * @return {JSX.Element}
 * @constructor
 */
export const NousTrouver = ({ location }) => {
   const index = new Date().getDay() - 1
   const defaultDay = getDays()[index]
   const [activeDay, setActiveDay] = useState(defaultDay)

   const getActiveDay = key => {
      return activeDay[key]
   }

   return (
      <Layout title={'Nos Emplacements'} Component={<IconTitleLaCarte />}>
         <section className="w-auto h-auto flex flex-col  gap-4 justify-center items-center">
            <Header title={'Horaires'} />
            <div className={'text-3xl text-center tracking-wide leading-relaxed'}>
               <p>Nous sommes ouverts</p>
               <p>de 18h à 21h30</p>
               <p>du mardi au samedi</p>
            </div>
            <div className={''}>
               <img src="./icon/Horloge-beige.png" alt="" className={'w-8'} />
            </div>
            <bottom>
               <p className={'text-small text-center font-thin tracking-wide'}>
                  Sélectionnez un jour pour visualiser sur la carte nos emplacements
               </p>
            </bottom>
         </section>
         <section className="flex flex-wrap align-items-center justify-center gap-1 text-beige">
            <ul>
               <li
                  className={
                     ' my-6 flex justify-content-center align-center gap-x-8 gap-y-4 flex-wrap w-4/5'
                  }>
                  {getDays()
                     .filter(j => j.estOuvert)
                     .map(j => (
                        <Button
                           key={j._id}
                           activeClass={j.jour === getActiveDay('jour')}
                           height={12}
                           onClick={() => setActiveDay(j)}
                           >
                           {j.jour}
                        </Button>
                     ))}
               </li>
            </ul>
         </section>

         <section className="w-auto h-max flex flex-col  gap-2 justify-center items-center">
            <article className={'h-full w-full animate__animated animate__fadeIn'}>
               <ul className={'flex flex-col align-items-center gap-y-6 m-12'}>
                  {getDays()
                     .filter(j => j._id === getActiveDay('_id'))
                     .map(jour => (
                        <li as={'div'} className={'text-center '} key={jour._id + 10}>
                           <h2>Nous sommes {jour.estOuvert ? "ouvert" : "fermé"} le {jour.jour}</h2>
                           <h3>{jour.horaires}</h3>
                           <p
                              className={
                                 'text-small text-align-center font-thin tracking-wide leading-relaxed mb-6'
                              }>
                              Cliquez sur la carte pour ouvrir dans Google Maps
                           </p>
                           <img
                              src={jour.url}
                              alt="Carte de nos emplacements"
                              className={
                                 'h-full object-cover cursor-pointer transform hover:scale-105'
                              }
                           />
                        </li>
                     ))}
               </ul>
            </article>
         </section>
      </Layout>
   )
}
