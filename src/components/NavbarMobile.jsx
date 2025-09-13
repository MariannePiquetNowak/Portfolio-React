import { useState, useRef } from 'react';
import { useTranslation } from "react-i18next";
import SocialNav from "./Socials";

const NavbarMobile = ({socials, locale}) => {
    const [ariaExp, setAriaExp] = useState(false);
    const [isActive, setActive] = useState(0);
    const { t } = useTranslation();
    const links = t('navbar', { returnObjects: true });
  return (
    
    <>
        <button 
            onClick={() => setAriaExp(!ariaExp)}
            className={`menu__burger ${ariaExp ? 'menu__burger-open' : ''}`}
            aria-expanded={ariaExp}
            title="Ouvrir le menu | Fermer le menu">
            <span className="menu__burger-box">
                <span className="menu__burger-line"></span>
                <span className="menu__burger-line"></span>
                <span className="menu__burger-line"></span>
                <span className="menu__burger-label">Menu</span>
            </span>
        </button>
        <div className="menu__navbar">
            <nav className="menu__links" role="navigation">
            <ul>

                {
                    links && links.length > 0 && links?.map((link, index) => {
                        return (
                            <li key={link.id}>
                                <a 
                                    href={link.id} 
                                    className={`link-icon ${isActive === 0 ? "active" : null}`}
                                    alt={`Aller à ${link.name}`} 
                                    title={`Aller à ${link.name}`}
                                    id={link.id}
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
            </nav>
            <div className="menu__links-external">
                <SocialNav socials={socials} locale={locale} />
            </div>
        </div>
    </>
  );
};

export default NavbarMobile;
