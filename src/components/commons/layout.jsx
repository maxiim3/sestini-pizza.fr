import React from 'react'

export const Layout = ({ title, children }) => {
   return (
      <article
         className={
            'relative min-h-screen w-full overflow-x-hidden bg-dark-grey text-beige sm:h-auto'
         }>
         <header
            className={
               'absolute top-12 left-12 z-30 origin-top-right -translate-x-full -rotate-90 transform md:top-32'
            }>
            <h1 className={'text-2xl uppercase tracking-widest'}>{title}</h1>
         </header>
         <div className={'relative md:top-32'}>{children}</div>
      </article>
   )
}
