import React from 'react';
import Card from './Card';



const FeedbackItem = ({item}) => { 
  return (
      <Card >
          <div className="num-display">{item.rating}</div>
          <div className="text">{item.text}</div>
          
      </Card>
    );
}

export default FeedbackItem;
