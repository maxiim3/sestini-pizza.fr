import React from 'react'

export const RenderBoissons = ({ boissons }) => {
   return boissons.map(boisson => (
      <li
         className={"flex flex-nowrap gap-x-8"}
         key={`${boisson._id}_${boisson.nom}`}>
         <p className={'inline-block align-self-start text-2xl'}>{boisson.nom}</p>
         <span className="flex-grow-1 content-[''] border-t-[0.5px] border-beige/40 w-max mx-4 transform translate-y-3" />
         <p className={'inline-block align-self-end text-3xl'}> {boisson.prix}€</p>
      </li>
   ))
}
