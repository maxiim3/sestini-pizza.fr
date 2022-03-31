import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import PizzaDuMois from "../../data/pizzaOfMonth.json";
import EvaluateTailwindFunctions from "tailwindcss/lib/lib/evaluateTailwindFunctions";
import {
  MainLogo,
  MainLogoMinify,
  Basilic,
  IconFaceBook,
  IconInstagram,
  IconLogoWithoutText,
  IconNavLocalisation,
  IconNavLaCarte,
} from "../commons/icons";
import { Adresse, Email, PhoneNumber } from "../commons/informations";
import { Footer } from "../../footer";
import { PizzaCard } from "../laCarte/productSection/pizza/pizzaCard";
import { RenderPizza } from "../laCarte/productSection/pizza/renderPizza";
import { Button } from "../commons/button";

const Home = () => {
  return (
    <main
      className={
        "flex flex-column flex-wrap justify-between items-center overflow-x-hidden m-0 p-0 bg-dark"
      }
    >
      <Basilic />
      <article className="h-screen w-screen z-10">
        <header
          className="col-span-full h-96 grid place-content-center"
          to={"/bienvenus"}
        >
          {/*<MainLogo />*/}
          <img src={"./img/logo-groupe.png"} alt="Logo Sestini Pizza" />
        </header>
        <section className={"grid grid-cols-5 grid-rows-4 gap-y-4 px-3 md:flex justify-between md:max-w-3xl"}>
          <div
            className={
              "col-start-1 col-end-3 row-start-1 justify-self-center self-center"
            }
          >
            <Button nav={true}>
                <IconNavLocalisation />
                <NavLink className="" to={"/nous-trouver"}>
                  <div className="text-xl text-yellow-100 uppercase font-semibold">Nous
                    <br/>
                    Trouver
                  </div>
                </NavLink>
            </Button>
          </div>
          <div className="col-start-2 col-end-5 row-start-2 justify-self-center self-center md:row-start-1">
            <Button nav={true} activeClass={true}>
                <IconNavLaCarte />
                <NavLink className="" to={"/la-carte"}>
                  <div className="text-xl text-dark uppercase font-semibold">Notre
                    <br/>
                    Carte
                  </div>
                </NavLink>
            </Button>
          </div>
          <div
            className={
              "col-start-4 col-end-6 row-start-3 justify-self-center self-center md:row-start-1"
            }
          >
            <Button nav={true}>
              <NavLink className="" aria-current="page" to={"/bienvenus"}>
                <div className="text-xl text-yellow-100 uppercase font-semibold">La Pizza
                  <br/>
                  Du Mois
                </div>
              </NavLink>
            </Button>
          </div>
          <div
            className={
              "col-start-4 col-span-2 row-start-4 md:row-start-1 md:order-first justify-self-center self-center grid grid-cols-2 grid-rows-2 gap-y-px gap-x-px"
            }
          >
            <div className="col-span-2 row-start-1 justify-self-center self-center text-yellow-100 text-xl"><PhoneNumber/></div>
            <div className="col-span-1 row-start-2 justify-self-center self-center"><IconFaceBook beige={true}/></div>
            <div className="col-span-1 row-start-2 justify-self-center self-center"> <IconInstagram beige={true}/></div>
          </div>
        </section>
      </article>
      <img
        className={"absolute -bottom-96 left-0"}
        src={"./img/pizza-half.png"}
        alt="Photo de l'une de nos délicieuses pizza"
      />
      <article id={"pizza-du-mois"} className="z-10">
        <div className="">
          <div className="title">
            <h3>{PizzaDuMois.nom}</h3>
          </div>
          <div className="">
            <p>
              <strong>Ingrédients: </strong>
              {PizzaDuMois.base.label} {PizzaDuMois.ingredients.join(", ")}
            </p>
            {PizzaDuMois.afterCook !== null ? (
              <p>
                <strong>Après Cuisson</strong>:{" "}
                {PizzaDuMois.afterCook.join(", ")}
              </p>
            ) : null}
          </div>
          <div
            className={
              ""
              // "flex flex-wrap justify-center"
            }
          >
            <img
              className={
                ""
                // "max-w-screen-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
              }
              src={PizzaDuMois.url}
              alt={`Photo de notre pizza ${PizzaDuMois.nom}`}
            />
          </div>
          <div className="price font-extrabold text-3xl accent-blue-50">
            <p>{PizzaDuMois.prix}€</p>
          </div>
        </div>
        <div className=""></div>

        <button>
          <a href={"#about"}>À Propos</a>
        </button>
      </article>
      <article id="about" className="">
        <aside>
          <ul>
            <li>La pizza,</li>
            <li>Un art,</li>
            <li>Un savoir-faire,</li>
            <li>Une passion</li>
          </ul>
        </aside>
        <div
          className={
            ""
            // "md:grid grid-cols-12 gap-5"
          }
        >
          <img
            className={
              "" +
              // "hidden sm:block md:block md:col-start-6 md:col-span-5 rounded-xl " +
              ""
            }
            src={
              "https://images.unsplash.com/photo-1631540223537-8f2d49a4ad9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
            alt="Photo de l'une de nos délicieuses pizza"
          />{" "}
          <img
            className={
              "" +
              // 'w-full max-w-xl col-start-1 col-end-3 rounded-xl' +
              ""
            }
            src={
              "https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
            }
            alt="Photo de l'une de nos délicieuses pizza"
          />{" "}
          <p className={"col-start-5 col-span-4"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            netus nunc lectus congue sed posuere. Accumsan vulputate tincidunt
            pharetra facilisis. Varius fermentum duis morbi quis felis turpis
            ante in. Vel donec nulla at sit non justo convallis eu.
          </p>
          <img
            className={
              "" +
              // 'col-start-7 col-end-12 rounded-xl' +
              ""
            }
            src={
              "https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
            }
            alt="Photo de l'une de nos délicieuses pizza"
          />
        </div>
        <footer>
          <button>
            <a href={"#"}>Haut de la page</a>
          </button>
        </footer>
      </article>
      <Footer />
    </main>
  );
};

export default Home;
