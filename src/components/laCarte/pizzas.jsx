import React, { useState } from 'react'
import Data from '../../data/pizzas.json'
import PizzaDuMois from '../../data/pizzaOfMonth.json'
import { RenderButtons } from './categorySection/renderButtons'
import { IconHandClick, IconNavLaCarte, IconSwap, IconTitleLaCarte } from '../commons/icons'
import { RenderProducts } from './productSection/renderProducts'
import { RenderFilterSection } from './filterSection/renderFiltersSection'
import { Layout } from '../commons/layout'
import { Header } from '../commons/header'
import 'animate.css'

/**
 * La carte App
 * @return {JSX.Element}
 * @constructor
 */
export const Pizzas = () => {
   const allDatas = {
      pizzas: [PizzaDuMois, ...Data['pizzas']],
      boissons: [...Data['boissons']],
      desserts: [...Data['desserts']],
      supplements: [...Data['suppléments']],
   }

   const [products] = useState(allDatas.pizzas)
   const [categories, setCategories] = useState('pizzas')
   const [activeBase, setActiveBase] = useState()
   const [filteredProducts, setFilteredProducts] = useState(products)
   let [iteration, setIteration] = useState(0)

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

   /**
    * Change le filtre actif
    */
   const handleFilters = id => {
      const data = products.filter(p => p.base.key === id)
      setActiveBase(id)
      setFilteredProducts([...data])
   }

   /**
    * Incremente iteration, renvoie son modulo
    */
   const handleIteration = () => {
      iteration++
      setIteration(iteration % 4)
   }

   return (
      <Layout title={'Notre Carte'} Component={<IconTitleLaCarte />}>
         <section className="w-auto h-auto flex flex-column  gap-4 justify-center align-items-center">
            <Header title={'Horaires'}>
               <IconHandClick />
            </Header>
            <RenderButtons activeCategory={categories} onChange={handleCategorize} />
         </section>
         <section className="w-auto h-auto flex flex-column  gap-2 justify-center align-items-center">
            <RenderFilterSection
               categories={categories}
               onChangeFilter={handleFilters}
               data={allDatas}
               onChangeType={handleIteration}
               iteration={iteration}
               base={activeBase}
            />
         </section>
         <section className="w-auto h-max flex flex-column  gap-2 justify-center align-items-center">
            <Header title={`Nos ${categories[0].toUpperCase() + categories.slice(1)}`}>
               {categories === 'pizzas' ? <IconSwap /> : null}
            </Header>
            <RenderProducts
               products={filteredProducts}
               categories={categories}
               iteration={iteration}
            />
         </section>
      </Layout>
   )
}
