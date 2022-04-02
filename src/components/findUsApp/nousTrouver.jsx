import React, { useState } from 'react'
import { getDays } from './jours'
import { IconTitleLaCarte } from '../commons/icons'
import { Tab } from '@headlessui/react'
import { Button } from '../commons/button'
import { Layout } from '../commons/layout'
import { Header } from '../commons/header'

export const NousTrouver = ({ location }) => {
   const index = new Date().getDay() - 1
   const defaultDay = getDays()[index]
   const [activeDay, setActiveDay] = useState(defaultDay)

   const stateChange = (compare, isTrue, isFalse) => {
      return activeDay === compare ? isTrue : isFalse
   }

   const handleDayChange = day => {
      const ouverture = [...getDays()]
      setActiveDay(ouverture.filter(j => j._id === day._id)[0])
   }
   const getActiveDay = key => {
      return activeDay[key]
   }
   return (
      <Layout title={'Nos Emplacements'} Component={<IconTitleLaCarte />}>
         <section className="w-auto h-auto flex flex-column  gap-4 justify-center align-items-center">
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
            <Tab.Group>
               <Tab.List
                  className={
                     ' my-6 flex justify-content-center align-center gap-x-8 gap-y-4 flex-wrap w-4/5'
                  }>
                  {getDays()
                     .filter(j => j._id !== 0 && j._id !== 6)
                     .map(j => (
                        <Tab key={j._id}>
                           {({ selected }) => (
                              <Button key={j._id} activeClass={selected} height={12}>
                                 {j.jour}
                              </Button>
                           )}
                        </Tab>
                     ))}
               </Tab.List>
               <Tab.Panels>
                  {getDays()
                     .filter(j => j._id !== 0 && j._id !== 6)
                     .map(jour => (
                        <Tab.Panel as={'div'} className={'text-center '}>
                           <h2>Nous sommes ouvert le {jour.jour}</h2>
                           <h3>{jour.horaires}</h3>
                           <p className={'text-small text-align-center font-thin tracking-wide leading-relaxed mb-6'}>
                              Cliquez sur la carte pour ouvrir dans Google Maps
                           </p>
                           <img src={jour.url} alt='Carte de nos emplacements' className={'h-full object-cover cursor-pointer transform hover:scale-105'} />
                        </Tab.Panel>
                     ))}
               </Tab.Panels>
            </Tab.Group>
         </section>
      </Layout>
   )
}
