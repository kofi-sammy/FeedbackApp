import{motion, AnimatePresence} from 'framer-motion'
import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackbackContext'
import Spinner from './Spinner';



const FeedbackList = () => {
  const {feedback, isLoading} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        <p>No feedback Recieved</p>
    }
  return isLoading ? (
                <Spinner/>
              ):(
          <div className='feedBack-list'>
           <AnimatePresence>
           {feedback.map((item) =>(
             <motion.div key={item.id} initial={{opacity: 0}}
             animate={{opacity:1}} exit={{opacity: 0}}>
                <FeedbackItem key={item.id} item={item} />
            </motion.div>

                 
            ))}
           </AnimatePresence>
            
        </div> 
      )
};

export default FeedbackList;
