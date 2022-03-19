import React, {useEffect, useState} from 'react';
import Day from "./day";
import {getDays} from "./jours";

export const NousTrouver = ({location}) => {
    const index = new Date().getDay() - 1
    const defaultDay = (getDays()[index])
    const [activeDay, setActiveDay] = useState(defaultDay)

    const handleDayChange = (day) => {
        const ouverture = [...getDays()]
        setActiveDay(ouverture.filter(j => (
            (j._id === day._id)
        ))[0])
    }
    const getActiveDay = (key) => {
        return activeDay[key]
    }
    return (
        <div>
            <h1>Find Us</h1>
            <ul className="nav nav-tabs">
                {
                    getDays().map(j => (
                        <Day
                            day={j}
                            onChange={handleDayChange}
                        />
                    ))
                }
            </ul>
            {getActiveDay('estOuvert')
                    ? (<div>
                            <h2>Nous sommes ouvert le {getActiveDay('jour')}</h2>
                            <h3>{getActiveDay('horaires')}</h3>
                    <div>
                            <img style={{width: '90vw'}} src={getActiveDay('url')} alt="Carte de notre position"/>
                        </div>
                        </div>)
                    : (<h2>Nous sommes fermés le {getActiveDay('jour')}</h2>)
            }

        </div>
    );
};

