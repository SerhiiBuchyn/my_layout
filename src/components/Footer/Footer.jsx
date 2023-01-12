import React from "react";
import { Link } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router";

import logo from "../../images/footerLogo.png";

import "./Footer.css";

const CustomLink = ({ to, children, ...props }) => {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
};
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__wrapper">
				<div className="footer__container d-flex jst-cont-sp-btw">
					<div className="footer__left__container margin-auto">
						<h2 className="footer__title__font">
							Let’s start something completely new together
						</h2>
						<p className="footer__description__font margin-auto">
							Drop us a line, and we’ll get in touch. We’ll see if we’re a match and how
							we can help each other.
						</p>
					</div>
					<div className="footer__right__container d-flex margin-auto">
						<div className="footer__absolute__bg__container">
							<div className="ellipse"></div>
							<div className="vector"></div>
						</div>
						<div className="footer__contact footer__font__style">
							<CustomLink to={"/contact"}>Contact us ➜</CustomLink>
						</div>
					</div>
				</div>
				<div className="footer__menu__container d-flex al-i-center jst-cont-sp-btw">
					<button
						className="margin-auto footer__btn"
						onClick={() => <Link to={"/home"} />}>
						<img className="img" src={logo} alt="logo" />
					</button>

					<ul className="footer__menu__list d-flex al-i-center footer__font__style">
						<CustomLink to={"/home"}>Home</CustomLink>

						<CustomLink to={"/about"}>About</CustomLink>

						<CustomLink to={"/services"}>Services</CustomLink>

						<CustomLink to={"/portfolio"}>Portfolio</CustomLink>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
