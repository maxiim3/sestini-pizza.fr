import React, {useState} from 'react';
import button from "bootstrap/js/src/button";
import {IconFilter} from "../../commons/icons";

export const RenderFilterSection = ({categories, onChangeFilter, onChangeType, data, iteration}) => {

    /**
     * Retourne les Labesl et key des bases Pizzas
     * @param key
     * @return {*[]}
     */
    const getData = key => {
        const array = []
        data.pizzas.forEach(({base}) => array.push(base[key]))
        const newArray = new Set(array)
        return [...newArray]
    }

    if (categories === "pizzas")
        return (
            <>
                <div className="laCarte-page app-sub-title">
                    <IconFilter/> <span>------</span><h2>Filtres</h2>
                    <span>------</span>
                </div>
                <div>
                    {getData("label").map(d => (
                        <button
                            onClick={() => onChangeFilter(getData("key")[getData("label").indexOf(d)])}
                        >
                            {d}
                        </button>
                    ))}
                    <button
                        onClick={() => onChangeType("avecViande")}
                    >
                        {(iteration === 0)
                            ? "Toutes les pizzas"
                            : (iteration === 1)
                                ? "Pizzas Végétariennes"
                                : (iteration === 2)
                                    ? "Pizzas avec Poisson"
                                    : "100% Viande"
                        }
                    </button>
                </div>
           </>
        )
    return <> </>
};
