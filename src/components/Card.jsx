import {useState, useEffect} from "react";

const Card = ({handleMouseDown, company, date, tasks, cardStyle}) => {
    return (
        <div className={`card__container ${cardStyle}`}>
            <div 
                className={`card jobs__card `} 
                onMouseDown={handleMouseDown}
            >
                <h2 className="jobs__subtitle">{company}</h2>
                <span className="jobs__date">{date}</span>
                <ul>
                    { tasks.map((t, index) => <li key={`task_${index}`}>{t}</li> ) }
                </ul>
            </div>
        </div>
    )
}

export default Card;