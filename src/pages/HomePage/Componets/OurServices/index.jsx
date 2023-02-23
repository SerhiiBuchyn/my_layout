import React from "react";

import { CustomLink } from "../../../../components";
import { OurServicesList } from "../index";
import "./OurServices.css";

const OurServices = () => {
	return (
		<div className="our-services">
			<div className="our-services__wrapper container">
				<div className="our-services__left__container">
					<h4 className="our-services__title text-white">OUR SERVICES</h4>
					<div className="our-services__link">
						<CustomLink to={"/services"}>
							<span className="text-white">Learn more</span>
							<span> </span>
							<span className="aqua-arrow">➜</span>
						</CustomLink>
					</div>
				</div>
				<div className="our-services__right__container">
					<h2 className="right__container__title text-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</h2>
					<OurServicesList />
				</div>
			</div>
		</div>
	);
};

export default OurServices;
