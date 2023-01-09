import React from "react"
import {RenderProductsLayout} from "./renderProducts"
import {AddPlural} from "../../Utils/textTransform"

export const RenderPizzas = ({pizzas, supplements, pizzaDeSaison}) => {
	const toutesLesBases = () => {
		const array = []
		pizzas.forEach(({base}) => array.push(base["title"]))
		return [...new Set(array)]
	}

	return (
		<>
			{/*<h3
				className={
					"animate__animated animate__slideInLeft mt-8 mb-4 text-center font-decorative text-3xl font-bold tracking-wide "
				}>
				Pizza de Saison
			</h3>*/}

			<RenderProductsLayout product={pizzaDeSaison} />
			{toutesLesBases().map(base => (
				<>
					<h3
						className={
							"animate__animated animate__slideInLeft mt-8 mb-4 text-center font-decorative text-3xl font-bold tracking-wide "
						}>
						{AddPlural(`Pizza ${base}`)}
					</h3>
					{pizzas
						.filter(pizza => pizza.base.title === base)
						.map(pizza => (
							<RenderProductsLayout product={pizza} />
						))}
				</>
			))}
			<dl className={"text-center"}>
				<dt className={"hidden font-describe text-base font-light"}>Suppléments</dt>
				{supplements.map(supp => (
					<span>
						<dd className={"inline"}>{supp.nom} </dd>
						<dd className={"inline"}>
							{supp.prix}€
							{supplements.indexOf(supp) === supplements.length - 1 ? "" : " / "}
						</dd>
					</span>
				))}
			</dl>
		</>
	)
}
