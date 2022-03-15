import React from 'react';
import {IconFaceBook, IconInstagram, IconLogoWithoutText} from "./components/commons/icons";
import {Adresse, Email, PhoneNumber} from "./components/commons/informations";

export const Footer = () => {
    return (
            <footer>
                <div><IconFaceBook beige={false}/>
                    <IconLogoWithoutText/>
                    <IconInstagram beige={false}/>
                </div>
                <div>
                    <p>Sestini <sup>&copy;</sup> 2022</p>
                    <Email/>
                    <PhoneNumber/>
                </div>
                <div>
                    <p>SARL 10558442XD</p>
                    <p>Au capital de 000000 &euro;</p>
                </div>
                <div>
                    <Adresse/>
                </div>
                <div><a>CGU</a></div>
            </footer>
    );
};

