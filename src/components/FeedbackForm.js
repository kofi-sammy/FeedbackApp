import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';

const FeedbackForm = () => {
  const [text,setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState(' ')

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
  return (
   <Card style={{color:'#fff', backgroundColor:'white'}}>
       <form>
           <h2>How would you rate your services with us</h2>
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
