import React, { useState } from 'react'
import Data from '../../data/pizzas.json'
import PizzaDuMois from '../../data/pizzaOfMonth.json'
import 'animate.css'
import { RenderButtons } from './categorySection/renderButtons'
import { IconHandClick, IconTitleLaCarte } from '../commons/icons'
import { Layout } from '../commons/layout'
import { Header } from '../commons/header'
import { RenderPizzas } from './productSection/pizza/renderPizzas'
import { RenderBoissons } from './productSection/other/renderBoissons'
import { RenderDesserts } from './productSection/other/renderDesserts'

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
      supplements: [...Data['suppléments']],
   }

   const [products] = useState(allDatas.pizzas)
   const [categories, setCategories] = useState('pizzas')
   const [filteredProducts, setFilteredProducts] = useState(products)

   /**
    * When click on Button Category,
    * (1) Set the Active Category
    * (2) Filter the Datas from this Category
    * @param cat: {string} for categorySection
    */
   function handleCategorize(cat) {
      setCategories(cat) //(1)
      setFilteredProducts(allDatas[cat]) //(2)
   }

   //region Hide inactif
   //
   // /**
   //  * Change le filtre actif
   //  */
   // const handleFilters = id => {
   //    const data = products.filter(p => p.base.key === id)
   //    setActiveBase(id)
   //    setFilteredProducts([...data])
   // }
   //
   // /**
   //  * Incremente iteration, renvoie son modulo
   //  */
   // const handleIteration = () => {
   //    iteration++
   //    setIteration(iteration % 4)
   // }
   //endregioni

   return (
      <Layout title={'Notre Carte'} Component={<IconTitleLaCarte />}>
         <section className="flex h-auto w-auto flex-col  items-center justify-center gap-4">
            <Header title={'Horaires'}>
               <IconHandClick />
            </Header>
            <RenderButtons activeCategory={categories} onChange={handleCategorize} />
         </section>

         <section className="flex h-max w-auto flex-col  items-center justify-center gap-2">
            <Header title={`Nos ${categories[0].toUpperCase() + categories.slice(1)}`} />
            <div className={'animate__animated animate__fadeIn h-full w-full'}>
               <article className={'align-items-center m-12 flex flex-col gap-y-6'}>
                  {categories === 'pizzas' ? <RenderPizzas pizzas={filteredProducts} /> : null}
                  {categories === 'boissons' ? (
                     <RenderBoissons boissons={filteredProducts} />
                  ) : null}
                  {categories === 'desserts' ? (
                     <RenderDesserts desserts={filteredProducts} />
                  ) : null}
               </article>
            </div>
         </section>
      </Layout>
   )
}
