import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const SocialNav = ({locale}) => {
    // const [socials, setSocial] = useState([]);
    const [errors, setError] = useState([]);
    const [loading, setLoading] = useState([]);
    const { t, i18n } = useTranslation();
    
    const socials = t('socials', { returnObjects: true });

  return (
     <ul>
        {
            socials && socials.length > 0 && socials?.map((social, index) => {
                return (
                    <li key={index}>
                        <a 
                            href={social.alt} 
                            className="social-icon" 
                            rel="noreferrer"
                            target="_blank" 
                            aria-label={`Aller sur ${social.name}`}
                        >
                            <span className={`icon_${social.name}`} aria-hidden="true"></span>
                    </a>
                    </li>
                )
            })
        }
        <div></div>
    </ul>
  )
}
export default SocialNav;
