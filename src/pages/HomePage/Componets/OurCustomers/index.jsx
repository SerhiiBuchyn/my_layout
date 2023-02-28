import React from "react";

import { CustomersLogoList } from "../index";

import "./OurCustomers.css";

const OurCustomers = () => {
	return (
		<div className="our-customers container">
			<div className="our-customers__left__container">
				<div className="our-customers__completed-projects">
					<h1 className="completed__projects text-grey">2k+</h1>
					<p className="our-customers__description text-dark-grey">Developed project</p>
				</div>
				<div className="our-customers__feedbacks">
					<h1 className="feedback__rating text-orange">4.9</h1>
					<p className="our-customers__description text-dark-grey">Customers feedback</p>
				</div>
			</div>
			<div className="our-customers__right__container">
				<h3 className="our-customers__title text-dark-grey">
					Trusted bu 2000+ happy customers, that achived their goal.
				</h3>
				<CustomersLogoList />
			</div>
		</div>
	);
};

export default OurCustomers;
