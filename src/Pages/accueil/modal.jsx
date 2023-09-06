import React, {useEffect, useRef, useState} from "react"
import {NavLink} from "react-router-dom"
import PizzaDeSaison from "../../Data/pizzaDeSaison.json"

export const Modal = () => {
	const [modal, setModal] = useState(true)
	const $root = useRef( document.getElementById('root'))
	useEffect(() => {
		if (modal === true) {
			setTimeout(() => {
				const $modal = document.querySelector("dialog")
				$modal.showModal()
				$root.current.style.height = '100vh'
				$root.current.style.overflowY = 'hidden'
			}, 350)
		} else if (modal === false) {
			closeDialog()
		}
	}, [modal])

	const [counter, setCounter] = useState(29)

	useEffect(() => {
		if (modal === true) {
			if (counter < 3) {
				setModal(false)
			} else {
				const timer = setTimeout(() => {
					if (counter === 2) {
						clearTimeout(timer)
					}
					else {
						setCounter(counter - 1)
					}
				}, 1000)
			}
		}
		return () => {
		}
	}, [counter])

	function closeDialog() {
		const $modal = document.querySelector("#modal")
		$modal.className = "animate__animated animate__fadeOut"
		$root.current.style.height = 'auto'
		$root.current.style.overflowY = 'auto'

		const timerClose = setTimeout(() => {
			$modal.close()
			clearTimeout(timerClose)
		}, 450)
	}

	return (
		<dialog
			id={"modal"}
			data-timing={`Fermeture dans ${counter}s`}
			className={"animate__animated animate__fadeIn h-fit"}>
			<button
				className={
					"absolute top-4 right-12 text-xl font-semibold text-gold hover:cursor-pointer hover:text-beige hover:underline hover:underline-offset-4 md:top-12 md:text-3xl"
				}
				onClick={() => setModal(false)}>
				Fermer X
			</button>
			{/*decoration de noel*/}
			{/*<img*/}
			{/*	className={"hat"}*/}
			{/*	aria-hidden={true}*/}
			{/*	tabIndex={-1}*/}
			{/*	src={"./img/christmas-hat.png"}*/}
			{/*	alt="icon.."*/}
			{/*/>*/}
			{/*<img*/}
			{/*	className={"candy"}*/}
			{/*	aria-hidden={true}*/}
			{/*	tabIndex={-1}*/}
			{/*	src={"./img/christmas-candy.png"}*/}
			{/*	alt="icon.."*/}
			{/*/>*/}
			{/* Fermeture */}

			{/* <article
				className={
					"mx-auto mt-48 mb-2 grid h-fit place-content-center gap-12 text-center text-3xl text-beige"
				}>
				<h4 className={"block pb-4 font-bold text-beige "}>Congé Estival</h4>

				<p>Nous prenons des vacances, retrouvez-nous à la rentrée! </p>
				<p className={"text-gold"}>Réouverture le mercredi 30 août </p>
				<p>À bientôt !</p>
			</article> */}

			{/*// Pizza du Moment*/}
			<article
				id={"pizza-du-mois"}
				className={
					"mx-auto mt-12 mb-2 flex flex-col items-center justify-evenly text-center text-3xl text-beige"
				}>
				<h2
					className={
						"text-uppercase text-center font-accent text-3xl font-normal leading-loose tracking-wider text-beige"
					}>
					Découvrez notre
				</h2>
				<h3 className={"my-8 font-decorative text-5xl text-beige md:inline-block md:font-semibold"}>
					Pizza du Moment<i className="fa-regular fa-ghost"></i>
				</h3>

				<dl
					className={
						"my-12 w-full bg-beige py-4 font-describe text-lg font-normal leading-relaxed tracking-widest text-dark-grey sm:text-xl md:text-2xl xl:text-3xl"
					}>
					<dt className={"hidden"}>Ingrédients</dt>
					<dd>{PizzaDeSaison.base.describe}</dd>
					{PizzaDeSaison.ingredients.map(ingredient => (
						<dd key={ingredient}>{ingredient}</dd>
					))}
					{PizzaDeSaison.afterCook && (
						<>
							<h4 className={"mt-6 font-normal text-light-grey underline underline-offset-2"}>
								Après Cuisson
							</h4>
							<dt className={"hidden"}>Ingrédients ajoutés après-cuisson</dt>
							{PizzaDeSaison.afterCook.map(ingredient => (
								<dd>{ingredient}</dd>
							))}
						</>
					)}
				</dl>

				<NavLink
					className={
						"modalLink mb-12 text-center font-accent text-3xl text-gold underline underline-offset-4 md:text-4xl"
					}
					to={"/la-carte"}>
					Je découvre la carte Printemps-Été
				</NavLink>
				<img
					 className={"w-96 object-contain  object-center"}
					 src={PizzaDeSaison.url}
					 alt="La Pizza du moment"
				/>
			</article>
		</dialog>
	)
}
