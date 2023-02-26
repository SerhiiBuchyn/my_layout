import React from "react";

import logo0 from "../../../../../images/VectorApple.png";
import logo1 from "../../../../../images/diesneyLogo.png";
import logo2 from "../../../../../images/adidasLogo.png";
import logo3 from "../../../../../images/beerPubLogo.png";
import logo4 from "../../../../../images/prudentialLogo.png";

import { CustomerLogo } from "../../index";

import "./CustomersLogoList.css";

const costumersList = [
	{ id: 0, img: logo0 },
	{ id: 1, img: logo1 },
	{ id: 2, img: logo2 },
	{ id: 3, img: logo3 },
	{ id: 4, img: logo4 }
];

const CustomersLogoList = () => {
	return (
		<div className="customers-logo__list">
			{costumersList.map((logo) => (
				<CustomerLogo key={logo.id} logo={logo} />
			))}
		</div>
	);
};

export default CustomersLogoList;
