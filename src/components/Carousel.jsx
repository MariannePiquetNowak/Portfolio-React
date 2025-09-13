import { useState, useEffect } from 'react';
import Card from '../components/Card';

const Carousel = (props) => {
    console.log("props", props)
  return (
    <div className="carousel">
      {/* {
        <Card {...props}/>
        props?.map((prop, index) => {
            let pos = index > 0 ? "nextCard" : index === 0 ? "activeCard" : "prevCard"; 
            return (
                    
                )
            }) 
        }  */}
    </div>
  )
}
export default Carousel;