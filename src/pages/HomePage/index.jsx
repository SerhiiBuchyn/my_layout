import React from "react";
import { Hero, AboutUs, OurServices, OurCustomers, Dashboard } from "./Componets";

import "./HomePage.css";

const HomePage = () => {
	return (
		<div className="home__page">
			<Hero />
			<AboutUs />
			<OurServices />
			<OurCustomers />
			<Dashboard />
		</div>
	);
};

export default HomePage;
