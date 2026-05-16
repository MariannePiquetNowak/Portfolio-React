import { use } from "i18next";
import { useEffect } from "react";

const CardCarousel = ({handleMouseDown, company, date, tasks, cardStyle}) => {

    return (
        <div className={`card__container ${cardStyle}`}>
            <div 
                className={`card jobs__card `} 
                onMouseDown={handleMouseDown}
            >
                <h2 className="jobs__subtitle">{`${company}`}</h2>
                <span className="jobs__date">{`${date}`}</span>
                <ul>
                    { 
                       // tasks.map((t, index) => <li key={`task_${index}`}><p></p>{t}</li> ) 
                    }
                </ul>
            </div>
        </div>
    )
}

export default CardCarousel;