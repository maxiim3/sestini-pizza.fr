import React, { useState } from 'react'
import Data from '../../Data/pizzas.json'
import PizzaDeSaison from '../../Data/pizzaDeSaison.json'
import '../../../node_modules/animate.css/animate.css'
import { RenderButtons } from './renderButtons'
import { IconHandClick } from '../../Components/icons'
import { Layout } from '../../Layout/layout'
import { Header } from '../../Layout/header'
import { RenderPizzas } from './renderPizzas'
import { RenderProductsLayout } from './renderProducts'
import { consoleMessage } from '../../Utils/consoleMessage'

/**
 * La carte Routes
 * @return {JSX.Element}
 * @constructor
 */
export const Products = () => {
   const allDatas = {
      pizzaDeSaison: PizzaDeSaison,
      pizzas: [...Data['pizzasWinter']],
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
         <section className="grid h-auto w-auto grid-flow-row place-content-center gap-4">
            <Header title={'Horaires'}>
               <IconHandClick />
            </Header>
            <RenderButtons
               activeCategory={activeCategory}
               onChange={handleCategorize}
            />
         </section>

         <section className="grid h-max w-auto place-content-center gap-12">
            <Header title={`Nos ${activeCategory[0].toUpperCase() + activeCategory.slice(1)}`} />
            <p
               className={
                  "animate__animated animate__fadeIn text-center font-['Cinzel'] text-3xl font-normal uppercase"
               }>
               Carte Automne-Hiver
            </p>
            <div
               className={
                  'animate__animated animate__slideInUp h-full w-screen bg-beige text-dark-grey md:max-w-6xl md:rounded-xl'
               }>
               <article className={'mx-auto p-12'}>
                  <ul className={'my-4'}>
                     {activeCategory === 'pizzas' ? (
                        <RenderPizzas
                           pizzaDeSaison={allDatas.pizzaDeSaison}
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
