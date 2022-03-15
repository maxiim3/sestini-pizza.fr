import React, {useEffect, useState} from 'react';
import Data from '../../data/items.json';
import ItemsCard from './itemsCard';
import Filter from './filter';

const ItemsList = ({index}) => {

    const [data, setData] = useState([]);
    const [selectedFilterElement, setSelectedFilterElement] = useState('');

    useEffect(() => {
        if (index === '') {
            setData(Data[0])
        } else {
            setData(Data[index])
        }
    }, [data, index])

    const handleFilterButtonChange = (e) => {
        setSelectedFilterElement(e.target.value);
    }
    return (
        <div>
            {<Filter filterElementList={["base rouge", "base blanche", "base special", "sans viande", "avec poisson"]}
                     handleFilterButtonChange={handleFilterButtonChange}/>}
            {<Filter filterElementList={["base rouge", "base blanche", "base special", "sans viande", "avec poisson"]}
                     handleFilterButtonChange={handleFilterButtonChange}/>}
            {data.filter(categories => categories.base.includes(selectedFilterElement) || categories.particularity.includes(selectedFilterElement)).map(
                categories =>
                    <div key={categories.id}>
                        {<ItemsCard items={categories}/>}
                    </div>
            )}
        </div>
    );
};

export default ItemsList;