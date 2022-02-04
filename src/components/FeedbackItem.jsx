import React, { useContext } from 'react';
import Card from './Card';
import {FaTimes, FaEdit}from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackbackContext';


const FeedbackItem = ({item}) => { 
  const {deleteFeedback, editFeedbackHandler, } = useContext(FeedbackContext)
  
  return (
      <Card >
          <div className="num-display">{item.rating}</div>
          <button  onClick={() => deleteFeedback(item.id)} className='close'>
            <FaTimes color='purple'/>
          </button>
          <button className='edit' onClick={()=>editFeedbackHandler(item)}>
            <FaEdit color='purple'/>
          </button>
          <div className="text">{item.text}</div>
          
      </Card>
    );
}

export default FeedbackItem;
