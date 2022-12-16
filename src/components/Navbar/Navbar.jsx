import { useState } from "react";
import { Link } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router";

import { FiArrowRight } from "react-icons/fi";
import logo from "../../images/logo.png";
import language_img from "../../images/Group 120433.png";

import "./Navbar.css";

const Navbar = () => {
	const [open, setOpen] = useState(false);

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

	return (
		<nav className="navbar navbar__font__style">
			<div className="menu__wrapper d-flex al-i-center">
				<div className="logo">
					<img className="img" src={logo} alt="logo" />
				</div>
				<ul className="menu__list al-i-center ">
					<CustomLink to={"/home"}>Home</CustomLink>

					<CustomLink to={"/about"}>About</CustomLink>

					<CustomLink to={"/services"}>Services</CustomLink>

					<CustomLink to={"/portfolio"}>Portfolio</CustomLink>

					<CustomLink to={"/contact"} className="d-flex">
						Contact us
						<div className="contact__arrow">
							<button className="menu__btn contact__arrow">
								<FiArrowRight />
							</button>
						</div>
					</CustomLink>

					<li>
						<button onClick={() => setOpen(open)} className="language__btn menu__btn">
							<img className="img" src={language_img} alt="EN" />
						</button>
					</li>
				</ul>

				<button onClick={() => setOpen(open)} className="burger__menu menu__btn">
					<div className="burger__btn__element"></div>
					<div className="burger__btn__element"></div>
					<div className="burger__btn__element"></div>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
