import React from 'react'

export const Layout = ({title, Component, children}) => {
   return (
      <article className={'min-h-screen sm:h-auto overflow-x-hidden w-full bg-dark-grey text-beige'}>
         <header className={"fixed flex justify-end align-items-center w-[44ch] transform -translate-x-44 translate-y-8 -rotate-90 "}>
            <h1 className={'text-base break-normal w-fit uppercase break-after-auto'}>{title}</h1>
            <i className="w-64 pl-6">
               {Component}
            </i>
         </header>
         {children}
      </article>
   )
}

