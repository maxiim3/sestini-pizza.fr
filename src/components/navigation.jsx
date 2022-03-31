import React from 'react';
import {NavLink} from "react-router-dom";
import {
    MainLogo,
    IconFaceBook,
    IconInstagram,
    IconCloseNav,
    IconNavLaCarte,
    IconNavLocalisation
} from './commons/icons';
import {PhoneNumber} from './commons/informations'
import {Button} from "./commons/button";

const Navigation = ({navRef, onClose}) => {


    return (
        <nav className="navigation z-20" ref={navRef}>
            <div className="navigationWrapper">
                <NavLink onClick={onClose} className="navbar-brand" to={"/bienvenus"}><MainLogo/></NavLink>
                <Button onClick={onClose} nav ={true} activeClass={false}>
                    <IconNavLocalisation/><NavLink className="" to={"/nous-trouver"}>Nous<br/>Trouver</NavLink>
                </Button>
                <Button onClick={onClose} nav={true} activeClass={true}>
                    <IconNavLaCarte/><NavLink className="" to={"/la-carte"}>Notre<br/>Carte</NavLink>
                </Button>
                <Button onClick={onClose} nav={true} activeClass={false}>
                    <NavLink className="" aria-current="page" to={"/bienvenus"}>La Pizza<br/>Du
                        Mois</NavLink>
                </Button>
                <div onClick={onClose} onClick={() => onClose()}> <IconCloseNav/></div>
                <div className="social-grid">
                    <PhoneNumber/>
                    <IconFaceBook beige={true}/>
                    <IconInstagram beige={true}/>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
