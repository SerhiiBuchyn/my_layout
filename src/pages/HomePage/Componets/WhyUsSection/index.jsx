import React from "react";

import { CustomLink } from "../../../../components";
import { WhyUseCards } from "../index";

import "./WhyUsSection.css";

const WhyUseSection = () => {
	return (
		<div className="why-us">
			<div className="why-us__wrapper container">
				<div className="why-us__left__container">
					<h4 className="why-us__title text-dark-grey">PERCHE SCEGLIERCI?</h4>
					<p className="why-us__description text-light-grey">
						Affidarti a Wiselyst significa scegliere professionisti del settore. Curiamo
						il tuo progetto sotto ogni aspetto, mettendoci sempre passione e precisione.
					</p>
					<div className="why-us__link">
						<CustomLink to={"/services"}>
							<span className="text-dark-grey">Learn more</span>
							<span> </span>
							<span className="blue-arrow">➜</span>
						</CustomLink>
					</div>
				</div>
				<div className="why-us__right__container">
					<WhyUseCards />
				</div>
			</div>
		</div>
	);
};

export default WhyUseSection;
