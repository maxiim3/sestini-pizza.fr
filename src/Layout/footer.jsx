import React from "react"
import {IconFaceBook, IconInstagram, IconLogoWithoutText} from "../Components/icons"
import {Email, PhoneNumber} from "../Utils/informations"
import info from "../Data/informations.json"

export const Footer = () => {
	return (
		<footer className={"borderTop z-30 grid w-screen place-content-center bg-dark-grey py-12"}>
			<div className="flex max-w-5xl flex-col items-center justify-center gap-4 text-center leading-relaxed tracking-wide text-light-grey">
				<div className="flex w-4/5 items-center justify-around">
					<div className="self-center justify-self-center">
						<a
							href={info[0].facebook}
							className={"inline-block"}>
							<IconFaceBook beige={false} />
						</a>
					</div>
					<IconLogoWithoutText classTW={"w-24"} />
					<div className="self-center justify-self-center">
						<a
							href={info[0].instagram}
							className={"inline-block"}>
							<IconInstagram beige={false} />{" "}
						</a>
					</div>
				</div>
				<div className={"col-start-2 row-start-2"}>
					<p>
						<Email />
					</p>
					<p>
						<PhoneNumber />
					</p>
				</div>
				<div className={"col-start-2 row-start-3"}>
					<p>SARL 10558442XD</p>
				</div>
				<div className={"col-start-2 row-start-5"}>
					<p>
						Site créé et maintenu par{" "}
						<a
							href="https://github.com/maxiim3"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-yellow-300 text-gold">
							Maxime Tamburrini (maxiim3)
						</a>
					</p>
				</div>
				<p className="mt-2">&copy; {new Date().getFullYear()} Tous droits réservés.</p>
				<div className={"col-start-2 row-start-6"}>
					<a
						href="https://www.pexels.com/video/aerial-view-of-a-beautiful-beach-2169880/"
						target="_blank"
						rel="noopener noreferrer">
						Video by Denys Gromov
					</a>
				</div>
			</div>
		</footer>
	)
}
