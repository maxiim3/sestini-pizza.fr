import React from 'react'

export const Layout = ({ title, Component, children }) => {
   return (
      <article
         className={
            'relative min-h-screen w-full overflow-x-hidden bg-dark-grey text-beige sm:h-auto md:top-24'
         }>
         <header
            className={
               'align-items-center fixed flex w-[44ch] -translate-x-44 translate-y-8 -rotate-90 transform justify-end '
            }>
            <h1 className={'w-fit break-after-auto break-normal text-base uppercase'}>{title}</h1>
            <span className="w-64 pl-6">{Component}</span>
         </header>
         {children}
      </article>
   )
}
