import React from "react";

import { CustomLink } from "../../../../components";
import logo from "../../../../images/logo big.png";
import title from "../../../../images/hero title.png";

import "./Hero.css";

const Hero = () => {
	return (
		<div className="hero ">
			<div className="hero__wrapper container">
				<div className="hero__mobile__logo">
					<img className="hero__img" src={logo} alt="mobile-logo" />
				</div>
				<div className="hero__left__container">
					<div className="hero__title__container">
						<img className="hero__img" src={title} alt="title" />
					</div>
					<p className="hero__description text-dark-grey">
						Competenza, innovazione e creatività: ideiamo nuove esperienze
						digitalipersonalizzate per le esigenze della tua azienda.
					</p>

					<CustomLink to={"/contact"}>
						Get started <span className="blue-arrow">➜</span>
					</CustomLink>
				</div>

				<div className="hero__right__container">
					<img className="hero__bg__img" src={logo} alt="logo" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
