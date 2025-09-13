import {useState, useEffect} from "react";
import useElementInView from "../hooks/useElementInView";
import { useTranslation } from "react-i18next";
import Card from '../components/Card';
import Paginator from "../components/Paginator";

const Jobs = ({locale}) => {
    // const [error, setError] = useState(null);
    const [targetRef, isInView] = useElementInView({ threshold: 0.5 });
    const [reveale, setReveale] = useState("");
    const [index, setIndex] = useState(0)
    const { t } = useTranslation();

    useEffect(() => { if(isInView) setReveale("active") }, [isInView]);

    const jobs = t('jobSection.jobs', { returnObjects: true });

    // functions slide to 
    const slideLeft = () => {
        if (index - 1 >= 0) { setIndex(index - 1); }
    };

    const slideRight = () => {
        if ((index + 1) <= (jobs.length - 1)) setIndex(index + 1); 
    };

    // Handle width keyboard
    const handleMouseDown = (e) => {
        let card = e.target;
        let offset = 0; /* to keep track of the value to offset the card left */
        let initialX = e.clientX; /* keeps the initial mouse click x value */
        document.onmousemove = onMouseMove; /* set the documents onmousemove event to use this function */
        document.onmouseup = onMouseUp; /* sets the documents onmouseup event to use this function */

        console.log("target", e.target)

        function onMouseMove(e) {
            offset = e.clientX - initialX; /* set offset to the current position of the cursor, minus the initial starting position  */         
            card.style.left = offset + "px"; /* set the left style property of the card to the offset value */
            if (offset <= -100) {
                slideRight();
                if (index === jobs.length - 1) {  /* if we're at the last card, snap back to center */
                    card.style.left = 0;
                } else { /* hide the shift back to center until after the transition */           
                    setTimeout(() => {
                        card.style.left = 0;
                    }, 1000);
                }
                return;
            }
            if (offset >= 100) {
                slideLeft();
                if (index === 0) { /* if we're at the first card, snap back to center */
                    card.style.left = 0;
                } else { /* hide the shift back to center until after the transition */
                    setTimeout(() => {
                        card.style.left = 0;
                    }, 1000);
                }
                return;
            }
            /* if user releases mouse early, card needs to snap back */
            if (offset < 0 && offset > -100) {
                card.style.left = 0;
            }
            if (offset > 0 && offset < 100) {
                card.style.left = 0;
            }
        }
    
        function onMouseUp(e) {
            /* remove functions from event listeners (stop tracking mouse movements) */
            document.onmousemove = null;
            document.onmouseup = null;
        }
    };

    return (
        <section id="Experiences" className="jobs section" ref={targetRef}>
            
            <div className="jobs__info">
                <h1 className="title_section">{t("jobSection.title")}</h1>
                <div className="carousel__container">
                    <div className="carousel">
                        {
                            jobs?.map((job, i) => {
                                //let pos = index > 0 ? "nextCard" : index === 0 ? "activeCard" : "prevCard"; 
                                let pos = i > index ? "nextCard" : i === index ? "activeCard" : "prevCard"; 
                                return (
                                        <Card 
                                            {...job} 
                                            key={`card_${i}`} 
                                            cardStyle={pos} 
                                            handleMouseDown={handleMouseDown}
                                        />
                                )
                            }) 
                        }

                    </div>
                    <div className="carousel__navigation">
                        <button onClick={slideLeft}>
                            <span className="icon_to_left" aria-hidden="true"></span>
                        </button>
                        <Paginator dataLength={jobs.length} activeIndex={index} setIndex={setIndex}/>
                        <button onClick={slideRight}>
                            <span className="icon_to_right" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>    
        </section>     
    );
};

export default Jobs;
