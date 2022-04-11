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
   //endregion

   return (
      <Layout title={'Notre Carte'} Component={<IconTitleLaCarte />}>
         <section className="w-auto h-auto flex flex-column  gap-4 justify-center align-items-center">
            <Header title={'Horaires'}>
               <IconHandClick />
            </Header>
            <RenderButtons activeCategory={categories} onChange={handleCategorize} />
         </section>

         <section className="w-auto h-max flex flex-column  gap-2 justify-center align-items-center">
            <Header title={`Nos ${categories[0].toUpperCase() + categories.slice(1)}`}></Header>
            <div className={'h-full w-full animate__animated animate__fadeIn'}>
               <article className={'flex flex-column align-items-center gap-y-6 m-12'}>
                  {categories === 'pizzas' ? <RenderPizzas pizzas={filteredProducts} /> : null}
                  {categories === 'boissons' ? <RenderBoissons boissons={filteredProducts} /> : null}
                  {categories === 'desserts' ? <RenderDesserts desserts={filteredProducts} /> : null}

               </article>
            </div>
         </section>
      </Layout>
   )
}
