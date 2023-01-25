import React from "react";
import { Route, Routes } from "react-router";

import {
	HomePage,
	AboutPage,
	ServicesPage,
	PortfolioPage,
	ContactPage
} from "../../pages";

const Index = () => {
	return (
		<div>
			<Routes>
				<Route path={"/"} element={<HomePage />} />
				<Route path={"/home"} element={<HomePage />} />
				<Route path={"about"} element={<AboutPage />} />
				<Route path={"services"} element={<ServicesPage />} />
				<Route path={"portfolio"} element={<PortfolioPage />} />
				<Route path={"contact"} element={<ContactPage />} />
			</Routes>
		</div>
	);
};

export default Index;
