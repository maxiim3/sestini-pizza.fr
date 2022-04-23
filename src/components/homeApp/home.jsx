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
            ' neoMorphism grid h-24 w-max cursor-pointer place-content-center rounded-full font-main text-2xl uppercase text-beige'
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

export const LayoutHomePage = ({ children }) => {
   return (
      <article className="z-10 h-full w-screen text-beige md:mx-auto md:h-full md:max-w-7xl">
         {children}
      </article>
   )
}

const Home = () => {
   return (
      <>
         <header
            className={'hidden bg-dark-grey  md:block md:grid md:w-full md:place-content-center'}>
            <video
               className={'hover:cursor-pointer active:cursor-grabbing xl:rounded-3xl'}
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
               'flex-column flex flex-wrap items-center justify-between overflow-x-hidden bg-dark-grey md:gap-72'
            }>
            {/*Scrolling Component*/}
            <LayoutHomePage>
               <Hero />
            </LayoutHomePage>
            {/*<LayoutHomePage>*/}
            <PdM />
            {/*</LayoutHomePage>*/}
            <div className={'mx-auto mt-48 mb-80'}>
               <NeoMorphismBTN link={'#about'}>Plus d'informations</NeoMorphismBTN>
            </div>
            <article className="z-10 h-full w-screen bg-beige text-dark-grey">
               <About />
            </article>
            <div className={'my-24 mx-auto'}>
               <NeoMorphismBTN link={'#'}>Haut de la page</NeoMorphismBTN>{' '}
            </div>
            <Footer />
         </main>
      </>
   )
}

export default Home
