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

const Navigation = ({navRef, onClose}) => {


    return (
        <nav className="navigation" ref={navRef}>
            <div className="navigationWrapper">
                <NavLink onClick={onClose} className="navbar-brand" to={"/bienvenus"}><MainLogo/></NavLink>
                <div onClick={onClose} className={'nav-btn-empty'}>
                    <IconNavLocalisation/><NavLink className="" to={"/nous-trouver"}>Nous<br/>Trouver</NavLink>
                </div>
                <div onClick={onClose} className={'nav-btn-full'}>
                    <IconNavLaCarte/><NavLink className="" to={"/la-carte"}>Notre<br/>Carte</NavLink>
                </div>
                <div onClick={onClose} className={'nav-btn-empty'}>
                    <NavLink className="" aria-current="page" to={"/bienvenus"}>La Pizza<br/>Du
                        Mois</NavLink>
                </div>
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
