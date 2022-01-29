import{motion, AnimatePresence} from 'framer-motion'
import React from 'react';
import FeedbackItem from './FeedbackItem';


const FeedbackList = ({feedback, handleDelete}) => {
    if(!feedback || feedback.length === 0){
        <p>No feedback Recieved</p>
    }
  return(
        <div className='feedBack-list'>
           <AnimatePresence>
           {feedback.map((item) =>(
             <motion.div key={item.id} initial={{opacity: 0}}
             animate={{opacity:1}} exit={{opacity: 0}}>
                <FeedbackItem key={item.id} item={item} 
                handleDelete={handleDelete} />
            </motion.div>

                 
            ))}
           </AnimatePresence>
            
        </div> 
  )
};

export default FeedbackList;
