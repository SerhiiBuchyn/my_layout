import React from 'react';
import { Route, Routes } from "react-router";

import Navbar from "../../components/Navbar/Navbar";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import ServicesPage from "../ServicesPage/ServicesPage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import ContactPage from "../ContactPage/ContactPage";
import Footer from "../../components/Footer/Footer";

import "./MainPage.css";

const MainPage = () => {

    return (
        <div className="">
            <Navbar/>
            <Routes>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'services'} element={<ServicesPage/>}/>
                <Route path={'portfolio'} element={<PortfolioPage/>}/>
                <Route path={'contact'} element={<ContactPage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
};

export default MainPage;