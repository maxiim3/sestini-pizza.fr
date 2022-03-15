import React, {useEffect, useState} from 'react';
import {Link, Route} from "react-router-dom";
import {MainLogo, MainLogoMinify, Basilic, IconFaceBook, IconInstagram, IconLogoWithoutText} from '../commons/icons'
import {Adresse, Email, PhoneNumber} from "../commons/informations";
import {Footer} from "../../footer";

const Home = () => {


    return (
        <div className={'page home-page'}>

            <section className="home-page home-page--section-home">
                <header>
                    <MainLogoMinify beige={true}/>
                    <MainLogo/>
                    <Basilic/>
                </header>
                <main>
                    <button><Link to={'/nous-trouver'}>Nous Trouver</Link></button>
                    <button><Link to={'/la-carte'}>Notre Carte</Link></button>
                    <button><a href={'#pizza-du-mois'}>La Pizza du Mois</a></button>
                </main>
                <footer>
                    <PhoneNumber/>
                    <Email/>
                    <IconFaceBook beige={true}/>
                    <IconInstagram beige={true}/>
                    <img src={"./img/pizza-half.png"} alt="Photo de l'une de nos délicieuses pizza"/>
                </footer>
            </section>
            <section id={'pizza-du-mois'} className="home-page home-page--section-pizza-du-mois">
                <main className="card">
                    <h2>La Maestrala</h2>
                    <ul>
                        <li>Sauce Tomate,</li>
                        <li>Mozzarella Fleur de Lait,</li>
                        <li>Basilic frais,</li>
                        <li>Filet d’Huile d’olive</li>
                    </ul>
                    <img src={"./img/pizza.jpg"} alt="Photo de l'une de nos délicieuses pizza"/>
                </main>
                <footer>
                    <button><a href={'#about'}>À Propos</a></button>
                </footer>
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
        </div>

    );
};

export default Home;