import React from "react";

import { Navbar, Router } from "../components";

import "./Main.css";

const Main = () => {
	return (
		<div className="main_page">
			<Navbar />
			<Router />
		</div>
	);
};

export default Main;
