import React from 'react'

export const RenderProductsLayout = ({product }) => {
    return (
       <div className={'ml-1 mr-0 min-w-full sm:max-w-screen-sm'}>
          <ul className={'my-4'}>
             <li className={'flex flex-row flex-nowrap gap-x-8'} key={`${product._id}_${product.nom}`}>
                <h3 className={'inline-block align-self-start text-3xl font-semibold pb-1'}>
                   {product.nom}
                </h3>
                <span className="flex-grow-1 content-[''] border-t-2 border-beige/40 w-max mx-4 transform translate-y-4" />
                <p className={'inline-block align-self-end text-2xl'}> {product.prix}€</p>
             </li>
          </ul>
       </div>
    )
}
