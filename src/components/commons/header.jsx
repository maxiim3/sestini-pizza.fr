import React from 'react'
import 'animate.css'
import { LineTitleWrapper } from './lineTitleWrapper'

export const Header = ({ title, component }) => {
   return (
      <header className="justify-self-center text-xl tracking-wide mt-4 animate__animated animate__fadeIn">
         {component}
         <LineTitleWrapper>
            <h2 className={'text-3xl inline w-fit my-1 p-0'}>{title}</h2>
         </LineTitleWrapper>
      </header>
   )
}
