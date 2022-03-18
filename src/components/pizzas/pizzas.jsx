import React, {useState} from 'react';
import Data from "../../data/pizzas.json";
import button from "bootstrap/js/src/button";
import {RenderButtons} from "./categorySection/renderButtons";
import {IconFilter, IconHandClick, IconNavLaCarte, IconSwap} from "../commons/icons";
import {RenderProducts} from "./products/renderProducts";
import {RenderFilterSection} from "./filterSection/renderFiltersSection";

export const Pizzas = () => {
        let datas = {...Data}
        const [products, setProducts] = useState(datas.pizzas)
        const [filteredProducts, setFilteredProducts] = useState(products);
        const [categories, setCategories] = useState('pizzas')



        /**
         * When click on Button Category,
         * (1) Set the Active Category
         * (2) Filter the Datas from this Category
         * @param cat: {string} for categorySection
         */
        function handleCategorize(cat) {
            setCategories(cat) //(1)
            setFilteredProducts(datas[cat]) //(2)
        }

        const handleFilters = ({label, state, setState, key}) => {
            setState(!state)
            console.clear()

            const data = products.filter(d => (
                    // d[key] === state
                    d[key]
                )
            )
            setFilteredProducts([...data])
            console.log(data)
        }


        return (
            <main className={'page laCarte-page'}>
                <section className="laCarte-page app-title">
                    <h1>Notre Carte</h1>
                    {/*Faire un titlee global dont la valeur change avec le routing*/}
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
                <RenderFilterSection
                    categories={categories}
                    onChangeFilter={handleFilters}
                />
                <section className="laCarte-page app-main">
                    <div className="laCarte-page app-sub-title">
                        <IconSwap/> <span>------</span><h2>Nos {categories[0].toUpperCase() + categories.slice(1,)}</h2>
                        <span>------</span>
                    </div>
                    <RenderProducts
                        datas={filteredProducts}
                        categories={categories}
                    />
                </section>
            </main>
        );
    }
;

