import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Router from "../components/Routes/Router";

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
