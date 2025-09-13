import {useState, useEffect} from "react";
import useElementInView from "../hooks/useElementInView";
import { useTranslation } from "react-i18next";
import skillsImage from "../assets/images/skills-section.svg";

const Skills = ({locale}) => {
    const [error, setError] = useState(null);
    const [targetRef, isInView] = useElementInView({ threshold: 0.5 });
    const [reveale, setReveale] = useState("");
    const { t } = useTranslation();


    useEffect(() => { if(isInView) setReveale("active") }, [isInView]);

    const skills = t('skills.items', { returnObjects: true });

    const toggleClass = () => {
        const skillsHide = document.getElementById("SkillsHide");
        const body = document.body; 

        if(skillsHide && skillsHide.classList.contains("hide")) {
            skillsHide.classList.add("open");
            skillsHide.classList.remove("hide");
            body.style.overflow = "hidden";
        } 
    }

    return (
        <section id="Skills" className="skills section" ref={targetRef}>
            <img
                width='544'
                height='428'
                alt="Avatar de Marianne Piquet-Nowak"
                loading="lazy"
                className={`reveal ${reveale}`}
                src={skillsImage}
            /> 
            <div className="skills__info">
                <h1 className="title_section">{t("skills.title")}</h1>
                <h2 className="subtitle_section">{t("skills.subtitle")}</h2>
                <p dangerouslySetInnerHTML={{ __html: t("skills.description")}}></p>

                <div className="skills__items">
                    {
                        skills?.map((skill, index) => (                       
                             <a key={index} href={skill.href} target="_blank" rel="referrer">
                                <span className={`icon_${skill.name}`} aria-hidden="true"></span>
                            </a> 
                        ))
                    }
                </div>
                
                <div>
                    {/* Bouton dynamique : si le panneau est ouvert => fermer // inversement si fermé */}
                    <button className="btn" title={t("skills.more")} onClick={() => toggleClass()}>{t("skills.more")}</button>
                </div>
            </div>    
        </section>     
    );
};

export default Skills;
