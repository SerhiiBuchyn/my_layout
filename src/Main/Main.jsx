import React from "react";

import { Router, Navbar } from "../components";

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
