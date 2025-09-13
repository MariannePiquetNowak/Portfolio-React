import { useTranslation } from "react-i18next";
// Design img
import illustrator from "../assets/images/Design/Adobe Illustrator.svg";
import figma from "../assets/images/Design/Figma.svg";
import photoshop from "../assets/images/Design/Photoshop.svg";
// Front-End img
import html from "../assets/images/frontend/html5.svg";
import css from "../assets/images/frontend/css3.svg";
import less from "../assets/images/frontend/less.svg";
import sass from "../assets/images/frontend/sass.svg";
import javascript from "../assets/images/frontend/JS.svg";
import react from "../assets/images/frontend/reactJS.svg";
// Back-End img
import php from "../assets/images/backend/PHP.svg";
import symfony from "../assets/images/backend/Symfony.svg";
import wp from "../assets/images/backend/Wordpress.svg";
import strapi from "../assets/images/backend/Strapi.svg";

const SkillsHide = ({locale}) => {
    // Ici, aucune requête API, on va tout faire en dur (de toute façon, on passera en NextJS par la suite donc bon)
    const { t } = useTranslation();
    const toggleClass = () => {
        const skillsHide = document.getElementById("SkillsHide");
        const body = document.body; 

        if(skillsHide && skillsHide.classList.contains("open")) {
            skillsHide.classList.add("hide");
            skillsHide.classList.remove("open"); 
            body.style.overflow = "";
        }  
    }
    return (
        <section id="SkillsHide" className={`section skills__details hide`}>
        
            <div className="skills__details_content">
                <div className="skills__details_info">
                    <h1 className="title_section">{t("skills.title")}</h1>
                    <p>
                        {t("skills.description_2")}
                    </p>
                    <div>
                        {/* Bouton dynamique : si le panneau est ouvert => fermer // inversement si fermé */}
                        <button className="btn" title={t("skills.close")} onClick={() => toggleClass()}>{t("skills.close")}</button>
                    </div>
                </div>    
                <div className="skills__details_list">
                    <div>
                        <h3>{t("skills.graphism_title")}</h3>
                        <div className="skills__tools">
                            <img src={illustrator} width="40" height="40" alt="Adobe Illustrator" />
                            <img src={photoshop} width="40" height="40" alt="Adobe Photoshop" />
                            <img src={figma} width="40" height="40" alt="Figma" />
                        </div>
                        <div className="progress__container">
                            <div className="progress__bar" style={{width:"55%"}}></div>
                        </div>
                    </div>
                    <div>
                        <h3>{t("skills.front_title")}</h3>
                        <div className="skills__tools">
                            <img src={html} width="40" height="40" alt="HTML5" />
                            <img src={css} width="40" height="40" alt="CSS3" />
                            <img src={sass} width="40" height="40" alt="Sass" />
                            <img src={less} width="40" height="40" alt="Less" />
                            <img src={javascript} width="40" height="40" alt="Javscript Vanilla" />
                            <img src={react} width="40" height="40" alt="ReactJS" />
                        </div>
                        <div className="progress__container">
                            <div className="progress__bar" style={{width:"70%"}}></div>
                        </div>
                    </div>
                    <div>
                    <h3>{t("skills.back_title")}</h3>
                        <div className="skills__tools">
                            <img src={php} width="40" height="40" alt="PHP" />
                            <img src={symfony} width="40" height="40" alt="Symfony" />
                            <img src={wp} width="40" height="40" alt="Wordpress" />
                            <img src={strapi} width="40" height="40" alt="Strapi" />
                        </div>
                        <div className="progress__container">
                            <div className="progress__bar" style={{width:"35%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>     
    );
};

export default SkillsHide;
