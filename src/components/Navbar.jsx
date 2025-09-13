import { useState, useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Link, NavLink } from 'react-router-dom';
import SocialNav from "./Socials";
import NavbarMobile from "./NavbarMobile";
import logo from '../assets/images/logo.svg';

const Navbar = ({socials, locale}) => {
    const [ariaExp, setAriaExp] = useState(false);
    const [isActive, setActive] = useState(0);
    const { t } = useTranslation();

    const onClick = (e) => {
        const links = document.querySelectorAll(`.link`);
        links.forEach(el => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    };

    const links = t('navbar', { returnObjects: true });

  return (
    
    <div className="navbar">
        <div className="navbar__item">
        <Link className="navbar__logo" to="/" alt="Retour à l'accueil" title="Retour à l'accueil">
            <img src={`${logo}`} loading="lazy" alt="Logo de Marianne Piquet-Nowak"/>
        </Link>
            <div>
                <div>Marianne</div>
                <p>Développeur web</p>
            </div>
        </div>
        <nav className="navbar__links" role="navigation">
            <ul>

                {
                    links && links.length > 0 && links?.map((link, index) => {
                        return (
                            <li key={link.id}>
                                <a 
                                    href={link.id} 
                                    className={`link`}
                                    alt={`Aller à ${link.name}`}
                                    title={`Aller à ${link.name}`}
                                    onClick={onClick}
                                >
                                    {link.name} 
                            </a>
                            </li>
                        )
                    })
                }

                <li>
                    <a 
                      href={`${process.env.REACT_APP_API_PORTFOLIO_URL}uploads/curiculum_vitae_4e3b7e9172.pdf`} 
                      download 
                      className="resume" 
                      aria-label={t("resume.name")}
                      title={t("resume.title")}
                    >{t("resume.name")}</a>
                </li>
            </ul>
            <div className="vertical-line-dot"></div>
        </nav>
        <div className="navbar__links-external">
            <SocialNav />
        </div>
        <NavbarMobile />
    </div>
  );
};

export default Navbar;
