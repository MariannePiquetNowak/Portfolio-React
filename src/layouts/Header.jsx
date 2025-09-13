import {useState, useEffect} from "react";
import useElementInView from "../hooks/useElementInView";
import { useTranslation } from "react-i18next";
import abouImg from "../assets/images/about-section.svg";

const Header = ({locale}) => {
    const [about, setAbout] = useState(null);
    const [targetRef, isInView] = useElementInView({ threshold: 0.5 });
    const [reveale, setReveale] = useState("");
    const { t } = useTranslation();

    useEffect(() => { if(isInView) setReveale("active") }, [isInView]);

  return (
    <header id="About" className="about section" ref={targetRef}>
        <img
            width='50%'
            height='500'
            alt="Avatar de Marianne Piquet-Nowak"
            loading="lazy"
            className={`reveal ${reveale}`}
            src={abouImg}
        /> 
        <div className="about__info">
        <span>{t("about.title")}</span>
          <h1>{t("about.name")}</h1>
          <h2>{t("about.job")}</h2>
          <p dangerouslySetInnerHTML={{ __html: t("about.presentation")}}></p>
        </div>
     
    </header>
  );
};

export default Header;
