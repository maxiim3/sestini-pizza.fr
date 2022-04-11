import React from 'react'
import { RenderProductsLayout } from '../renderProducts'

export const RenderDesserts = ({ desserts }) => {
   return desserts.map(dessert => (
      <RenderProductsLayout product={dessert}/>
   ))
}
