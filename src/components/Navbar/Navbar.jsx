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
					<DropDownMenu />
				</ul>

				<button className="burger__menu menu__btn">
					<div className="burger__btn__element"> </div>
					<div className="burger__btn__element"> </div>
					<div className="burger__btn__element"> </div>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
