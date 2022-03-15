import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        // <ul>
        //     <li><Link to="/bienvenus">Accueil</Link></li>
        //     <li><Link to="/la-carte">La Carte</Link></li>
        //     <li><Link to="/nous-trouver">Nous Trouver</Link></li>
        // </ul>

        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/bienvenus"}>Sestini Pizza</NavLink>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to={"/bienvenus"}>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/la-carte"}>La Carte</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/nous-trouver"}>Nous Trouver</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
