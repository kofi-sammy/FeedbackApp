import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid';
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)
    const[feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false
    })

    //Delete Feedback
    const deleteFeedback=(id)=>{
        if (window.confirm('Are sure you want want delete this card?')) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }

      }
       //Update feedback item
        const updateFeedback =(id,updateItem)=>{
         setFeedbackEdit(
           feedback.map((item)=>(item.id === id ?  {...item, ...updateItem}:item))
         )
        }

      //Updating Edit Feedback
      const editFeedbackHandler= (item) =>{
         setFeedbackEdit({
           item,
           edit: true
         })
      }

      //Add Feedback
      const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }
    
    return <FeedbackContext.Provider value ={{
        feedback,
        feedbackEdit,
        deleteFeedback, 
        addFeedback,
        editFeedbackHandler,
        updateFeedback
    }} >
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;