import React from "react";

import { CustomLink } from "../../../../components";
import logo from "../../../../images/logo big.png";
import mobileBigLogo from "../../../../images/mobileBigLogo.png";

import "./Hero.css";

const Hero = () => {
	return (
		<div className="hero__wrapper">
			<div className="hero__mobile__logo">
				<img className="hero__mobile-logo__img" src={mobileBigLogo} alt="mobile-logo" />
			</div>
			<div className="hero__left__container">
				<div className="hero__title__container">
					<h1 className="hero__title">
						SOLUZIONI <span className="hero__bg__title text-white">DIGITALI</span>
					</h1>
					<h1 className="hero__title">
						<span className="hero__bg__title text-white">SMART</span> E INNOVATIVE
					</h1>
				</div>
				<p className="hero__description text-dark-grey">
					Competenza, innovazione e creatività: ideiamo nuove esperienze
					digitalipersonalizzate per le esigenze della tua azienda.
				</p>

				<CustomLink to={"/contact"}>
					Get started <span className="arrow">➜</span>
				</CustomLink>
			</div>

			<div className="hero__right__container">
				<img className="hero__bg__img" src={logo} alt="logo" />
			</div>
		</div>
	);
};

export default Hero;
