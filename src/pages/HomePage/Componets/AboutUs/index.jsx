import React from "react";

import { CustomLink } from "../../../../components";
import about__us__bg from "../../../../images/Group 119130.png";

import "./AboutUs.css";

const AboutUs = () => {
	return (
		<div className="about-us">
			<div className="about-us__left__container">
				<h4 className="about-us__title text-dark-grey">ABOUT</h4>
				<p className="about-us__description text-light-grey">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>
				<CustomLink to={"/contact"}>
					Learn more <span className="blue-arrow">➜</span>
				</CustomLink>
			</div>
			<div className="about-us__right__container">
				<img className="about-us__bg__img" src={about__us__bg} alt="about-us__bg" />
			</div>
		</div>
	);
};

export default AboutUs;
