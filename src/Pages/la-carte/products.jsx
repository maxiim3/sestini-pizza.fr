import React, {useState} from "react"
import MenuWinterJson from "../../Data/menuWinter.json"
import MenuSummerJson from "../../Data/menuSummer.json"
import PizzaDeSaisonJson from "../../Data/pizzaDeSaison.json"
import "../../../node_modules/animate.css/animate.css"
import {RenderButtons} from "./renderButtons"
import {IconHandClick} from "../../Components/icons"
import {Layout} from "../../Layout/layout"
import {Header} from "../../Layout/header"
import {RenderPizzas} from "./renderPizzas"
import {RenderProductsLayout} from "./renderProducts"
import {consoleMessage} from "../../Utils/consoleMessage"

/**
 * La carte Routes
 * @return {JSX.Element}
 * @constructor
 */
export const Products = () => {
	/**
	 *
	 * @type {"Printemps-Été" || "Automne-Hiver"}
	 */
	let carte

	/**
	 *## Menu de Saison
	 * @param saison {"summer" || "winter"}
	 * @description Define **allProducts**
	 * @see allProducts
	 * @description Define **carte**
	 * @see carte
	 * @return {{desserts: *[], supplements: *[], pizzas: *[], boissons: *[], pizzaDeSaison: {_id: number, nom: string, pizzaDeSaison: boolean, ingredients: {}, base: {label: string, describe: string, title: string, key: string, state: string, setState: string}, avecViande: boolean, avecPoisson: boolean, afterCook: *, url: string, prix: string}}}
	 */
	function menuDeSaison(saison) {
		if (saison === "summer") {
			carte = "Printemps-Été"
			return {
				pizzaDeSaison: PizzaDeSaisonJson,
				pizzas: [...MenuSummerJson["pizzas"]],
				boissons: [...MenuSummerJson["boissons"]],
				desserts: [...MenuSummerJson["desserts"]],
				supplements: [...MenuSummerJson["supplements"]],
			}
		}
		if (saison === "winter") {
			carte = "Automne-Hiver"
			return {
				pizzaDeSaison: PizzaDeSaisonJson,
				pizzas: [...MenuWinterJson["pizzas"]],
				boissons: [...MenuWinterJson["boissons"]],
				desserts: [...MenuWinterJson["desserts"]],
				supplements: [...MenuWinterJson["supplements"]],
			}
		}
	}

	/**
	 *
	 * @type {{desserts: *[], supplements: *[], pizzas: *[], boissons: *[], pizzaDeSaison: {_id: number, nom: string, pizzaDeSaison: boolean, ingredients: {}, base: {label: string, describe: string, title: string, key: string, state: string, setState: string}, avecViande: boolean, avecPoisson: boolean, afterCook: *, url: string, prix: string}}}
	 */
	const allProducts = menuDeSaison("winter")
	/**
	 * @type {allProducts}
	 */
	const [products] = useState(allProducts.pizzas)
	/**
	 * @type {"pizzaDeSaison" || "pizzas" || "boissons" || "desserts" || "supplements"}
	 */
	const [activeCategory, setActiveCategory] = useState("pizzas")
	/**
	 * @type {products}
	 */
	const [filteredProducts, setFilteredProducts] = useState(products)

	/**
	 * When click on Button Category,
	 * (1) Set the Active Category
	 * (2) Filter the Datas from this Category
	 * @param cat: {string} for categorySection
	 */
	function handleCategorize(cat) {
		setActiveCategory(cat) //(1)
		setFilteredProducts(allProducts[cat]) //(2)
	}

	return (
		<Layout title={"Notre Carte"}>
			<section className="grid h-auto w-auto grid-flow-row place-content-center gap-4">
				<Header title={"Horaires"}>
					<IconHandClick />
				</Header>
				<RenderButtons
					activeCategory={activeCategory}
					onChange={handleCategorize}
				/>
			</section>

			<section className="grid h-max w-auto place-content-center gap-12">
				<Header
					title={`Nos ${activeCategory[0].toUpperCase() + activeCategory.slice(1)}`}
				/>
				<p
					className={
						"animate__animated animate__fadeIn text-center font-['Cinzel'] text-3xl font-normal uppercase"
					}>
					Carte {carte}
				</p>
				<div
					className={
						"animate__animated animate__slideInUp h-full w-screen bg-beige text-dark-grey md:max-w-6xl md:rounded-xl"
					}>
					<article className={"mx-auto p-12"}>
						<ul className={"my-4"}>
							{activeCategory === "pizzas" ? (
								<RenderPizzas
									pizzaDeSaison={allProducts.pizzaDeSaison}
									pizzas={filteredProducts}
									supplements={allProducts.supplements}
								/>
							) : (
								filteredProducts.map(product => (
									<RenderProductsLayout product={product} />
								))
							)}
						</ul>
					</article>
				</div>
			</section>
		</Layout>
	)
}
