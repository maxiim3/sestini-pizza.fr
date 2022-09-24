import PizzaDeSaison from '../../Data/pizzaDeSaison.json'
import { NavLink } from 'react-router-dom'
import React, { createRef, useEffect, useState } from 'react'

export const Modal = () => {
   const [modal, setModal] = useState(true)
   useEffect(() => {
      if (modal === true) {
         setTimeout(() => {
            const $modal = document.querySelector('dialog')
            $modal.showModal()
         }, 350)
      } else if (modal === false) {
         closeDialog()
      }
   }, [modal])

   const [counter, setCounter] = useState(10)
   useEffect(() => {
      if (modal === true) {
         if (counter < 3) {
            setModal(false)
         } else {
            const timer = setTimeout(() => {
               if (counter === 2) clearTimeout(timer)
               else {
                  setCounter(counter - 1)
               }
            }, 1000)
         }
      }
      return () => {}
   }, [counter])

   function closeDialog() {
      const $modal = document.querySelector('#modal')
      $modal.className = 'animate__animated animate__fadeOut'

      const timerClose = setTimeout(() => {
         $modal.close()
         clearTimeout(timerClose)
      }, 450)
   }

   return (
      <dialog
         id={'modal'}
         data-timing={`Fermeture dans ${counter}s`}
         className={'animate__animated animate__fadeIn'}>
         <button
            className={
               'absolute top-12 right-12 text-3xl font-semibold text-gold hover:cursor-pointer hover:text-beige hover:underline hover:underline-offset-4'
            }
            onClick={() => setModal(false)}>
            Fermer X
         </button>
         <article
            id={'pizza-du-mois'}
            className={
               'mx-auto mt-12 mb-2 flex flex-col items-center justify-evenly text-center text-3xl text-beige'
            }>
            <h2
               className={
                  'text-uppercase text-center font-accent text-3xl font-normal leading-loose tracking-wider text-beige'
               }>
               Découvrez notre
            </h2>
            <h3
               className={
                  'my-8 font-decorative text-5xl text-beige md:inline-block md:font-semibold'
               }>
               pizza d'automne
            </h3>
            <dl
               className={
                  'my-12 w-full bg-beige py-4 font-describe text-3xl font-normal leading-relaxed tracking-widest text-dark-grey'
               }>
               <dt className={'hidden'}>Ingrédients</dt>
               <dd>{PizzaDeSaison.base.describe}</dd>
               {PizzaDeSaison.ingredients.map(ingredient => (
                  <dd key={ingredient}>{ingredient}</dd>
               ))}
               {PizzaDeSaison.afterCook && (
                  <>
                     <h4
                        className={'mt-6 font-normal text-light-grey underline underline-offset-2'}>
                        Après Cuisson
                     </h4>
                     <dt className={'hidden'}>Ingrédients ajoutés après-cuisson</dt>
                     {PizzaDeSaison.afterCook.map(ingredient => (
                        <dd>{ingredient}</dd>
                     ))}
                  </>
               )}
            </dl>
            <NavLink
               className={
                  'modalLink mb-12 text-center font-accent text-4xl text-gold underline underline-offset-4'
               }
               to={'/la-carte'}>
               Je découvre la carte
            </NavLink>
            <img
               src={PizzaDeSaison.url}
               alt="La Pizza d'Automne"
            />
         </article>
      </dialog>
   )
}
