import React from 'react'
import { Hero } from './home-hero'
import { PdM } from './home-pdm'
import { Footer } from '../../footer'
import { About } from './home-about'
import * as PropTypes from 'prop-types'

function NeoMorphismBTN({ children, link }) {
   return (
      <div
         className={
            ' neoMorphism w-max h-24 rounded-full grid place-content-center text-beige uppercase text-2xl font-main  cursor-pointer'
         }>
         <a className={'p-8'} href={link}>
            {children}
         </a>
      </div>
   )
}
NeoMorphismBTN.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node,
}

const Home = () => {
   return (
      <>
         <header className={'hidden md:block '}>
            <video
               src={'./video/pexels-denys-gromov-6176588.mp4'}
               controls={true}
               controlsList={'nodownload nofullscreen noremotreplayback'}
               loop={true}
               muted={true}
               autoPlay={true}
            />
         </header>
         <main
            className={
               'flex flex-column flex-wrap justify-between items-center overflow-x-hidden m-0 p-0 bg-dark-grey'
            }>
            {/*Scrolling Component*/}
            <article className="h-full w-screen z-10">
               <Hero />
            </article>
            <article className="h-full w-screen z-10 text-beige text-2xl">
               <PdM />
            </article>
            <div className={'mt-48 mb-80'}>
               <NeoMorphismBTN link={'#about'}>Plus d'informations</NeoMorphismBTN>
            </div>
            <article className="h-full w-screen z-10 bg-beige text-dark-grey">
               <About />
            </article>
            <div className={'my-24'}>
               <NeoMorphismBTN link={'#'}>Haut de la page</NeoMorphismBTN>{' '}
            </div>
            <Footer />
         </main>
      </>
   )
}

export default Home
