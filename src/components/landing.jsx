import React from 'react'
import * as PropTypes from 'prop-types'
import { IconFaceBook, IconInstagram } from './commons/icons'
import { PhoneNumber } from './commons/informations'
import info from '../data/informations.json'
import 'animate.css'

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

export const Animate = ({ children, animation }) => {
   return <div className={`m-0 p-0 border-0 animate__animated ${animation}`}>{children}</div>
}
export const BlockSocialMedia = ({ children }) => {
   return <div className={'grid grid-rows-2 grid-cols-2 gap-x-2'}>{children}</div>
}

export const LinksSocialMedia = ({ component, text }) => {
   return (
      <div className={'row-start-2 col-span-1'}>
         <Animate animation={'animate__fadeInDown animate__delay-4s'}><a
            href={info[0][text]}
            target='_blank'
            rel='noopener'
            className={
               'block flex flex-column align-center justify-center transform hover:scale-105 hover:text-beige-light'
            }>
            <i className={'mx-auto'}>{component}</i>
            <p className={'text-lg text-beige text-center'}>{text}</p>
         </a></Animate>
      </div>
   )
}
export const LandingPage = () => {
   return (
      <main className={'overflow-hidden h-screen w-screen m-0 p-0 bg-dark-grey'}>
         {/*Scrolling Component*/}
         <article className="h-full w-screen z-10">
            <Animate animation={'animate__fadeIn animate__slower'}>
               <header className="col-span-full h-96 grid place-content-center" to={'/bienvenus'}>
                  {/*<MainLogo />*/}
                  <img src={'./img/logo-groupe.png'} alt="Logo Sestini Pizza" />
               </header>
            </Animate>

            <section
               className={'w-full h-3/6 flex flex-column justify-around  align-items-center '}>
               <Animate animation={'animate__fadeInDown'}><Animate animation={'animate__flash animate__delay-2s'}>
                  <div className={'text-beige text-5xl mx-auto'}>
                     <h2>Ouverture le 4 mai</h2>
                     {/*<div className={'w-96 border-b '} />*/}
                  </div>
               </Animate></Animate>
               <Animate animation={'animate__fadeIn animate__slow animate__delay-3s'}>
                  <div className={'text-beige-light text-3xl '}>
                     <h3 className={''}>Retrouvez nous sur les réseaux sociaux</h3>
                  </div>
               </Animate>
               <Animate animation={'animate__fadeIn animate__slow animate__delay-4s'}>
                  {' '}
                  <BlockSocialMedia>
                        <div
                           className={
                              'text-beige text-2xl text-center col-span-2 align-self-center'
                           }>
                     <Animate animation={'animate__fadeInUp animate__delay-4s'}>
                           <PhoneNumber />
                     </Animate>
                        </div>
                     <LinksSocialMedia
                        component={<IconFaceBook beige={true} />}
                        text={'facebook'}
                     />
                     <LinksSocialMedia
                        component={<IconInstagram beige={true} />}
                        text={'instagram'}
                     />
                  </BlockSocialMedia>{' '}
               </Animate>
            </section>
         </article>
      </main>
   )
}
