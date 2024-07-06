import { useState } from 'react';
import './StarRating.css';

const StarRating = () => { 
    const [isFilled, setIsFilled] = useState(Array(5).fill(false));
    const [rating, setRating] = useState(null);
  
    return (
    <div>
        <div className='main-container'>
            {
                isFilled.map((star, i)=>{
                    return(
                        <div className={'each-star'} 
                        onClick={()=> {
                            setRating(rating-1 === i ? null : i+1);
                        }}
                        >
                            <span
              className="star"
              style={{
                color:
                rating-1 >= i ? "#ffc107" : "#e4e5e9"
              }}
            >
              &#9733;
            </span>
                    </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default StarRating;