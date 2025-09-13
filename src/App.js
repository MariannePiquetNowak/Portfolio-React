/* ======== IMPORTS BEGIN ======== */
import React, { useState } from "react";
import { Suspense } from 'react';
import { Navigate } from "react-router-dom";
import { 
    BrowserRouter, 
    Routes, 
    Route, 
} from "react-router-dom";
import Home from "./routes/home";
import ErrorPage from "./errors/error-page";
import SwitchLanguage from "./components/SwitchLanguage";
import './styles/globals.scss';
import { useTranslation } from "react-i18next";


const App = () => {
    const i18n = useTranslation();
    const baseRouteUrl = "/:locale";
    
// https://react.dev/reference/react/Suspense  <= pour la page de chargement
    return (
        <BrowserRouter>
            <Suspense fallback="...loading">
                <SwitchLanguage /> 
                <Routes>
                    <Route path="/" element={<Navigate to="/fr/" />}  errorElement={<ErrorPage />} />
                    <Route path={baseRouteUrl} element={<Home />} errorElement={<ErrorPage />} />
                    <Route path="*" element={<h1>NOT FOUND</h1>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;