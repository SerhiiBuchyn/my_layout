import React from "react";
import { Hero, AboutUs, OurServices, OurCustomers, WorkExamples } from "./Componets";

import "./HomePage.css";

const HomePage = () => {
	return (
		<div className="home__page">
			<Hero />
			<AboutUs />
			<OurServices />
			<WorkExamples />
			<OurCustomers />
		</div>
	);
};

export default HomePage;
