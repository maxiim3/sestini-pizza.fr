import React, {useStates} from 'react';
import Data from "../../data/pizzas.json";
import PizzaDuMois from "../../data/pizzaOfMonth.json";
import {RenderButtons} from "./categorySection/renderButtons";
import {IconHandClick, IconNavLaCarte, IconSwap} from "../commons/icons";
import {RenderProducts} from "./productSection/renderProducts";
import {RenderFilterSection} from "./filterSection/renderFiltersSection";

/**
 * La carte App
 * @return {JSX.Element}
 * @constructor
 */
export const Pizzas = () => {
        const allDatas = {
            pizzas: [PizzaDuMois, ...Data['pizzas']],
            boissons: [...Data["boissons"]],
            desserts: [...Data["desserts"]],
            supplements: [...Data["suppléments"]]
        }

        const [products] = useState(allDatas.pizzas)
        const [categories, setCategories] = useState('pizzas')
        const [filteredProducts, setFilteredProducts] = useState(products);
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
        const handleFilters = (id) => {
            const data = products.filter(p => (
                    (p.base.key === id)
                )
            )
            setFilteredProducts([...data])
            console.log(id)
        }

        /**
         * Incremente iteration, renvoie son modulo
         */
        const handleIteration = () => {
            iteration++
            setIteration(iteration % 4)
        }

        return (
            <main className={'page laCarte-page'}>
                <section className="laCarte-page app-title">
                    <h1>Notre Carte</h1>
                    {/*Faire un title global dont la valeur change avec le routing*/}
                    <IconNavLaCarte/>
                </section>
                <section className="laCarte-page categories">
                    <div className="laCarte-page app-sub-title">
                        <IconHandClick/> <span>------</span><h2>Catégories</h2><span>------</span>
                    </div>
                    <RenderButtons
                        onChange={handleCategorize}
                    />
                </section>
                <section className="laCarte-page filtres">
                    <RenderFilterSection
                        categories={categories}
                        onChangeFilter={handleFilters}
                        data={allDatas}
                        onChangeType={handleIteration}
                        iteration={iteration}
                    />
                </section>
                <section className="app-main">
                    <div className="app-sub-title">
                        <IconSwap/> <span>------</span><h2>Nos {categories[0].toUpperCase() + categories.slice(1,)}</h2>
                        <span>------</span>
                    </div>
                    <RenderProducts
                        products={filteredProducts}
                        categories={categories}
                        iteration={iteration}
                    />
                </section>
            </main>
        );
    }
;

