import React from "react";
import { Route, Routes } from "react-router";

import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import PortfolioPage from "../../pages/PortfolioPage/PortfolioPage";
import ContactPage from "../../pages/ContactPage/ContactPage";

const Router = () => {
	return (
		<div>
			<Routes>
				<Route path={"/"} element={<HomePage />} />
				<Route path={"about"} element={<AboutPage />} />
				<Route path={"services"} element={<ServicesPage />} />
				<Route path={"portfolio"} element={<PortfolioPage />} />
				<Route path={"contact"} element={<ContactPage />} />
			</Routes>
		</div>
	);
};

export default Router;
