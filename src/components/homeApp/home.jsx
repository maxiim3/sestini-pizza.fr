import React from 'react';
import {Link, NavLink, Route} from "react-router-dom";
import PizzaDuMois from '../../data/pizzaOfMonth.json'
import {
    MainLogo,
    MainLogoMinify,
    Basilic,
    IconFaceBook,
    IconInstagram,
    IconLogoWithoutText,
    IconNavLocalisation, IconNavLaCarte
} from '../commons/icons'
import {Adresse, Email, PhoneNumber} from "../commons/informations";
import {Footer} from "../../footer";
import {PizzaCard} from "../laCarte/productSection/pizza/pizzaCard";

const Home = () => {

    return (
        <div className={'page home-page'}>
            <Basilic/>
            <section className="home-page home-page--section-home">
                <NavLink className="grid-heroTop" to={"/bienvenus"}><MainLogo/></NavLink>
                <div className={'nav-btn-empty grid-btnLeft'}>
                    <IconNavLocalisation/><NavLink className="" to={"/nous-trouver"}>Nous<br/>Trouver</NavLink>
                </div>
                <div className={'nav-btn-full grid-btnCenter'}>
                    <IconNavLaCarte/><NavLink className="" to={"/la-carte"}>Notre<br/>Carte</NavLink>
                </div>
                <div className={'nav-btn-empty grid-btnRight'}>
                    <NavLink className="" aria-current="page" to={"/bienvenus"}>La Pizza<br/>Du
                        Mois</NavLink>
                </div>
                <div className={'social-grid'}>
                    <PhoneNumber/>
                    <IconFaceBook beige={true}/>
                    <IconInstagram beige={true}/>
                </div>
                <img className={'home-static-pizza'} src={"./img/pizza-half.png"} alt="Photo de l'une de nos délicieuses pizza"/>
            </section>
            <section id={'pizza-du-mois'} className="home-page home-page--section-pizza-du-mois">
                <main className="card">
                <PizzaCard
                    product={PizzaDuMois}
                />
                </main>
                    <button><a href={'#about'}>À Propos</a></button>
            </section>
            <section id="about" className="home-page home-page-section-about">
                <aside>
                    <ul>
                        <li>La pizza,</li>
                        <li>Un art,</li>
                        <li>Un savoir-faire,</li>
                        <li>Une passion</li>
                    </ul>
                </aside>
                <main>
                    <img src={"./img/pizzaiolo-devant-four.png"} alt="Photo de l'une de nos délicieuses pizza"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus nunc lectus congue sed
                        posuere. Accumsan vulputate tincidunt pharetra facilisis. Varius fermentum duis morbi quis felis
                        turpis ante in. Vel donec nulla at sit non justo convallis eu.</p>
                </main>
                <footer>
                    <button><a href={'#'}>Haut de la page</a></button>
                </footer>
            </section>
            <Footer/>
        </div>

    );
};

export default Home;