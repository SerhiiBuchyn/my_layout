import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import { DropDownMenu, CustomLink } from "../index";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar container">
			<div className="menu__wrapper">
				<button
					className="logo__wrapper logo menu__navbar__btn"
					onClick={() => <Link to={"/home"} />}>
					<img className="img" src={logo} alt="logo" />
				</button>

				<ul className="menu__list nav__font__style text-black">
					<CustomLink to={"/home"}>Home</CustomLink>

					<CustomLink to={"/about"}>About</CustomLink>

					<CustomLink to={"/services"}>Services</CustomLink>

					<CustomLink to={"/portfolio"}>Portfolio</CustomLink>

					<CustomLink to={"/contact"}>Contact us ➜</CustomLink>

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
