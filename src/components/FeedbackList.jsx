import React from 'react';
import FeedbackItem from './FeedbackItem';


const FeedbackList = ({feedback}) => {
    if(!feedback || feedback.length === 0){
        <p>No feedback Recieved</p>
    }
  return(
        <div>
           
            {feedback.map((item) =>(
                 <FeedbackItem key={item.id} item={item}  />
            ))}
        </div>
  )
};

export default FeedbackList;
