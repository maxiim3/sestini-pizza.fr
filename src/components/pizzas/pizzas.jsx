import React, {useState} from 'react';
import Data from "../../data/pizzas.json";
import button from "bootstrap/js/src/button";

export const Pizzas = () => {
        let datas = {...Data}
        const [products, setProducts] = useState(datas.pizzas)
        const [filteredProducts, setFilteredProducts] = useState(products);
        const [categories, setCategories] = useState('pizzas')
        const [baseRouge, setBaseRouge] = useState(true);
        const [baseBlanche, setBaseBlanche] = useState(true);
        const [sansBase, setSansBase] = useState(true);
        const [avecPoisson, setAvecPoisson] = useState(true);
        const [avecViande, setAvecViande] = useState(true);
        const [boissonSoft, setBoissonSoft] = useState(true);
        const [boissonAlcool, setBoissonAlcool] = useState(true);
        const [boissonChaudes, setBoissonChaudes] = useState(true);

        const filtre = {
            pizzas: [
                {label: "Base Tomate", key: 'baseRouge', state: baseRouge, setState: setBaseRouge},
                {label: "Base Crème", key: 'baseBlanche', state: baseBlanche, setState: setBaseBlanche},
                {label: "Sans Base", key: 'sansBase', state: sansBase, setState: setSansBase},
                {label: "Viande", key: 'avecViande', state: avecViande, setState: setAvecViande},
                {label: "Poisson", key: 'avecPoisson', state: avecPoisson, setState: setAvecPoisson}
            ],
            boissons: [
                {label: "Boissons Chaudes", state: boissonChaudes, setState: setBoissonChaudes},
                {label: "Boissons Soft", state: boissonSoft, setState: setBoissonSoft},
                {label: "Boissons Alcoolisées", state: boissonAlcool, setState: setBoissonAlcool},
            ],
        }
        const buttons = ["pizzas", "boissons", "desserts"]

        function handleCategorize(cat) {
            setCategories(cat)
            setProducts(datas[cat])
        }

        const activeFilters = () => {
            const actives = []
            filtre[categories].map(({state, label, key}) => state ? actives.push(label) : "")
            const first = actives.shift()
            let middle = actives
            if (middle.length === 1) return first
            else {
            const last = actives.pop()
                middle.pop()
                middle.unshift()
                return `${first}, ${actives.map(act => ` ${act}`)} et ${last}.`
            }
        }


        return (
            <>
                <h1>Notre Carte</h1>
                <ul>
                    {buttons.map(cat => (
                        <li>
                            <button onClick={() => handleCategorize(cat)}>
                                Nos {cat.toUpperCase()}
                            </button>
                        </li>
                    ))}
                </ul>
                <h2>Nos {categories.toUpperCase()}</h2>
                <div>
                    {(filtre[categories]) ? filtre[categories].map(f => (
                        <button
                            onClick={() => handleStatesFilters(f)}>{f.state ? `Avec ${f.label}` : `Sans ${f.label}`}</button>)) : ""}
                </div>
                <ul>
                    {filteredProducts.map(p => (
                        <li>{p['nom'] || p['title']}</li>

                    ))
                    }

                </ul>


            </>
        );
    }
;

