import React, { useState } from 'react'
import Data from '../../data/pizzas.json'
import PizzaDuMois from '../../data/pizzaOfMonth.json'
import 'animate.css'
import { RenderButtons } from './categorySection/renderButtons'
import { IconHandClick } from '../commons/icons'
import { Layout } from '../commons/layout'
import { Header } from '../commons/header'
import { RenderPizzas } from './productSection/pizza/renderPizzas'
import { RenderProductsLayout } from './productSection/renderProducts'

/**
 * La carte App
 * @return {JSX.Element}
 * @constructor
 */
export const Products = () => {
   const allDatas = {
      pizzas: [PizzaDuMois, ...Data['pizzas']],
      boissons: [...Data['boissons']],
      desserts: [...Data['desserts']],
      supplements: [...Data['supplements']],
   }

   const [products] = useState(allDatas.pizzas)
   const [activeCategory, setActiveCategory] = useState('pizzas')
   const [filteredProducts, setFilteredProducts] = useState(products)

   /**
    * When click on Button Category,
    * (1) Set the Active Category
    * (2) Filter the Datas from this Category
    * @param cat: {string} for categorySection
    */
   function handleCategorize(cat) {
      setActiveCategory(cat) //(1)
      setFilteredProducts(allDatas[cat]) //(2)
   }

   return (
      <Layout title={'Notre Carte'}>
         <section className="flex h-auto w-auto flex-col  items-center justify-center gap-4">
            <Header title={'Horaires'}>
               <IconHandClick />
            </Header>
            <RenderButtons activeCategory={activeCategory} onChange={handleCategorize} />
         </section>

         <section className="flex h-max w-auto flex-col  items-center justify-center gap-12">
            <Header title={`Nos ${activeCategory[0].toUpperCase() + activeCategory.slice(1)}`} />
            <div
               className={
                  'animate__animated animate__fadeIn h-full w-screen bg-beige text-dark-grey md:max-w-6xl md:rounded-xl'
               }>
               <article className={'mx-auto p-12'}>
                  <ul className={'my-4'}>
                     {activeCategory === 'pizzas' ? (
                        <RenderPizzas
                           pizzas={filteredProducts}
                           supplements={allDatas.supplements}
                        />
                     ) : (
                        filteredProducts.map(product => <RenderProductsLayout product={product} />)
                     )}
                  </ul>
               </article>
            </div>
         </section>
      </Layout>
   )
}
