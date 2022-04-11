import React from 'react'
import { RenderProductsLayout } from '../renderProducts'

export const RenderBoissons = ({ boissons }) => {
   return boissons.map(boisson => (
      <RenderProductsLayout product={boisson}/>
   ))
}
