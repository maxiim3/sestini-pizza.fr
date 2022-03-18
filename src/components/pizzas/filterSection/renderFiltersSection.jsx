import React, {useState} from 'react';
import button from "bootstrap/js/src/button";
import {IconFilter} from "../../commons/icons";

export const RenderFilterSection = ({categories, onChangeFilter}) => {
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
            {label: "Boissons Chaudes", key: "boissonChaudes", state: boissonChaudes, setState: setBoissonChaudes},
            {label: "Boissons Soft", key: "boissonSoft", state: boissonSoft, setState: setBoissonSoft},
            {label: "Boissons Alcoolisées", key: "boissonAlcool", state: boissonAlcool, setState: setBoissonAlcool},
        ],
    }

    if (filtre[categories])
        return (
            <section className="laCarte-page filtres">
                <div className="laCarte-page app-sub-title">
                    <IconFilter/> <span>------</span><h2>Filtres</h2><span>------</span>
                </div>
                <div>
                    {filtre[categories].map(f => (
                        <button
                            onClick={() => onChangeFilter(f)}>
                            {f.state ? `Avec ${f.label}` : `Sans ${f.label}`}
                        </button>
                    ))}
                </div>
            </section>
        )
    return (<></>)
            ;
};
