import CardCarousel from "./CardCarousel";
import Paginator from "./Paginator";

const MobileCarousel = ({jobs, index, slideLeft, slideRight, setIndex, handleMouseDown}) => {
  return (

     <div className="carousel_mobile__container">
        <div className="carousel">
        {
            jobs?.map((job, i) => {
                //let pos = index > 0 ? "nextCardCarousel" : index === 0 ? "activeCardCarousel" : "prevCardCarousel"; 
                let pos = i > index ? "nextCardCarousel" : i === index ? "activeCardCarousel" : "prevCardCarousel"; 
                return (
                        <CardCarousel 
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
    
  )
}
export default MobileCarousel;