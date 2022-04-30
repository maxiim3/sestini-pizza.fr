import React from 'react'

export const GoldifyWords = ({ children }) => {
   return <span className={'text-gold'}>{children}</span>
}

export const UnderlineWords = ({ children }) => {
   return <span className={'underline underline-offset-2'}>{children}</span>
}

export const AddPlural = txt => {
   return txt
      .split(' ')
      .map(word => `${word}s`)
      .join(' ')
}
