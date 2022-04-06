import React from 'react';
import info from "../../data/informations.json"

export const PhoneNumber = () => {
    return (
        <span className={'info-tel'}>{info[0].phoneNumber}</span>
    );
};

export const Email = () => {
    return(
        <span className={'info-mail'}>{info[0].mail}</span>
    )
}

export const Adresse = () => {
    return (
        <span className={'info-address'}>{info[0].adresse}</span>
    )
}