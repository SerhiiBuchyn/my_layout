import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useMatch, useResolvedPath } from "react-router";

import logo from "../../images/logo.png";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

import "./Navbar.css";

const Navbar = () => {
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
		<nav className="navbar ">
			<div className="menu__wrapper d-flex al-i-center">
				<div className="logo__wrapper logo">
					<img className="img" src={logo} alt="logo" />
				</div>
				<ul className="menu__list d-flex al-i-center">
					<CustomLink to={"/home"}>
						<span className="nav__font__style">Home</span>
					</CustomLink>

					<CustomLink to={"/about"}>
						<span className="nav__font__style">About</span>
					</CustomLink>

					<CustomLink to={"/services"}>
						<span className="nav__font__style">Services</span>
					</CustomLink>

					<CustomLink to={"/portfolio"}>
						<span className="nav__font__style">Portfolio</span>
					</CustomLink>

					<CustomLink to={"/contact"} className="d-flex al-i-center">
						<span className="nav__font__style">Contact us</span>
						<div className="contact__arrow">
							<button className="menu__btn contact__arrow">
								<FiArrowRight />
							</button>
						</div>
					</CustomLink>
					<DropDownMenu />
				</ul>

				<button className="burger__menu menu__btn">
					<div className="burger__btn__element"></div>
					<div className="burger__btn__element"></div>
					<div className="burger__btn__element"></div>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
