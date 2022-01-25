import React from 'react';
import FeedbackItem from './FeedbackItem';


const FeedbackList = ({feedback, handleDelete}) => {
    if(!feedback || feedback.length === 0){
        <p>No feedback Recieved</p>
    }
  return(
        <div>
           
            {feedback.map((item) =>(
                 <FeedbackItem key={item.id} item={item} 
                 handleDelete={handleDelete} />
            ))}
        </div> 
  )
};

export default FeedbackList;
