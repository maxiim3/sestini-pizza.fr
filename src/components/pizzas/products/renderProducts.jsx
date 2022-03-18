import React from 'react';
import {Products} from "./products";

export const RenderProducts = ({datas, categories}) => {

    return (
        <div>
            <ul>
                {datas.map(p =>
                        <li key={`${p._id}_${p.nom}`}>
                            {p.nom} {p.prix}
                            <Products
                            product={p}
                            categorySection={categories}
                            />
                        </li>
                )}
            </ul>
        </div>
    );
};
