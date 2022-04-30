import React from 'react'
import * as PropTypes from 'prop-types'
import { IconFaceBook, IconInstagram } from '../Components/icons'
import { PhoneNumber } from '../Utils/informations'
import info from '../Data/informations.json'
import '../../node_modules/animate.css/animate.css'

function NeoMorphismBTN({ children, link }) {
   return (
      <div
         className={
            ' neoMorphism grid h-24 w-max cursor-pointer place-content-center rounded-full font-main text-2xl uppercase  text-beige'
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
   return <div className={`animate__animated m-0 border-0 p-0 ${animation}`}>{children}</div>
}
export const BlockSocialMedia = ({ children }) => {
   return <div className={'grid grid-cols-2 grid-rows-2 gap-x-2'}>{children}</div>
}

export const LinksSocialMedia = ({ component, text }) => {
   return (
      <div className={'col-span-1 row-start-2'}>
         <Animate animation={'animate__fadeInDown animate__delay-4s'}>
            <a
               href={info[0][text]}
               target="_blank"
               rel="noopener"
               className={
                  'flex-column align-center block flex transform justify-center hover:scale-105 hover:text-beige-light'
               }>
               <i className={'mx-auto'}>{component}</i>
               <p className={'text-center text-lg text-beige'}>{text}</p>
            </a>
         </Animate>
      </div>
   )
}
export const LandingPage = () => {
   return (
      <main className={'m-0 h-screen w-screen overflow-hidden bg-dark-grey p-0'}>
         {/*Scrolling Component*/}
         <article className="z-10 h-full w-screen">
            <Animate animation={'animate__fadeIn animate__slower'}>
               <header className="col-span-full grid h-96 place-content-center" to={'/bienvenus'}>
                  {/*<MainLogo />*/}
                  <img src={'./img/logo-groupe.png'} alt="Logo Sestini Pizza" />
               </header>
            </Animate>

            <section
               className={'flex-column align-items-center flex h-3/6 w-full  justify-around '}>
               <Animate animation={'animate__fadeInDown'}>
                  <Animate animation={'animate__flash animate__delay-2s'}>
                     <div className={'mx-auto text-5xl text-beige'}>
                        <h2>Ouverture le 4 mai</h2>
                        {/*<div className={'w-96 border-b '} />*/}
                     </div>
                  </Animate>
               </Animate>
               <Animate animation={'animate__fadeIn animate__slow animate__delay-3s'}>
                  <div className={'text-3xl text-beige-light '}>
                     <h3 className={''}>Retrouvez nous sur les réseaux sociaux</h3>
                  </div>
               </Animate>
               <Animate animation={'animate__fadeIn animate__slow animate__delay-4s'}>
                  {' '}
                  <BlockSocialMedia>
                     <div
                        className={'align-self-center col-span-2 text-center text-2xl text-beige'}>
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
