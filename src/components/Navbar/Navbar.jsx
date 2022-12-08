import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import { FiArrowRight } from "react-icons/fi";
import language_img from "../../images/Group 120433.png";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar d-flex al-i-center position-fixed">
            <div className="logo">
                <img className="logo__img" src={logo} alt="logo"/>
            </div>
            <div className="menu__wrapper d-flex">
                <ul className="menu d-flex al-i-center navbar__font__style">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/services'}>Services</Link></li>
                    <li><Link to={'/portfolio'}>Portfolio</Link></li>
                    <li className="d-flex">
                        <Link to={'/contact'}>Contact us</Link>
                        <div className="contact__arrow">
                            <button className="menu__btn"><FiArrowRight/></button>
                        </div>
                    </li>
                    <li>
                        <button className="menu__btn" type="button">
                            <img className="language__img" src={language_img} alt="EN"/>
                        </button>
                    </li>
                </ul>

                <button className="burger__menu menu__btn">
                    <div className="burger__btn__element"></div>
                    <div className="burger__btn__element"></div>
                    <div className="burger__btn__element"></div>
                </button>
            </div>
        </nav>
    )
};

export default Navbar;
