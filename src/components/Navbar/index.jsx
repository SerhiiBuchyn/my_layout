import { Link } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router";

import logo from "../../images/logo.png";
import { DropDownMenu } from "../index";

import "./Navbar.css";

const CustomLink = ({ to, children, ...props }) => {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props} className={`${isActive ? "active" : ""} "active__link"`}>
				{children}
			</Link>
		</li>
	);
};

const Navbar = () => {
	return (
		<nav className="navbar ">
			<div className="menu__wrapper d-flex al-i-center jst-cont-sp-btw">
				<button
					className="logo__wrapper logo menu__navbar__btn"
					onClick={() => <Link to={"/home"} />}>
					<img className="img" src={logo} alt="logo" />
				</button>

				<ul className="menu__list d-flex al-i-center nav__font__style">
					<CustomLink to={"/home"}>Home</CustomLink>

					<CustomLink to={"/about"}>About</CustomLink>

					<CustomLink to={"/services"}>Services</CustomLink>

					<CustomLink to={"/portfolio"}>Portfolio</CustomLink>

					<CustomLink to={"/contact"} className="d-flex">
						Contact us ➜
					</CustomLink>

					<DropDownMenu />
				</ul>

				<button className="burger__menu menu__navbar__btn">
					<div className="burger__btn__element"></div>
					<div className="burger__btn__element"></div>
					<div className="burger__btn__element"></div>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
