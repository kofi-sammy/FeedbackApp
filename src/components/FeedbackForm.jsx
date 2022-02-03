import React, { useContext, useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackbackContext';

const FeedbackForm = () => {
  const [text,setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const[rating, setRating] = useState(10)
  const [message, setMessage] = useState(' ')

//Methods from Context component
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
      if(feedbackEdit.edit === true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
  }, [feedbackEdit])
  

  const formHandler = (event)=>{
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length <= 10){
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    }else{
        setMessage(null)
        setBtnDisabled(false)
    }

    setText(event.target.value)
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    if (text.trim().length > 10){
      const newFeedback ={
        text:text,
        rating: rating
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setText('')
    }
  }

  return (
   <Card style={{color:'#fff', backgroundColor:'white'}}>
       <form onSubmit={submitHandler}>
         <RatingSelect select={(rating)=>setRating(rating)}/>
           <h2>How would you rate our services with us?</h2>
            <div className='input-group'>
               <input type="text" onChange={formHandler} value={text} placeholder='Write a comment'/>
                <Button type='submit' isDisabled={btnDisabled}>send</Button>
            </div>
           
       </form>
       {message && <div className='message'>{message}</div>}
   </Card>   
          
  )
};

export default FeedbackForm;
