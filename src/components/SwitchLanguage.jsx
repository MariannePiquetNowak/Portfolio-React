import { useLocation } from "react-router-dom";

const SwitchLanguage = () => {
    let location = useLocation();
    
    return (
        <div className="switch-language">
            { location.pathname !== "/fr/" ? <a className="btn btn_small" href="/fr/">FR</a> : <a className="btn btn_small" href="/en/">EN</a> }
        </div>
    )
}


export default SwitchLanguage;