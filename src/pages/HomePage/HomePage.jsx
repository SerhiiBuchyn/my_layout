import React from "react";
import Hero from "./Componets/Hero/Hero";
import AboutUs from "./Componets/AboutUs/AboutUs";
import Dashboard from "./Componets/Dashboard/Dashboard";
import OurServices from "./Componets/OurServices/OurServices";

import "./HomePage.css";

const HomePage = () => {
	return (
		<div className="home__page">
			<Hero />
			<AboutUs />
			<OurServices />
			<Dashboard />
		</div>
	);
};

export default HomePage;
