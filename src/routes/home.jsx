import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
/* Layouts */
import Wrapper from '../layouts/Wrapper';
/* Components */
import Navbar from '../components/Navbar' ;
/* styles */
import '../styles/globals.scss';

const Home = () => {
    /* ===== CONSTANTES || BEGIN =====  */
    const size = useWindowSize();
    const { i18n } = useTranslation();
    const location = useLocation();
    const locationPath = location.pathname.split("/").join("");
    /* ===== CONSTANTES || END =====  */

    /* Ajoute une class au body pour le responsive */
    /* Cela évite d'utiliser les media queries */
    useEffect(() => {
        function addClassBodyResponsive() {
            size.width <= 768 ? document.body.classList.add("mobile_mode") : document.body.classList.remove("mobile_mode");
        }
        addClassBodyResponsive();
    }, [size.width]);

    return (
        <div className="main">
            <Navbar locale={locationPath} />
            <Wrapper locale={locationPath} />
        </div>
    );
}

export default Home;