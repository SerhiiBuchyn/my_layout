import React from "react";

import Index from "../components/Navbar";
import Router from "../components/Routes/Router";

import "./Main.css";

const Main = () => {
	return (
		<div className="main_page">
			<Index />
			<Router />
		</div>
	);
};

export default Main;
