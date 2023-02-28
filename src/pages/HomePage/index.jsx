import React from "react";

import { Hero, AboutUs, OurServices, WorkExamples, WhyUsSection } from "./Componets";
import { OurCustomers } from "./Componets";

import "./HomePage.css";

const HomePage = () => {
	return (
		<div className="home__page">
			<Hero />
			<AboutUs />
			<OurServices />
			<WorkExamples />
			<WhyUsSection />
			<OurCustomers />
		</div>
	);
};

export default HomePage;