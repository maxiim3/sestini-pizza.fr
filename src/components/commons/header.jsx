import React from 'react'
import 'animate.css'

export const Header = ({ title, component }) => {
   return (
      <header className="justify-self-center text-xl tracking-wide mt-4 animate__animated animate__fadeIn">
         {component}
         <span className={'inline-block w-16 mx-4 border-t-[0.5px] transform -translate-y-2'} />
         <h2 className={'text-3xl inline w-fit my-1 p-0'}>{title}</h2>
         <span className={'inline-block w-16 mx-4 border-t-[0.5px] transform -translate-y-2'} />
      </header>
   )
}
